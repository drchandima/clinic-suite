// app/pharmacy/page.js
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../components/AuthProvider';
import PharmacySidebar from '../../components/PharmacySidebar';
import PharmacyCenter from '../../components/PharmacyCenter';
import PharmacyQuickActions from '../../components/PharmacyQuickActions';
import { subscribePendingPrescriptions, subscribeDrugs } from '../../lib/firestoreClient';

export default function PharmacyPage() {
  // --- hooks first ---
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

  // AUTH GUARD (after hooks)
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
        <div className="text-sm text-slate-500">Loading authentication...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
        <div className="max-w-lg p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Sign in required</h2>
          <p className="mt-2 text-sm text-slate-600">You must be signed in to access the Pharmacy area.</p>
          <div className="mt-4 text-right">
            <a href="/login" className="px-3 py-2 bg-indigo-600 text-white rounded">Go to login</a>
          </div>
        </div>
      </div>
    );
  }

  // Allow pharmacist, admin and doctor to access pharmacy.
  if (!clinicId || !['pharmacist', 'admin', 'doctor'].includes(claims.role)) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-slate-50">
        <div className="max-w-xl w-full p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-slate-800">Access denied</h2>
          <p className="mt-2 text-sm text-slate-600">Your account does not have permission to access the Pharmacy area.</p>

          <div className="mt-4 text-sm text-slate-600">
            <p><strong>Role:</strong> {claims?.role ?? '—'}</p>
            <p><strong>Clinic:</strong> {claims?.clinicId ?? '—'}</p>
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={() => window.location.href = '/'} className="px-3 py-2 rounded border">Back to home</button>
          </div>

          <div className="mt-3 text-xs text-slate-400">
            Note: Pharmacy pages are restricted to users with role <code>pharmacist</code> or <code>admin</code>. Contact your administrator to get access.
          </div>
        </div>
      </div>
    );
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
            pharmacistEmail={user?.email}
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
