'use client';

import { useState } from 'react';
import { db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './AuthProvider';
import { formatDateToId } from '../utils/idHelpers';

export default function AppointmentForm({ patient, onCreated, onCancel }) {
  const { user, claims } = useAuth();
  const clinicId = claims?.clinicId || 'clinic-001'; // fallback for dev
  const [date, setDate] = useState(() => {
    // default to today's date/time in local ISO for input datetime-local
    const d = new Date();
    d.setMinutes(d.getMinutes() + 30); // default 30 minutes ahead
    return d.toISOString().slice(0,16);
  });
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e){
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (!patient || !patient.nic) throw new Error('Patient NIC missing');
      // create appointmentId using formatDateToId, include milliseconds to reduce collision risk
      const ts = new Date(date);
      const appointmentId = formatDateToId(ts) + String(Math.floor(Math.random()*900+100)); // YYYYMMDDHHMMSS + rand
      const colPath = `clinics/${clinicId}/appointments`;
      const ref = doc(db, colPath, appointmentId);
      const payload = {
        patientId: patient.nic,
        patientName: patient.name,
        scheduledAt: ts.toISOString(),
        status: 'confirmed',
        notes: notes || '',
        createdBy: user?.email || null,
        createdAt: serverTimestamp()
      };
      await setDoc(ref, payload);
      if (onCreated) onCreated(payload);
    } catch (err) {
      console.error(err);
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:800}}>Create appointment</div>
          <div className="text-muted text-sm">for {patient?.name} ({patient?.nic})</div>
        </div>
        <div>
          <button className="btn-ghost" onClick={onCancel}>Close</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{marginTop:12, display:'grid', gap:12}}>
        <div>
          <label className="text-sm text-muted">Patient</label>
          <input className="input" value={`${patient?.name} · ${patient?.nic}`} readOnly />
        </div>

        <div>
          <label className="text-sm text-muted">Scheduled time</label>
          <input className="input" type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} required />
        </div>

        <div>
          <label className="text-sm text-muted">Notes</label>
          <textarea className="input" rows={3} value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Reason for visit, short notes..." />
        </div>

        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
          <button type="button" onClick={onCancel} className="btn-ghost">Cancel</button>
          <button type="submit" className="btn">{loading ? 'Saving...' : 'Save appointment'}</button>
        </div>

        {error && <div className="text-red-400">{error}</div>}
      </form>
    </div>
  );
}
