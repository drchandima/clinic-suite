'use client';
import { useEffect, useMemo, useState } from 'react';
const sampleData = [
  { nic: '901234567V', name: 'Kamal Perera', dob: '1990-02-14', phone: '+94 77 123 4567', lastVisit: '2025-11-20' },
  { nic: '891234567V', name: 'Saman Kumara', dob: '1989-04-22', phone: '+94 71 234 5678', lastVisit: '2025-11-18' },
  { nic: '000000001V', name: 'Madusha Silva', dob: '2021-01-12', phone: '+94 70 345 6789', lastVisit: '2025-11-01' }
];

export default function PatientsList({ onSelect, onMakeAppointment }) {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // placeholder: replace with Firestore fetch in production
    setItems(sampleData);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      i =>
        i.name.toLowerCase().includes(q) ||
        (i.nic && i.nic.toLowerCase().includes(q)) ||
        (i.phone && i.phone.toLowerCase().includes(q))
    );
  }, [query, items]);

  return (
    <div>
      <input className="input" placeholder="Search by name, NIC or phone" value={query} onChange={e => setQuery(e.target.value)} />
      <div style={{marginTop:12, display:'flex',flexDirection:'column',gap:8, maxHeight:'56vh', overflow:'auto'}}>
        {filtered.map(p => (
          <div key={p.nic} className="p-item" style={{border:'1px solid rgba(255,255,255,0.02)'}}>
            <div className="p-badge">{p.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
            <div style={{textAlign:'left'}}>
              <div style={{fontWeight:700}}>{p.name}</div>
              <div className="text-muted" style={{fontSize:12}}>{p.nic} · {p.phone}</div>
            </div>
            <div style={{marginLeft:'auto', display:'flex', gap:8}}>
              <button onClick={() => onSelect && onSelect(p)} className="btn-ghost">Open</button>
              <button onClick={() => onMakeAppointment && onMakeAppointment(p)} className="btn">Make appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
