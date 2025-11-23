// components/PatientDetailCard.js
'use client';

import { useState, useEffect } from 'react';
import NewAppointmentForm from './NewAppointmentForm';
import NewPatientForm from './NewPatientForm';

export default function PatientDetailCard({
  patient,
  isNew = false,
  appointments = [],
  onCreatePatient,
  onUpdatePatient,
  onCreateAppointment,
  onAppointmentAction,
  busy,
  onCloseCreate
}) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(patient);
  const [tab, setTab] = useState('active'); // 'active' | 'create'
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    setForm(patient);
    setEdit(!!isNew); // auto-edit when creating
    setTab(isNew ? 'create' : 'active');
    setEditingAppointment(null);
  }, [patient, isNew]);

  function setField(k, v) { setForm(s => ({ ...s, [k]: v })); }

  async function savePatient() {
    // create vs update
    const payload = {
      firstName: form.firstName, lastName: form.lastName, phone: form.phone,
      address: form.address, dob: form.dob, gender: form.gender,
      allergies: Array.isArray(form.allergies) ? form.allergies : (form.allergies ? form.allergies.split(',').map(s=>s.trim()) : []),
      nic: form.nic || form.id // ensure nic provided for create
    };

    if (isNew || !form.id) {
      // create
      const created = await onCreatePatient(payload);
      // onCreatePatient returns created object; it will become selected by page
      return created;
    } else {
      // update
      const updated = await onUpdatePatient(payload);
      return updated;
    }
  }

  function cancelEdit() {
    if (isNew) {
      // close the create form
      if (onCloseCreate) onCloseCreate();
      return;
    }
    setForm(patient);
    setEdit(false);
  }

  function startEditAppointment(appt) {
    setEditingAppointment(appt);
    setTab('create');
  }

  async function handleAppointmentFormSubmit(payload) {
    if (payload.mode === 'create') {
      await onCreateAppointment(payload.data);
      setTab('active');
    } else if (payload.mode === 'update') {
      await onAppointmentAction(payload.appointmentId, 'update', payload.data);
      setEditingAppointment(null);
      setTab('active');
    }
  }

  async function handleCancelAppointment(apptId) {
    if (!confirm('Cancel this appointment?')) return;
    await onAppointmentAction(apptId, 'cancel');
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">{isNew ? 'New patient' : 'Patient'}</div>
            <h1 className="text-2xl font-semibold text-slate-800">{form.firstName ? `${form.firstName} ${form.lastName ?? ''}` : (isNew ? 'Create patient' : 'Unnamed')}</h1>
            <div className="mt-1 text-sm text-slate-500">NIC • {isNew ? (form.nic || 'not set') : form.id}</div>
          </div>

          <div className="flex items-center gap-2">
            {!edit ? (
              <button onClick={() => setEdit(true)} className="px-3 py-1 rounded-md border text-sm">Edit</button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={async () => { await savePatient(); }} disabled={busy} className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">{busy ? 'Saving...' : (isNew ? 'Create' : 'Save')}</button>
                <button onClick={cancelEdit} disabled={busy} className="px-3 py-1 rounded-md border text-sm text-slate-700">Cancel</button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {edit ? (
              // For create mode, show NIC input editable; for update NIC is read-only (stored in id)
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <input value={form.nic ?? ''} onChange={(e)=>setField('nic', e.target.value)} placeholder="NIC (identifier)" className="p-2 border rounded" disabled={!isNew} />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input value={form.firstName || ''} onChange={(e)=>setField('firstName', e.target.value)} placeholder="First name" className="p-2 border rounded" />
                  <input value={form.lastName || ''} onChange={(e)=>setField('lastName', e.target.value)} placeholder="Last name" className="p-2 border rounded" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input type="date" value={form.dob || ''} onChange={(e)=>setField('dob', e.target.value)} className="p-2 border rounded" />
                  <select value={form.gender || ''} onChange={(e)=>setField('gender', e.target.value)} className="p-2 border rounded">
                    <option value="">Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>

                <input value={form.phone || ''} onChange={(e)=>setField('phone', e.target.value)} placeholder="Phone" className="p-2 border rounded w-full" />
                <input value={form.address || ''} onChange={(e)=>setField('address', e.target.value)} placeholder="Address" className="p-2 border rounded w-full" />
                <input value={(form.allergies || []).join?.(', ') || form.allergies || ''} onChange={(e)=>setField('allergies', e.target.value.split(',').map(s=>s.trim()).filter(Boolean))} placeholder="Allergies (comma separated)" className="p-2 border rounded w-full" />
              </div>
            ) : (
              <div className="space-y-2 text-sm text-slate-600">
                <div><strong>Phone</strong>: {form.phone || '—'}</div>
                <div><strong>Address</strong>: {form.address || '—'}</div>
                <div><strong>DOB</strong>: {form.dob || '—'}</div>
                <div><strong>Gender</strong>: {form.gender || '—'}</div>
                <div><strong>Allergies</strong>: {(form.allergies||[]).length ? (form.allergies||[]).join(', ') : 'None'}</div>
              </div>
            )}
          </div>

          <div>
            <div className="rounded-md border p-3 bg-white text-sm text-slate-600">
              <div className="text-xs text-slate-400">Summary</div>
              <div className="mt-2"><strong>Created:</strong> {form.createdAt ? new Date(form.createdAt).toLocaleString() : '—'}</div>
              <div className="mt-1"><strong>Updated:</strong> {form.updatedAt ? new Date(form.updatedAt).toLocaleString() : '—'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Active appointments / Create */}
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button onClick={() => { setTab('active'); setEditingAppointment(null); }} className={`px-3 py-1 text-sm ${tab==='active' ? 'bg-slate-100 rounded-md' : 'text-slate-500'}`}>Active Appointments</button>
            <button onClick={() => { setTab('create'); setEditingAppointment(null); }} className={`px-3 py-1 text-sm ${tab==='create' ? 'bg-slate-100 rounded-md' : 'text-slate-500'}`}>Create New Appointment</button>
          </div>
        </div>

        <div className="mt-4">
          {tab === 'active' && (
            <>
              <div className="text-sm text-slate-600">Appointments for this patient</div>
              <div className="mt-4 space-y-3">
                {appointments.length === 0 && <div className="text-sm text-slate-400">No appointments.</div>}
                {appointments.map(a => (
                  <div key={a.id} className="p-3 border rounded-md flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium">{new Date(a.scheduledAt).toLocaleString()}</div>
                      <div className="text-xs text-slate-500">{a.notes || '—'}</div>
                      <div className="text-xs text-slate-400 mt-1">Status: {a.status}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button onClick={() => startEditAppointment(a)} className="px-2 py-1 border rounded text-xs">Edit</button>
                      {a.status !== 'cancelled' ? <button onClick={() => handleCancelAppointment(a.id)} className="px-2 py-1 bg-red-600 text-white rounded text-xs">Cancel</button> : <div className="text-xs text-slate-400">Cancelled</div>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'create' && (
            <>
              <div className="text-sm text-slate-600">{editingAppointment ? 'Edit appointment' : 'Create a new appointment'}</div>
              <div className="mt-3">
                <NewAppointmentForm
                  patientNic={form.nic || form.id}
                  initialAppointment={editingAppointment}
                  onSubmit={handleAppointmentFormSubmit}
                  disabled={busy}
                />
                {editingAppointment && (
                  <div className="mt-3 text-right">
                    <button onClick={() => { setEditingAppointment(null); setTab('active'); }} className="text-sm px-3 py-1 rounded-md border text-slate-700">Stop editing</button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
