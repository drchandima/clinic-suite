// components/PharmacyCenter.js
'use client';

import React, { useState, useMemo } from 'react';
import { decrementDrugStock, incrementDrugStock } from '../lib/firestoreClient';

export default function PharmacyCenter({ clinicId, drugs = [], prescription = null, pharmacistEmail }) {
  const [q, setQ] = useState('');
  const [qtyMap, setQtyMap] = useState({}); // drugId -> qty (input)
  const [cart, setCart] = useState([]); // invoice items: { drugId, drugName, dose, qty, unitPrice, lineTotal }
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  const filtered = useMemo(() => {
    const term = (q || '').trim().toLowerCase();
    if (!term) return drugs;
    return drugs.filter(d => (d.name || '').toLowerCase().includes(term) || (d.dose || '').toLowerCase().includes(term));
  }, [q, drugs]);

  function setQty(drugId, val) {
    const n = Number(val || 0);
    setQtyMap(prev => ({ ...prev, [drugId]: n }));
  }

  async function handleAdd(drug) {
    const drugId = drug.id;
    const qty = Number(qtyMap[drugId] || 0);
    if (!qty || qty <= 0) {
      alert('Enter a valid quantity (>0)');
      return;
    }
    if (!clinicId) {
      alert('Missing clinic context');
      return;
    }
    setBusy(true);
    setMsg(null);
    try {
      // decrement stock atomically
      const newQty = await decrementDrugStock(clinicId, drugId, qty);

      // add to cart (merge if exists)
      const unitPrice = Number(drug.pricePerUnit || 0);
      setCart(prev => {
        const existing = prev.find(p => p.drugId === drugId);
        if (existing) {
          return prev.map(p => p.drugId === drugId ? { ...p, qty: p.qty + qty, lineTotal: (p.qty + qty) * p.unitPrice } : p);
        }
        return [...prev, { drugId, drugName: drug.name, dose: drug.dose || '', qty, unitPrice, lineTotal: unitPrice * qty }];
      });

      setMsg({ type: 'success', text: `Added ${qty} x ${drug.name}. New stock: ${newQty}` });
      setQtyMap(prev => ({ ...prev, [drugId]: 0 }));
    } catch (err) {
      console.error(err);
      setMsg({ type: 'error', text: err?.message || String(err) });
    } finally {
      setBusy(false);
    }
  }

  // update quantity in cart (adjust stock for difference)
  async function updateCartQty(drugId, newQty) {
    newQty = Number(newQty || 0);
    const item = cart.find(c => c.drugId === drugId);
    if (!item) return;

    const oldQty = Number(item.qty || 0);
    if (newQty === oldQty) return;

    if (newQty <= 0) {
      // same as removing the item
      return removeFromCart(drugId);
    }

    const delta = newQty - oldQty; // positive => need to decrement stock, negative => increment stock
    setBusy(true);
    setMsg(null);
    try {
      if (delta > 0) {
        // need to decrement additional stocks
        await decrementDrugStock(clinicId, drugId, delta);
      } else if (delta < 0) {
        // return stock to inventory
        await incrementDrugStock(clinicId, drugId, Math.abs(delta));
      }

      // update cart item
      setCart(prev => prev.map(p => p.drugId === drugId ? { ...p, qty: newQty, lineTotal: newQty * p.unitPrice } : p));
      setMsg({ type: 'success', text: `Updated ${item.drugName} quantity to ${newQty}.` });
    } catch (err) {
      console.error(err);
      setMsg({ type: 'error', text: err?.message || String(err) });
    } finally {
      setBusy(false);
    }
  }

  // remove item and restock its qty
  async function removeFromCart(drugId) {
    const item = cart.find(c => c.drugId === drugId);
    if (!item) return;
    if (!confirm(`Remove ${item.qty} x ${item.drugName} from invoice and restock?`)) return;

    setBusy(true);
    setMsg(null);
    try {
      await incrementDrugStock(clinicId, drugId, item.qty);
      setCart(prev => prev.filter(p => p.drugId !== drugId));
      setMsg({ type: 'success', text: `Removed ${item.drugName} and restored ${item.qty} to stock.` });
    } catch (err) {
      console.error(err);
      setMsg({ type: 'error', text: err?.message || String(err) });
    } finally {
      setBusy(false);
    }
  }

  function computeTotal() {
    return cart.reduce((s, it) => s + (Number(it.lineTotal) || 0), 0);
  }

  // Print invoice (A5) using hidden iframe (like prescription)
  function printInvoice() {
    if (cart.length === 0) {
      alert('Invoice is empty.');
      return;
    }
    const now = new Date();
    const clinicName = clinicId || 'Clinic';
    const patientName = prescription?.patientNic ?? '-';
    const docHtml = buildInvoiceHtml({ clinicName, patientName, cart, pharmacistEmail, now });
    // create hidden iframe and print
    try {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      iframe.style.visibility = 'hidden';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentWindow || iframe.contentDocument;
      const doc = (iframeDoc.document) ? iframeDoc.document : iframeDoc;

      doc.open();
      doc.write(docHtml);
      doc.close();

      setTimeout(() => {
        try {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        } catch (err) {
          console.error('Print failed', err);
          alert('Printing failed. Try browser print dialog or allow popups.');
        } finally {
          setTimeout(() => { try { document.body.removeChild(iframe); } catch(_) {} }, 500);
        }
      }, 300);
    } catch (err) {
      console.error('printInvoice error', err);
      alert('Unable to print. Check browser settings.');
    }
  }

  function buildInvoiceHtml({ clinicName, patientName, cart, pharmacistEmail, now }) {
    const escaped = (s) => {
      if (s === null || s === undefined) return '';
      return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    };
    const rows = cart.map(it => `
      <tr>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;">${escaped(it.drugName)}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;">${escaped(it.dose)}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;text-align:right;">${escaped(String(it.qty))}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;text-align:right;">${escaped(Number(it.unitPrice).toFixed(2))}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;text-align:right;">${escaped(Number(it.lineTotal).toFixed(2))}</td>
      </tr>
    `).join('');

    const total = computeTotal().toFixed(2);

    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Invoice - ${escaped(patientName)}</title>
  <style>
    @page { size: A5; margin: 12mm; }
    body { font-family: Arial, Helvetica, sans-serif; color: #111; font-size: 12px; margin:0; padding:8mm; box-sizing:border-box; }
    .header { text-align:center; margin-bottom:8px; }
    .clinic { font-weight:700; font-size:14px; }
    table { width:100%; border-collapse:collapse; margin-top:6px; }
    th { text-align:left; padding:6px 8px; border-bottom:1px solid #ddd; font-size:12px; }
    td { font-size:12px; }
    .total { text-align:right; font-weight:700; margin-top:8px; }
    .footer { text-align:center; margin-top:12px; font-size:11px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="clinic">${escaped(clinicName)}</div>
    <div class="meta">Drug Invoice</div>
  </div>

  <div>
    <div><strong>Patient:</strong> ${escaped(patientName)}</div>
    <div><strong>Date:</strong> ${escaped(now.toLocaleString())}</div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:40%;">Drug</th>
        <th style="width:20%;">Dose</th>
        <th style="width:10%;">Qty</th>
        <th style="width:15%;text-align:right;">Unit</th>
        <th style="width:15%;text-align:right;">Total</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>

  <div class="total">TOTAL: LKR ${escaped(total)}</div>

  <div class="footer">Pharmacist: ${escaped(pharmacistEmail || '')}</div>
</body>
</html>`;
  }

  return (
    <div className="space-y-4">
      {/* Drug stock + search */}
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-slate-800">Drug stock</div>
            <div className="text-xs text-slate-500">Search and add to invoice</div>
          </div>
          <div>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or dose" className="p-2 border rounded" />
          </div>
        </div>

        <div className="mt-3 max-h-56 overflow-auto">
          {filtered.length === 0 && <div className="text-sm text-slate-400">No drugs found</div>}
          <div className="space-y-2">
            {filtered.map(d => (
              <div key={d.id} className="flex items-center justify-between p-2 border rounded">
                <div>
                  <div className="font-medium">{d.name} <span className="text-xs text-slate-400">({d.dose})</span></div>
                  <div className="text-xs text-slate-500">Qty: {d.qtyAvailable ?? 0} • LKR {Number(d.pricePerUnit || 0).toFixed(2)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={qtyMap[d.id] || ''}
                    onChange={(e) => setQty(d.id, e.target.value)}
                    className="w-20 p-1 border rounded"
                    placeholder="qty"
                  />
                  <button disabled={busy} onClick={() => handleAdd(d)} className="px-3 py-1 rounded border text-sm">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drug Invoice card */}
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-slate-800">Drug Invoice</div>
            <div className="text-xs text-slate-500">Items added will reduce stock immediately</div>
          </div>
          <div>
            <button onClick={() => { setCart([]); setMsg(null); }} className="px-2 py-1 rounded border text-sm">Clear</button>
          </div>
        </div>

        <div className="mt-3">
          {cart.length === 0 && <div className="text-sm text-slate-400">No items in invoice</div>}
          {cart.map(item => (
            <div key={item.drugId} className="flex items-center justify-between p-2 border rounded mb-2">
              <div>
                <div className="font-medium">{item.drugName}</div>
                <div className="text-xs text-slate-500">{item.dose}</div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" min="1" value={item.qty} onChange={(e) => updateCartQty(item.drugId, Number(e.target.value || 0))} className="w-20 p-1 border rounded" />
                <div className="text-sm w-28 text-right">LKR {Number(item.unitPrice).toFixed(2)}</div>
                <div className="text-sm w-36 text-right">LKR {Number(item.lineTotal).toFixed(2)}</div>
                <button onClick={() => removeFromCart(item.drugId)} className="px-2 py-1 rounded border text-sm">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-3 flex justify-between items-center">
            <div className="text-sm font-medium">Total: LKR {computeTotal().toFixed(2)}</div>
            <div>
              <button disabled={cart.length === 0} onClick={printInvoice} className="px-3 py-2 rounded bg-indigo-600 text-white">
                Print Invoice
              </button>
            </div>
          </div>

          {msg && (
            <div className={`mt-3 p-2 rounded ${msg.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
              {msg.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
