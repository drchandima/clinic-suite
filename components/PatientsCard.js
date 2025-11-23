'use client';

export default function PatientCard({ patient }) {
  if (!patient) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-lg bg-slate-100 flex items-center justify-center text-xl font-bold">
          {patient.name.split(' ').map(n => n[0]).slice(0,2).join('')}
        </div>
        <div>
          <h2 style={{fontWeight:800}} className="text-2xl">{patient.name}</h2>
          <div className="text-muted">NIC: {patient.nic} · DOB: {patient.dob}</div>
          <div className="mt-2 text-muted">{patient.phone}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-sm text-muted">Last visit</div>
          <div style={{fontWeight:700}}>{patient.lastVisit}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="card">
          <div className="text-sm text-muted">Allergies</div>
          <div style={{fontWeight:700}}>Penicillin</div>
        </div>

        <div className="card">
          <div className="text-sm text-muted">Active meds</div>
          <div style={{fontWeight:700}}>Paracetamol 500mg</div>
        </div>

        <div className="card">
          <div className="text-sm text-muted">Next appointment</div>
          <div style={{fontWeight:700}}>—</div>
        </div>
      </div>

      <div className="card">
        <div style={{fontWeight:700}} className="mb-2">Recent visits</div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><div>2025-11-20 · Consultation</div><div className="text-muted">Dr. A</div></li>
          <li className="flex justify-between"><div>2025-10-02 · Follow-up</div><div className="text-muted">Dr. B</div></li>
        </ul>
      </div>
    </div>
  );
}
