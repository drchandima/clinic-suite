// components/HomeStatsClient.js
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
import { db } from '../lib/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

/**
 * HomeStatsClient
 * - Shows realtime counts for the logged-in user's clinic (patients, consults, prescriptions)
 * - Only visible when user is signed in and has claims.clinicId
 */
export default function HomeStatsClient() {
  const { user, claims, loading } = useAuth();
  const [counts, setCounts] = useState({
    patients: 0,
    consults: 0,
    prescriptions: 0
  });
  const [loadingCounts, setLoadingCounts] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) return;
    setError(null);
    if (!user || !claims?.clinicId) {
      setLoadingCounts(false);
      return;
    }

    const clinicId = claims.clinicId;

    // collection refs
    const patientsRef = collection(db, 'clinics', clinicId, 'patients');
    const consultRef = collection(db, 'clinics', clinicId, 'consultations');
    const prescRef = collection(db, 'clinics', clinicId, 'prescriptions');

    // start listeners
    setLoadingCounts(true);
    const unsubPatients = onSnapshot(patientsRef, (snap) => {
      setCounts(prev => ({ ...prev, patients: snap.size }));
      setLoadingCounts(false);
    }, (err) => setError(err?.message || String(err)));

    const unsubConsults = onSnapshot(consultRef, (snap) => {
      setCounts(prev => ({ ...prev, consults: snap.size }));
      setLoadingCounts(false);
    }, (err) => setError(err?.message || String(err)));

    const unsubPresc = onSnapshot(prescRef, (snap) => {
      setCounts(prev => ({ ...prev, prescriptions: snap.size }));
      setLoadingCounts(false);
    }, (err) => setError(err?.message || String(err)));

    return () => {
      try { unsubPatients(); } catch(_) {}
      try { unsubConsults(); } catch(_) {}
      try { unsubPresc(); } catch(_) {}
    };
  }, [user, claims, loading]);

  // Not logged in or no clinicId — render nothing (as requested)
  if (loading) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-100">
        <div className="text-sm text-slate-500">Checking session...</div>
      </div>
    );
  }
  if (!user || !claims?.clinicId) {
    // nothing visible on homepage if not signed in
    return null;
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-slate-700">Clinic</div>
          <div className="text-lg font-semibold text-slate-900 mt-1">{claims.clinicId}</div>
        </div>
        <div className="text-sm text-slate-500">Live</div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-indigo-50 p-3 text-center">
          <div className="text-xs text-indigo-700">Patients</div>
          <div className="text-lg font-bold mt-1">{counts.patients}</div>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3 text-center">
          <div className="text-xs text-emerald-700">Consults</div>
          <div className="text-lg font-bold mt-1">{counts.consults}</div>
        </div>
        <div className="rounded-lg bg-amber-50 p-3 text-center">
          <div className="text-xs text-amber-700">Prescriptions</div>
          <div className="text-lg font-bold mt-1">{counts.prescriptions}</div>
        </div>
      </div>

      <div className="mt-5 border-t pt-4 text-sm text-slate-500">
        Realtime clinic stats — updated automatically.
        {error && <div className="mt-2 text-xs text-red-600">Error: {String(error)}</div>}
      </div>
    </div>
  );
}
