
'use client';
export default function PatientCard({ patient }){
  if(!patient) return null;
  return (
    <div>
      <div style={{display:'flex',gap:16,alignItems:'center'}}>
        <div style={{width:84,height:84,borderRadius:12,background:'linear-gradient(180deg,#111827,#0b1220)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,fontWeight:800,color:'#c7d2fe'}}>
          {patient.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
        </div>
        <div>
          <div style={{fontSize:20,fontWeight:800}}>{patient.name}</div>
          <div className="text-muted">NIC: {patient.nic} · DOB: {patient.dob}</div>
          <div className="text-muted" style={{marginTop:6}}>{patient.phone}</div>
        </div>
        <div style={{marginLeft:'auto',textAlign:'right'}}>
          <div className="text-muted">Last visit</div>
          <div style={{fontWeight:800}}>{patient.lastVisit}</div>
        </div>
      </div>

      <div style={{marginTop:20, display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
        <div className="surface">
          <div className="text-muted">Allergies</div>
          <div style={{fontWeight:700}}>Penicillin</div>
        </div>
        <div className="surface">
          <div className="text-muted">Active meds</div>
          <div style={{fontWeight:700}}>Paracetamol 500mg</div>
        </div>
        <div className="surface">
          <div className="text-muted">Next appointment</div>
          <div style={{fontWeight:700}}>—</div>
        </div>
      </div>
    </div>
  );
}
