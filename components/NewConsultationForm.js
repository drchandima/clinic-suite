// components/NewConsultationForm.js
'use client';

import { useState, useEffect } from 'react';
import { createConsultation } from '../lib/firestoreClient';
import { createPrescription } from '../lib/firestoreClient';

/**
 * Props:
 *  - patient (object) - full patient object (id = NIC, firstName, lastName, dob, gender)
 *  - patientNic (string) optional (legacy) — patient.id is preferred
 *  - appointmentId (string) optional
 *  - clinicId (string) required for saving
 *  - doctorEmail (string) required for saving/printing
 *  - onSaved(createdConsultation) callback
 */
export default function NewConsultationForm({ patient = null, patientNic = null, appointmentId = null, clinicId, doctorEmail, onSaved = () => {} }) {
  const resolvedNic = (patient && patient.id) || patientNic || '';
  const [presentComplaint, setPresentComplaint] = useState('');
  const [examFindings, setExamFindings] = useState('');
  const [differentialDiagnosis, setDifferentialDiagnosis] = useState('');
  const [investigations, setInvestigations] = useState('');
  const [management, setManagement] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // no-op
  }, [patient]);

  // Parse management free-text into structured drug items based on the user-specified syntax:
  // <drug name><space><dosage><space><frequency><space>"x"<space><duration in number><space>"days"
  // Frequencies allowed (case-insensitive): mane, nocte, daily, bd, tds, qds
  function parseManagementLines(rawText) {
    const lines = (rawText || '').split('\n').map(l => l.trim()).filter(Boolean);
    const items = [];
    const re = /^(.+?)\s+(\S+)\s+(mane|nocte|daily|bd|tds|qds)\s+x\s+(\d+)\s+days$/i;

    for (const line of lines) {
      const m = line.match(re);
      if (!m) {
        items.push({ raw: line });
      } else {
        const [, name, dose, freq, dur] = m;
        items.push({
          drugName: name.trim(),
          dose: dose.trim(),
          frequency: freq.toLowerCase(),
          durationDays: Number(dur)
        });
      }
    }
    return items;
  }

  // Create printable HTML for prescription
  function buildPrescriptionHtml({ clinicId, patientObj, doctorEmail, items, now }) {
    const clinicName = clinicId || 'Clinic';
    const patientName = `${patientObj.firstName || ''} ${patientObj.lastName || ''}`.trim() || '—';
    const dob = patientObj.dob || '';
    const ageStr = (() => {
      if (!dob) return '—';
      try {
        const b = new Date(dob);
        const diff = Date.now() - b.getTime();
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        return `${years} y`;
      } catch { return '—'; }
    })();
    const gender = patientObj.gender || '—';

    const escaped = (s) => {
      if (!s) return '';
      return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    };

    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Prescription - ${escaped(patientName)}</title>
  <style>
    @page { size: A5; margin: 12mm; }
    html,body { height: 100%; margin:0; padding:0; }
    body { font-family: Arial, Helvetica, sans-serif; color: #111; font-size: 12px; padding: 6mm; box-sizing: border-box; }
    .header { text-align: center; margin-bottom: 6px; }
    .clinic { font-weight: 700; font-size: 14px; }
    .meta { font-size: 11px; color: #333; margin-bottom: 8px; }
    .section { margin-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 6px; }
    th, td { border-bottom: 1px solid #ddd; padding: 6px 8px; text-align: left; font-size: 11px; }
    th { background: #fafafa; font-weight: 700; }
    .footer { text-align: center; margin-top: 12px; font-size: 11px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="clinic">${escaped(clinicName)}</div>
    <div class="meta">Prescription</div>
  </div>

  <div class="section">
    <div><strong>Patient:</strong> ${escaped(patientName)}</div>
    <div><strong>NIC:</strong> ${escaped(patientObj.id || '')}</div>
    <div><strong>Age/Gender:</strong> ${escaped(ageStr)} / ${escaped(gender)}</div>
    <div><strong>Date:</strong> ${escaped(now.toLocaleString())}</div>
  </div>

  <div class="section">
    <table>
      <thead>
        <tr>
          <th style="width:40%;">Drug</th>
          <th style="width:20%;">Dose</th>
          <th style="width:20%;">Frequency</th>
          <th style="width:20%;">Duration</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(i => {
          if (i.raw) {
            return `<tr><td colspan="4">${escaped(i.raw)}</td></tr>`;
          }
          return `<tr>
            <td>${escaped(i.drugName)}</td>
            <td>${escaped(i.dose)}</td>
            <td>${escaped(i.frequency)}</td>
            <td>${escaped(String(i.durationDays))} days</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div class="footer">Doctor: ${escaped(doctorEmail || '—')}</div>
</body>
</html>`;
  }

  // Print via hidden iframe to avoid popup blocks
  function printPrescription() {
    if (!management || !doctorEmail) {
      alert('Cannot print — ensure management text and doctor email are present.');
      return;
    }

    const patientObj = patient || { id: resolvedNic, firstName: '', lastName: '', dob: '', gender: '' };
    const items = parseManagementLines(management);
    const now = new Date();
    const html = buildPrescriptionHtml({ clinicId, patientObj, doctorEmail, items, now });

    try {
      // create hidden iframe
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
      doc.write(html);
      doc.close();

      // Some browsers need a short delay to render
      const printAndCleanup = () => {
        try {
          // call print
          iframe.contentWindow.focus();
          // The print() must be directly triggered by user gesture to avoid blocking; since this function is called from click it's fine.
          const printed = iframe.contentWindow.print();
          // cleanup after small timeout (gives print dialog time to open)
          setTimeout(() => {
            try { document.body.removeChild(iframe); } catch (_) {}
          }, 500);
        } catch (err) {
          try { document.body.removeChild(iframe); } catch (_) {}
          console.error('Print failed', err);
          alert('Printing failed. Please allow the browser to print or try saving as PDF from the print dialog.');
        }
      };

      // If iframe content may take a moment to load resources, wait until ready
      // but avoid long waits; do a short delay
      setTimeout(printAndCleanup, 300);
    } catch (err) {
      console.error('printPrescription error', err);
      alert('Unable to print. Please check browser settings.');
    }
  }

  // Save consultation and also create a prescription doc
  async function handleSave(e) {
    e?.preventDefault();
    setError(null);
    if (!clinicId) {
      setError('Missing clinic context (clinicId).');
      return;
    }
    if (!resolvedNic) {
      setError('Missing patient NIC.');
      return;
    }

    setSaving(true);
    try {
      const consultPayload = {
        patientNic: resolvedNic,
        appointmentId: appointmentId ?? null,
        doctorEmail: doctorEmail ?? null,
        presentComplaint,
        examFindings,
        differentialDiagnosis,
        investigations,
        management
      };

      // create consultation
      const created = await createConsultation(clinicId, consultPayload);

      // create prescription right after consultation
      const parsedItems = parseManagementLines(management).map(it => {
        if (it.raw) return { raw: it.raw };
        return {
          drugName: it.drugName,
          dose: it.dose,
          frequency: it.frequency,
          durationDays: it.durationDays
        };
      });

      await createPrescription(clinicId, {
        consultationId: created.id,
        patientNic: resolvedNic,
        doctorEmail: doctorEmail ?? null,
        rawManagement: management || '',
        items: parsedItems
      });

      onSaved && onSaved(created);
      alert('Consultation saved and prescription created.');
    } catch (err) {
      console.error(err);
      setError(err.message || String(err));
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-3">
      <div>
        <label className="text-xs text-slate-500">Presenting complaint</label>
        <textarea value={presentComplaint} onChange={(e)=>setPresentComplaint(e.target.value)} className="w-full p-2 border rounded" rows="3" />
      </div>

      <div>
        <label className="text-xs text-slate-500">Examination findings</label>
        <textarea value={examFindings} onChange={(e)=>setExamFindings(e.target.value)} className="w-full p-2 border rounded" rows="3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <label className="text-xs text-slate-500">Differential diagnosis</label>
          <textarea value={differentialDiagnosis} onChange={(e)=>setDifferentialDiagnosis(e.target.value)} className="w-full p-2 border rounded" rows="2" />
        </div>
        <div>
          <label className="text-xs text-slate-500">Investigations</label>
          <textarea value={investigations} onChange={(e)=>setInvestigations(e.target.value)} className="w-full p-2 border rounded" rows="2" />
        </div>
      </div>

      <div>
        <label className="text-xs text-slate-500">Management (one drug per line) <span className="text-xs text-slate-400">(format: &lt;drug&gt; &lt;dose&gt; &lt;frequency&gt; x &lt;days&gt; — e.g. Paracetamol 500mg bd x 5 days)</span></label>
        <textarea value={management} onChange={(e)=>setManagement(e.target.value)} className="w-full p-2 border rounded" rows="5" placeholder={`Paracetamol 500mg bd x 5 days\nAmoxicillin 500mg tds x 7 days`} />
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex justify-between items-center">
        <div>
          <button type="button" onClick={printPrescription} disabled={!management || !doctorEmail} className="px-3 py-2 rounded-md border text-sm">
            Print Prescription
          </button>
        </div>
        <div>
          <button type="submit" disabled={saving} className="px-3 py-2 rounded-md bg-indigo-600 text-white">
            {saving ? 'Saving...' : 'Save Consultation'}
          </button>
        </div>
      </div>
    </form>
  );
}
