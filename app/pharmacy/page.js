// app/pharmacy/page.js
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../components/AuthProvider';
import PharmacySidebar from '../../components/PharmacySidebar';
import PharmacyCenter from '../../components/PharmacyCenter';
import PharmacyQuickActions from '../../components/PharmacyQuickActions';
import { subscribePendingPrescriptions, subscribeDrugs } from '../../lib/firestoreClient';

export default function PharmacyPage() {
  const { user, claims, loading } = useAuth();
  const [prescriptions, setPrescriptions] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [error, setError] = useState(null);

  const clinicId = claims?.clinicId;

  useEffect(() => {
    if (loading || !clinicId) return;
    setError(null);

    const unsub1 = subscribePendingPrescriptions(
      clinicId,
      (items) => setPrescriptions(items),
      (err) => setError(err?.message ?? String(err))
    );

    const unsub2 = subscribeDrugs(
      clinicId,
      (items) => setDrugs(items),
      (err) => setError(err?.message ?? String(err))
    );

    return () => {
      try { unsub1?.(); } catch(_) {}
      try { unsub2?.(); } catch(_) {}
    };
  }, [loading, clinicId]);

  // AUTH GUARD
  if (loading) return <div className="p-10">Loading...</div>;
  if (!user) return <div className="p-10">Sign in required</div>;
  if (!claims?.clinicId || !['pharmacist', 'admin'].includes(claims.role)) {
    return <div className="p-10">Access denied — pharmacist role required.</div>;
  }

  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3">
          <PharmacySidebar
            prescriptions={prescriptions}
            selectedId={selectedPrescription?.id}
            onSelect={(p) => setSelectedPrescription(p)}
            selectedPrescription={selectedPrescription}  // <-- pass selected preview
          />
        </aside>

        <main className="lg:col-span-6">
          <PharmacyCenter
            clinicId={clinicId}
            drugs={drugs}
            prescription={selectedPrescription}
            pharmacistEmail={user.email}
          />
        </main>

        <aside className="lg:col-span-3">
          <div className="sticky top-6">
            <PharmacyQuickActions clinicId={clinicId} />
          </div>
        </aside>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
