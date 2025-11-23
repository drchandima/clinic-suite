// components/AuthProvider.js
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getIdTokenResult } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext({ user: null, claims: null, loading: true });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [claims, setClaims] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(null);
        setClaims(null);
        setLoading(false);
        return;
      }
      setUser(u);
      setLoading(true);

      let tokenClaims = null;
      try {
        const idTokenResult = await getIdTokenResult(u, /* forceRefresh= */ false);
        tokenClaims = idTokenResult.claims || null;
      } catch (err) {
        console.error('getIdTokenResult failed', err);
        tokenClaims = null;
      }

      // If no clinicId on token, try reading users/{uid} as fallback
      if (!tokenClaims?.clinicId) {
        try {
          const uRef = doc(db, 'users', u.uid);
          const snap = await getDoc(uRef);
          if (snap.exists()) {
            const d = snap.data();
            tokenClaims = {
              ...tokenClaims,
              clinicId: tokenClaims?.clinicId ?? d.clinicId ?? null,
              role: tokenClaims?.role ?? d.role ?? null
            };
            console.debug('AuthProvider: fallback claims from users/{uid}', d);
          }
        } catch (err) {
          console.error('Failed to fetch users/{uid} fallback', err);
        }
      }

      setClaims(tokenClaims);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, claims, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
