// components/ConsultationSidebar.js
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { getPatient } from '../lib/firestoreClient';

/**
 * ConsultationSidebar
 *
 * Props:
 * - clinicId: string
 * - date: "YYYY-MM-DD" (string)
 * - onChangeDate: function(newDateString)
 * - appointments: array of appointment objects (each must have id, patientNic, scheduledAt, status)
 * - selectedAppointmentId: string or null
 * - onSelect: function(appointment)
 */
export default function ConsultationSidebar({
  clinicId,
  date = new Date().toISOString().slice(0, 10),
  onChangeDate = () => {},
  appointments = [],
  selectedAppointmentId = null,
  onSelect = () => {}
}) {
  const [patientMap, setPatientMap] = useState({});
  const [loadingMap, setLoadingMap] = useState(false);
  const [error, setError] = useState(null);

  // compute unique NICs present in appointments
  const uniqueNics = useMemo(() => {
    const s = new Set();
    for (const a of appointments || []) {
      if (a && a.patientNic) s.add(String(a.patientNic));
    }
    return Array.from(s);
  }, [appointments]);

  // fetch patient docs for those NICs (batch)
  useEffect(() => {
    let mounted = true;
    if (!clinicId || uniqueNics.length === 0) {
      setPatientMap({});
      return;
    }

    setLoadingMap(true);
    setError(null);

    (async () => {
      try {
        const map = {};
        await Promise.all(
          uniqueNics.map(async (nic) => {
            try {
              const p = await getPatient(clinicId, nic);
              map[nic] = p ?? null;
            } catch (err) {
              map[nic] = null;
              console.error('getPatient error', nic, err);
            }
          })
        );

        if (!mounted) return;
        setPatientMap(map);
      } catch (err) {
        console.error('fetch patientMap failed', err);
        if (mounted) setError(err?.message ?? String(err));
      } finally {
        if (mounted) setLoadingMap(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [clinicId, uniqueNics.join('|')]);

  function formatTime(iso) {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return iso;
    }
  }

  return (
    <div className="space-y-4">
      {/* Calendar block */}
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="text-sm font-medium text-slate-800">Calendar</div>
        <div className="mt-3">
          <input
            type="date"
            value={date}
            onChange={(e) => onChangeDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Appointments block */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-slate-700">Appointments for selected date</div>
        </div>

        {loadingMap && (
          <div className="text-sm text-slate-500 py-4">Loading patients...</div>
        )}

        {error && (
          <div className="text-sm text-red-600 py-2">Error: {String(error)}</div>
        )}

        <div className="space-y-2 max-h-[56vh] overflow-auto">
          {appointments.length === 0 && (
            <div className="text-sm text-slate-400 p-3">No appointments for this date.</div>
          )}

          {appointments.map((appt) => {
            const nic = String(appt.patientNic ?? '').trim();
            const patient = patientMap[nic];
            const firstName =
              patient?.firstName ||
              patient?.givenName ||
              (patient?.name?.split?.(' ')?.[0]) ||
              '';
            const lastName =
              patient?.lastName ||
              patient?.familyName ||
              (patient?.name && patient.name.split(' ').slice(1).join(' ')) ||
              '';
            const gender =
              (patient && patient.gender)
                ? String(patient.gender)
                : (patient && patient.sex)
                ? String(patient.sex)
                : '';
            const titleLine =
              (firstName || lastName || gender)
                ? `${[firstName, lastName].filter(Boolean).join(' ')}${gender ? `, ${gender}` : ''}`
                : nic;

            const isSelected = selectedAppointmentId && selectedAppointmentId === appt.id;

            return (
              <button
                key={appt.id}
                onClick={() => onSelect(appt)}
                className={`w-full text-left p-3 rounded-lg border ${isSelected ? 'border-indigo-200 bg-indigo-50' : 'border-transparent hover:border-slate-200'} `}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {patient ? titleLine : nic}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {nic} • {appt.status || 'confirmed'}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 ml-3">
                    {formatTime(appt.scheduledAt)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
