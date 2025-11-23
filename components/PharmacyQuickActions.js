// components/PharmacyQuickActions.js
'use client';

import { useState } from 'react';
import { useAuth } from './AuthProvider';
import { createOrUpdateDrug } from '../lib/firestoreClient';

export default function PharmacyQuickActions({ clinicId, refresh = () => {} }) {
  const [busy, setBusy] = useState(false);
  const { claims, loading } = useAuth();

  async function seedSampleDrugs() {
    if (loading) {
      alert('Auth still loading — try again in a moment.');
      return;
    }

    if (!clinicId) {
      alert('Missing clinic context (clinicId).');
      return;
    }

    // restrict to pharmacist/admin to reduce permission failures
    const role = claims?.role;
    if (!role || !['pharmacist', 'admin'].includes(role)) {
      if (!confirm('You are not a pharmacist/admin. Attempt to seed anyway?')) return;
    }

    if (!confirm('Create 5 sample drugs (1000 qty each)? This will create or update the drug docs.')) return;

    setBusy(true);
    try {
      const sample = [
        { id: 'paracetamol_500mg', name: 'Paracetamol', dose: '500mg', qtyAvailable: 1000, pricePerUnit: 5 },
        { id: 'omeprazole_20mg', name: 'Omeprazole', dose: '20mg', qtyAvailable: 1000, pricePerUnit: 30 },
        { id: 'domperidone_10mg', name: 'Domperidone', dose: '10mg', qtyAvailable: 1000, pricePerUnit: 8 },
        { id: 'cetirizine_10mg', name: 'Cetirizine', dose: '10mg', qtyAvailable: 1000, pricePerUnit: 6 },
        { id: 'pirion_4mg', name: 'Pirion', dose: '4mg', qtyAvailable: 1000, pricePerUnit: 12 }
      ];

      for (const s of sample) {
        // createOrUpdateDrug will set/merge the document
        await createOrUpdateDrug(clinicId, s.id, {
          name: s.name,
          dose: s.dose,
          qtyAvailable: s.qtyAvailable,
          pricePerUnit: s.pricePerUnit,
          updatedBy: claims?.email ?? null
        });
      }

      alert('Sample drugs created/updated successfully.');
      refresh();
    } catch (err) {
      console.error('Seeding failed', err);
      alert('Seeding failed: ' + (err?.message || String(err)));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <div className="text-sm font-medium text-slate-800">Quick actions</div>
      <div className="mt-3 flex flex-col gap-2">
        <button
          onClick={seedSampleDrugs}
          disabled={busy}
          className={`px-3 py-2 rounded border text-sm ${busy ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {busy ? 'Seeding...' : 'Seed sample drugs (5 x 1000)'}
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-3 py-2 rounded border text-sm"
        >
          Refresh page
        </button>
      </div>
    </div>
  );
}
