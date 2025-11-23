// components/ConsultationSidebar.js
'use client';

export default function ConsultationSidebar({ date, onChangeDate, appointments = [], onSelectAppointment }) {
  return (
    <div className="space-y-4">
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

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="text-sm font-medium text-slate-800">Appointments</div>
        <div className="text-xs text-slate-500 mt-1">Appointments for selected date</div>
        <div className="mt-3 space-y-2 max-h-[70vh] overflow-auto">
          {appointments.length === 0 && <div className="text-sm text-slate-400">No appointments</div>}
          {appointments.map((a) => (
            <div
              key={a.id}
              onClick={() => onSelectAppointment(a)}
              className="p-3 border rounded cursor-pointer hover:bg-slate-50"
            >
              <div className="flex justify-between">
                <div className="text-sm font-medium">{a.patientName ?? a.patientNic}</div>
                <div className="text-xs text-slate-500">{new Date(a.scheduledAt).toLocaleTimeString()}</div>
              </div>
              <div className="text-xs text-slate-400 mt-1">{a.patientNic} • {a.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
