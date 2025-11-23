import { NextResponse } from 'next/server';
import { adminAuth } from '../../../lib/adminFirebase';

// POST body: { email: 'user@example.com', role: 'doctor', clinicId: 'clinic-001' }
// This route must be protected in production: only admins should call it.
export async function POST(request){
  try {
    const body = await request.json();
    const { email, role, clinicId } = body;
    if(!email || !role || !clinicId){
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Lookup user; create custom claims: {role, clinicId}
    const userRecord = await adminAuth.getUserByEmail(email);
    const claims = { role, clinicId, email: userRecord.email };
    await adminAuth.setCustomUserClaims(userRecord.uid, claims);

    return NextResponse.json({ ok: true, message: `Set role ${role} for ${email}` });
  } catch (err){
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
