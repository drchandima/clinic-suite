// components/NewAppointmentForm.js
'use client';

import { useEffect, useState } from 'react';

/**
 * Props:
 *  - patientNic (string) optional (display-only)
 *  - initialAppointment (object) optional — when set, form pre-fills for edit
 *      expected shape: { id, scheduledAt (ISO), notes, status }
 *  - onSubmit({ mode: 'create', data }) or onSubmit({ mode: 'update', appointmentId, data })
 *  - disabled (bool)
 */
export default function NewAppointmentForm({ patientNic, initialAppointment = null, onSubmit, disabled = false }) {
  const [datetimeLocal, setDatetimeLocal] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('confirmed');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialAppointment) {
      // convert ISO to input datetime-local format: YYYY-MM-DDTHH:mm
      const d = new Date(initialAppointment.scheduledAt);
      const pad = n => String(n).padStart(2, '0');
      const val = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
      setDatetimeLocal(val);
      setNotes(initialAppointment.notes || '');
      setStatus(initialAppointment.status || 'confirmed');
    } else {
      // default datetime: next quarter-hour
      const d = new Date(); d.setMinutes(Math.ceil(d.getMinutes()/15)*15,0,0);
      const pad = n => String(n).padStart(2,'0');
      setDatetimeLocal(`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`);
      setNotes('');
      setStatus('confirmed');
    }
    setError(null);
  }, [initialAppointment]);

  async function handleSubmit(e) {
    e?.preventDefault();
    setError(null);
    const dt = new Date(datetimeLocal);
    if (Number.isNaN(dt.getTime())) {
      setError('Select valid date/time');
      return;
    }

    const payload = {
      scheduledAtISO: dt.toISOString(),
      notes: notes || '',
      status: status || 'confirmed'
    };

    setSubmitting(true);
    try {
      if (initialAppointment && initialAppointment.id) {
        // update mode
        await onSubmit({ mode: 'update', appointmentId: initialAppointment.id, data: payload });
      } else {
        // create mode
        await onSubmit({ mode: 'create', data: payload });
      }
      // keep form values after create if desired; for new create we clear notes
      if (!initialAppointment) setNotes('');
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {patientNic && <div className="text-sm text-slate-500">Patient: <span className="font-medium">{patientNic}</span></div>}
      <div>
        <label className="block text-xs text-slate-500 mb-1">Date & time</label>
        <input type="datetime-local" value={datetimeLocal} onChange={(e)=>setDatetimeLocal(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-xs text-slate-500 mb-1">Notes</label>
        <input value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Notes (optional)" className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-xs text-slate-500 mb-1">Status</label>
        <select value={status} onChange={(e)=>setStatus(e.target.value)} className="w-full p-2 border rounded">
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex gap-2 justify-end">
        <button type="submit" disabled={disabled || submitting} className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">
          {submitting ? (initialAppointment ? 'Saving...' : 'Creating...') : (initialAppointment ? 'Save changes' : 'Create appointment')}
        </button>
      </div>
    </form>
  );
}
