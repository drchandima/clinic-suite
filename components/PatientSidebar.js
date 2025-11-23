// components/PatientSidebar.js
'use client';

import NewPatientForm from './NewPatientForm';
import { useState } from 'react';

export default function PatientSidebar({ patients = [], query = '', onQuery, onSelect, selectedId, onOpenCreate, disabled }) {
  const [openCreateInline, setOpenCreateInline] = useState(false);

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-slate-800">Patients</div>
            <div className="text-xs text-slate-400">Search and manage patients</div>
          </div>
          <button onClick={() => { setOpenCreateInline(false); onOpenCreate(); }} className="text-xs px-2 py-1 border rounded text-slate-700">+ New</button>
        </div>

        <div className="mt-3">
          <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Search by name / NIC" className="w-full p-2 rounded-md border border-slate-100 focus:ring-1 focus:ring-indigo-300" />
        </div>

        {openCreateInline && (
          <div className="mt-4">
            <NewPatientForm onSubmit={async (p) => { if (onOpenCreate) onOpenCreate(); }} disabled={disabled} />
          </div>
        )}
      </div>

      <div className="rounded-xl bg-white p-2 shadow-sm max-h-[65vh] overflow-auto">
        <div className="divide-y divide-slate-100">
          {patients.length === 0 && <div className="p-4 text-sm text-slate-400">No patients</div>}
          {patients.map(p => (
            <div key={p.id} onClick={() => onSelect(p)} className={`p-3 cursor-pointer hover:bg-slate-50 flex items-center gap-3 ${selectedId === p.id ? 'bg-slate-50' : ''}`}>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium">{(p.firstName || p.nic || 'P').charAt(0).toUpperCase()}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800">{p.firstName ? `${p.firstName} ${p.lastName ?? ''}` : 'Unnamed'}</div>
                <div className="text-xs text-slate-400">{p.id} · {p.phone ?? '—'}</div>
              </div>
              <div className="text-xs text-slate-400">{p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
