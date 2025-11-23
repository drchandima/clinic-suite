// app/login/page.js
'use client';

import { useAuth } from '../../components/AuthProvider';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { user, claims, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // ------------------------------
  // Auto-redirect after login
  // ------------------------------
  useEffect(() => {
    if (loading) return;
    if (!user || !claims) return;

    if (claims.role === 'doctor') {
      router.replace('/consultation');
    } else if (claims.role === 'receptionist') {
      router.replace('/patients');
    } else {
      router.replace('/'); // default/fallback
    }
  }, [user, claims, loading, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect handled automatically by the useEffect above
    } catch (err) {
      console.error(err);
      setError(err.message || 'Login failed');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-xl font-semibold text-center">Login</h1>

        {error && (
          <div className="mt-3 p-2 text-sm bg-red-50 border border-red-200 rounded text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full border p-2 rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          Don't have an account?{' '}
          <a className="text-indigo-600" href="/signup">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
