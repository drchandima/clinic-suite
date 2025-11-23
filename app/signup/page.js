'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/navigation';

export default function SignupPage(){
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(userCred.user, { displayName });
      }
      router.push('/login');
    } catch (error) {
      console.error(error);
      setErr(error.message || String(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-8">
      <div className="max-w-md mx-auto card">
        <div className="flex items-center justify-between">
          <div>
            <h1 style={{fontSize:'1.5rem', fontWeight:800}}>Create account</h1>
            <p className="text-muted mt-1">Get started with Clinic Suite</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="text-sm">Full name</label>
          <input className="form-input" placeholder="Dr. Jane Doe" value={displayName} onChange={e=>setDisplayName(e.target.value)} />

          <label className="text-sm">Email</label>
          <input className="form-input" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label className="text-sm">Password</label>
          <input type="password" className="form-input" placeholder="Create a password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <button type="submit" className="btn btn-primary mt-2">{loading ? 'Creating...' : 'Create account'}</button>
          {err && <div className="text-red-600 mt-2">{err}</div>}
        </form>

        <div className="mt-6 text-sm text-center">
          Already have an account? <a href="/login" className="text-primary font-semibold">Sign in</a>
        </div>
      </div>
    </div>
  );
}
