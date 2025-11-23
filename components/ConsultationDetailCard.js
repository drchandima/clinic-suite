// components/ConsultationDetailCard.js
'use client';

import { useEffect, useState } from 'react';
import NewConsultationForm from './NewConsultationForm';
import { fetchConsultationsForPatient } from '../lib/firestoreClient';

export default function ConsultationDetailCard({ patient, appointment, clinicId, doctorEmail }) {
  const [consultations, setConsultations] = useState([]);
  const [selectedConsult, setSelectedConsult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      if (!patient || !clinicId) {
        setConsultations([]);
        return;
      }
      try {
        const list = await fetchConsultationsForPatient(clinicId, patient.id);
        setConsultations(list);
      } catch (err) {
        console.error(err); setError(err.message || String(err));
      }
    })();
  }, [patient, clinicId]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs text-slate-400">Patient</div>
            <h2 className="text-xl font-semibold">{patient ? `${patient.firstName ?? ''} ${patient.lastName ?? ''}` : 'No patient selected'}</h2>
            <div className="text-sm text-slate-500 mt-1">NIC • {patient?.id ?? '-'}</div>
          </div>
          <div className="text-sm text-slate-400">{appointment ? new Date(appointment.scheduledAt).toLocaleString() : ''}</div>
        </div>

        <div className="mt-4 text-sm text-slate-600">
          {patient ? (
            <>
              <div><strong>Phone:</strong> {patient.phone ?? '-'}</div>
              <div><strong>Address:</strong> {patient.address ?? '-'}</div>
            </>
          ) : <div>Select a patient or appointment to begin.</div>}
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium text-slate-800">Appointment details</h3>
        <div className="text-sm text-slate-600 mt-2">
          {appointment ? (
            <>
              <div><strong>Time:</strong> {new Date(appointment.scheduledAt).toLocaleString()}</div>
              <div><strong>Status:</strong> {appointment.status}</div>
              <div><strong>Notes:</strong> {appointment.notes || '-'}</div>
            </>
          ) : <div className="text-sm text-slate-400">No appointment selected.</div>}
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium text-slate-800">Consultation</h3>
        <div className="text-sm text-slate-600 mt-2">Only doctors can create and view consultations.</div>

        <div className="mt-3">
          <NewConsultationForm
            patient={patient}
            appointmentId={appointment?.id}
            clinicId={clinicId}
            doctorEmail={doctorEmail}
            onSaved={(created) => {
              (async () => {
                const list = await fetchConsultationsForPatient(clinicId, patient.id);
                setConsultations(list);
              })();
            }}
          />
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium text-slate-800">Previous Consultations</h3>
        <div className="mt-3 space-y-2">
          {consultations.length === 0 && <div className="text-sm text-slate-400">No consultations yet</div>}
          {consultations.map(c => (
            <div key={c.id} className="p-3 border rounded">
              <div className="flex justify-between">
                <div className="font-medium text-sm">{new Date(c.createdAt).toLocaleString()}</div>
                <div className="text-xs text-slate-500">{c.id}</div>
              </div>
              <div className="text-sm text-slate-600 mt-2"><strong>Complaint:</strong> {c.presentComplaint || '-'}</div>
              <div className="text-sm text-slate-600 mt-1"><strong>Management:</strong> {c.management || '-'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
