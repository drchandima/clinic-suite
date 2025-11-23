// app/debug/page.js
'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useAuth } from '../../components/AuthProvider';
import { db } from '../../lib/firebase';

export default function DebugPage() {
  const { user, claims, loading } = useAuth();
  const [out, setOut] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      setOut((o) => [...o, 'Not signed in - please login first.']);
      return;
    }
    (async () => {
      setRunning(true);
      setOut([]);
      try {
        setOut((o) => [...o, `Signed-in uid=${user.uid} email=${user.email}`]);
        // 1) Try to read users/{uid}
        const userRef = doc(db, 'users', user.uid);
        setOut((o) => [...o, `Attempting to read users/${user.uid} ...`]);
        try {
          const uSnap = await getDoc(userRef);
          if (uSnap.exists()) {
            setOut((o) => [...o, `users/${user.uid} exists: ${JSON.stringify(uSnap.data())}`]);
          } else {
            setOut((o) => [...o, `users/${user.uid} does NOT exist`]);
          }
        } catch (err) {
          setOut((o) => [...o, `Error reading users/${user.uid}: ${err.message}`]);
          console.error('users read error', err);
        }

        // 2) If claims.clinicId present try to list patients for that clinic
        if (claims?.clinicId) {
          setOut((o) => [...o, `claims.clinicId present: ${claims.clinicId} — trying to read clinics/${claims.clinicId}/patients`]);
          try {
            const patientsColl = collection(db, 'clinics', claims.clinicId, 'patients');
            const q = query(patientsColl, orderBy('createdAt', 'desc'));
            const snap = await getDocs(q);
            setOut((o) => [...o, `Found ${snap.size} patients:`]);
            snap.docs.forEach(d => setOut((o) => [...o, ` - ${d.id}: ${JSON.stringify(d.data())}`]));
          } catch (err) {
            setOut((o) => [...o, `Error reading patients for clinic ${claims.clinicId}: ${err.message}`]);
            console.error('patients read error', err);
          }
        } else {
          setOut((o) => [...o, 'claims.clinicId not present on token — cannot read clinic data.']);
        }
      } finally {
        setRunning(false);
      }
    })();
  }, [user, loading, claims]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Debug: Firestore access</h1>
      <div className="mb-4">
        <div>Logged in user: <strong>{user?.email ?? 'not signed in'}</strong></div>
        <div>UID: <code>{user?.uid ?? 'n/a'}</code></div>
        <div>Token claims: <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(claims, null, 2) ?? 'n/a'}</pre></div>
      </div>

      <div className="border p-3 rounded bg-slate-50">
        <div className="mb-2 font-medium">Actions</div>
        <div>
          {running ? <div>Running checks…</div> : <div>Checks run automatically on load / auth change.</div>}
        </div>
      </div>

      <div className="mt-4">
        <div className="font-medium mb-2">Log output</div>
        <div className="p-3 bg-white border rounded space-y-2">
          {out.length === 0 && <div className="text-slate-500">No output yet.</div>}
          {out.map((line, i) => <div key={i} className="text-sm"><code>{line}</code></div>)}
        </div>
      </div>
    </div>
  );
}
