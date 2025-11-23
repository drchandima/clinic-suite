// app/consultation/page.js
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../components/AuthProvider';
import ConsultationSidebar from '../../components/ConsultationSidebar';
import ConsultationDetailCard from '../../components/ConsultationDetailCard';
import {
  subscribeAppointmentsByDate,
  getPatient
} from '../../lib/firestoreClient';

export default function ConsultationPage() {
  const { user, claims, loading } = useAuth();
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10));
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [error, setError] = useState(null);

  // Client-side authorization: only allow role === 'doctor' in clinic to see this page
  const isAuthReady = !loading;
  const isDoctor = Boolean(claims?.role === 'doctor' && claims?.clinicId);

  useEffect(() => {
    // if user is not a doctor, do not subscribe to any data
    if (!isAuthReady || !isDoctor) return;
    setError(null);
    const unsub = subscribeAppointmentsByDate(claims.clinicId, new Date(date), (items) => {
      setAppointments(items);
    }, (err) => setError(err.message || String(err)));
    return () => unsub();
  }, [isAuthReady, isDoctor, claims, date]);

  // when user selects an appointment, load the patient
  async function handleSelectAppointment(appt) {
    setError(null);
    setSelectedAppointment(appt || null);
    if (!appt || !appt.patientNic) {
      setSelectedPatient(null);
      return;
    }
    try {
      // fetch patient (returns null if not found)
      const p = await getPatient(claims.clinicId, appt.patientNic);
      if (!p) {
        setError(`Patient ${appt.patientNic} not found`);
        setSelectedPatient(null);
        return;
      }
      setSelectedPatient(p);
    } catch (err) {
      console.error('Failed to load patient', err);
      setError(err.message || String(err));
      setSelectedPatient(null);
    }
  }

  // Simple helpers for display states
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
          <p className="mt-2 text-sm text-slate-600">You must be signed in to access the Consultation area.</p>
          <div className="mt-4 text-right">
            <a href="/login" className="px-3 py-2 bg-indigo-600 text-white rounded">Go to login</a>
          </div>
        </div>
      </div>
    );
  }

  // User is signed in but not a doctor (or missing clinicId)
  if (!isDoctor) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-slate-50">
        <div className="max-w-xl w-full p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-slate-800">Access denied</h2>
          <p className="mt-2 text-sm text-slate-600">Your account does not have permission to access the Consultation area.</p>

          <div className="mt-4 text-sm text-slate-600">
            <p><strong>Role:</strong> {claims?.role ?? '—'}</p>
            <p><strong>Clinic:</strong> {claims?.clinicId ?? '—'}</p>
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={() => window.location.href = '/'} className="px-3 py-2 rounded border">Back to home</button>
          </div>

          <div className="mt-3 text-xs text-slate-400">
            Note: Consultations are restricted to users with role <code>doctor</code>. Contact your administrator to get access.
          </div>
        </div>
      </div>
    );
  }

  // Authorized doctor: render the consultation UI
  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3">
          <ConsultationSidebar
            date={date}
            onChangeDate={setDate}
            appointments={appointments}
            onSelectAppointment={(a) => handleSelectAppointment(a)}
          />
        </aside>

        <main className="lg:col-span-6">
          <ConsultationDetailCard
            patient={selectedPatient}
            appointment={selectedAppointment}
            clinicId={claims?.clinicId}
            doctorEmail={user?.email}
          />
        </main>

        <aside className="lg:col-span-3">
          <div className="sticky top-6">
            <div className="rounded-xl bg-white shadow-sm p-4">
              <h3 className="text-sm text-slate-500">Quick actions</h3>
              <div className="mt-3 flex flex-col gap-2">
                <button onClick={() => { setSelectedAppointment(null); setSelectedPatient(null); }} className="text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700">Clear selection</button>
                <button onClick={() => window.location.reload()} className="text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700">Refresh</button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">{error}</div>
        </div>
      )}
    </div>
  );
}
