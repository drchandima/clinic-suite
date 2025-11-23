// app/patients/page.js
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../components/AuthProvider';
import {
  subscribePatients,
  createOrUpdatePatient,
  subscribeAppointmentsForPatient,
  createAppointment,
  updateAppointment,
  updatePatient,
  cancelAppointment
} from '../../lib/firestoreClient';
import PatientSidebar from '../../components/PatientSidebar';
import PatientDetailCard from '../../components/PatientDetailCard';

export default function PatientsPage() {
  // --- Hooks first: ensure stable hook order on every render ---
  const { user, claims, loading } = useAuth();

  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [q, setQ] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  // Subscribe patient list
  useEffect(() => {
    if (loading) return;
    if (!claims?.clinicId) return;
    setError(null);
    const unsub = subscribePatients(claims.clinicId, (items) => setPatients(items), (err) => setError(err.message || String(err)));
    return () => unsub();
  }, [claims, loading]);

  // client-side search
  useEffect(() => {
    const term = (q || '').trim().toLowerCase();
    if (!term) setFiltered(patients);
    else setFiltered(patients.filter((p) => {
      const name = ((p.firstName || '') + ' ' + (p.lastName || '')).toLowerCase();
      return name.includes(term) || (p.nic || '').toLowerCase().includes(term) || (p.phone || '').toLowerCase().includes(term);
    }));
  }, [q, patients]);

  // subscribe appointments when a real patient (not new) is selected
  useEffect(() => {
    if (!selectedPatient || !claims?.clinicId || selectedPatient.isNew) {
      setAppointments([]);
      return;
    }
    const unsub = subscribeAppointmentsForPatient(claims.clinicId, selectedPatient.id, (items) => setAppointments(items), (err) => setError(err.message || String(err)));
    return () => unsub();
  }, [selectedPatient, claims]);

  // --- Auth guard UI (after hooks) ---
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
          <p className="mt-2 text-sm text-slate-600">You must be signed in to access the Patients area.</p>
          <div className="mt-4 text-right">
            <a href="/login" className="px-3 py-2 bg-indigo-600 text-white rounded">Go to login</a>
          </div>
        </div>
      </div>
    );
  }

  // If receptionist (or any other role) is not allowed, show the styled Access Denied card
  // In your original setup receptionists can access Patients; if you want to permit different roles adjust the allowedRoles array.
  const allowedRoles = ['admin', 'doctor', 'receptionist']; // adjust if needed
  if (!claims?.clinicId || !allowedRoles.includes(claims.role)) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-slate-50">
        <div className="max-w-xl w-full p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-slate-800">Access denied</h2>
          <p className="mt-2 text-sm text-slate-600">Your account does not have permission to access the Patients area.</p>

          <div className="mt-4 text-sm text-slate-600">
            <p><strong>Role:</strong> {claims?.role ?? '—'}</p>
            <p><strong>Clinic:</strong> {claims?.clinicId ?? '—'}</p>
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={() => window.location.href = '/'} className="px-3 py-2 rounded border">Back to home</button>
          </div>

          <div className="mt-3 text-xs text-slate-400">
            Note: Patients pages are restricted. Contact your administrator to get access.
          </div>
        </div>
      </div>
    );
  }

  // --- Functions for patient operations ---

  // Open create in center panel
  function handleOpenCreate() {
    const blank = {
      id: '', // empty -> treated as new
      nic: '',
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      phone: '',
      address: '',
      allergies: [],
      isNew: true
    };
    setSelectedPatient(blank);
  }

  // Create patient (called from PatientDetailCard)
  async function handleCreatePatient(payload) {
    if (!claims?.clinicId) {
      setError('No clinicId in your account.');
      throw new Error('No clinicId');
    }
    setBusy(true);
    try {
      // payload must include nic
      const created = await createOrUpdatePatient(claims.clinicId, payload, user?.email);
      // created.id will be NIC
      setSelectedPatient(created);
      return created;
    } catch (err) {
      console.error(err);
      setError(err.message || String(err));
      throw err;
    } finally {
      setBusy(false);
    }
  }

  // Update existing patient (called from PatientDetailCard)
  async function handleUpdatePatient(patch) {
    if (!claims?.clinicId || !selectedPatient) return;
    if (selectedPatient.isNew) {
      // shouldn't happen; creation flow above handles new
      return;
    }
    setBusy(true);
    try {
      const updated = await updatePatient(claims.clinicId, selectedPatient.id, patch);
      setSelectedPatient(updated);
      return updated;
    } catch (err) {
      console.error(err);
      setError(err.message || String(err));
      throw err;
    } finally {
      setBusy(false);
    }
  }

  async function handleCreateAppointment(apptData) {
    if (!claims?.clinicId || !selectedPatient) return;
    setBusy(true);
    try {
      await createAppointment(claims.clinicId, { patientNic: selectedPatient.id, ...apptData, receptionistEmail: user?.email });
    } catch (err) {
      console.error(err); setError(err.message || String(err));
    } finally { setBusy(false); }
  }

  async function handleAppointmentAction(appointmentId, action, data = {}) {
    if (!claims?.clinicId) return;
    setBusy(true);
    try {
      if (action === 'update') {
        await updateAppointment(claims.clinicId, appointmentId, data);
      } else if (action === 'cancel') {
        await cancelAppointment(claims.clinicId, appointmentId, user?.email);
      }
    } catch (err) {
      console.error(err); setError(err.message || String(err));
    } finally { setBusy(false); }
  }

  // --- Render main UI ---
  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <PatientSidebar
            patients={filtered}
            query={q}
            onQuery={setQ}
            onSelect={setSelectedPatient}
            selectedId={selectedPatient?.id}
            onOpenCreate={handleOpenCreate}
            disabled={busy}
          />
        </aside>

        {/* Main */}
        <main className="lg:col-span-6">
          {!selectedPatient ? (
            <div className="rounded-xl bg-white shadow-sm p-8 text-center">
              <h2 className="text-2xl font-semibold text-slate-800">Select a patient</h2>
              <p className="mt-2 text-slate-500">Search or create a patient on the left. Click a patient to view details.</p>
            </div>
          ) : (
            <PatientDetailCard
              patient={selectedPatient}
              isNew={!!selectedPatient.isNew}
              appointments={appointments}
              onCreatePatient={handleCreatePatient}
              onUpdatePatient={handleUpdatePatient}
              onCreateAppointment={handleCreateAppointment}
              onAppointmentAction={handleAppointmentAction}
              busy={busy}
              onCloseCreate={() => setSelectedPatient(null)}
            />
          )}
        </main>

        {/* Right quick actions */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-xl bg-white shadow-sm p-4">
              <h3 className="text-sm text-slate-500">Quick actions</h3>
              <div className="mt-3 flex flex-col gap-2">
                <button onClick={() => { setSelectedPatient(null); setQ(''); }} className="text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700">Clear selection</button>
                <button onClick={() => window.location.reload()} className="text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700">Refresh</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
