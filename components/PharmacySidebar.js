// components/PharmacySidebar.js
'use client';

import React from 'react';

/**
 * PharmacySidebar
 * Props:
 *  - prescriptions: array of prescription objects
 *  - onSelect(prescription)
 *  - selectedId: id of selected prescription
 *  - selectedPrescription: the currently selected prescription (object) to preview below
 */
export default function PharmacySidebar({ prescriptions = [], onSelect = () => {}, selectedId = null, selectedPrescription = null }) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="text-sm font-medium text-slate-800">Prescriptions</div>
        <div className="text-xs text-slate-500 mt-1">Pending prescriptions from doctors</div>

        <div className="mt-3 space-y-2 max-h-[48vh] overflow-auto">
          {prescriptions.length === 0 && <div className="text-sm text-slate-400">No pending prescriptions</div>}

          {prescriptions.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className={`w-full text-left p-3 border rounded transition-colors duration-100 ${selectedId === p.id ? 'bg-indigo-50 ring-1 ring-indigo-200' : 'hover:bg-slate-50'}`}
            >
              <div className="flex justify-between">
                <div className="text-sm font-medium">{p.patientNic ?? 'Unknown'}</div>
                <div className="text-xs text-slate-500">{p.createdAt ? new Date(p.createdAt).toLocaleString() : ''}</div>
              </div>
              <div className="text-xs text-slate-400 mt-1">Doctor: {p.doctorEmail ?? '-'}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected prescription preview */}
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="text-sm font-medium text-slate-800">Selected prescription</div>
        <div className="text-xs text-slate-500 mt-1">Doctor's raw management</div>
        <div className="mt-3">
          {selectedPrescription ? (
            <div>
              <div className="text-sm"><strong>Patient:</strong> {selectedPrescription.patientNic}</div>
              <div className="text-sm"><strong>Doctor:</strong> {selectedPrescription.doctorEmail}</div>
              <div className="mt-2 whitespace-pre-wrap text-sm text-slate-700">{selectedPrescription.rawManagement || '- (no management text) -'}</div>
            </div>
          ) : <div className="text-sm text-slate-400">Select a prescription</div>}
        </div>
      </div>
    </div>
  );
}
