'use client';
import Link from 'next/link';

export default function Sidebar(){
  return (
    <aside className="sidebar surface">
      <div style={{marginBottom:12}}>
        <div style={{fontWeight:800,fontSize:18}}>Clinic Menu</div>
        <div className="text-muted" style={{fontSize:13}}>Quick links</div>
      </div>

      <nav style={{display:'flex',flexDirection:'column',gap:8}}>
        <Link href="/patients" className="p-item text-muted">Patients</Link>
        <Link href="/appointments" className="p-item text-muted">Appointments</Link>
        <Link href="/pharmacy" className="p-item text-muted">Pharmacy</Link>
        <Link href="/billing" className="p-item text-muted">Billing</Link>
        <Link href="/reports" className="p-item text-muted">Reports</Link>
      </nav>

      <div style={{marginTop:18}}>
        <div className="text-muted" style={{fontSize:12}}>Clinic</div>
        <div style={{fontWeight:700}}>clinic-001</div>
      </div>
    </aside>
  );
}
