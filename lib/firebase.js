// lib/firebase.js (DEBUG VERSION)
// Overwrite your existing file with this while debugging.
// After debugging you may revert to the normal version (no window exposure).

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clientConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || null,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || null,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || null,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || null,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || null,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || null
};

let firebaseApp;
if (!getApps().length) {
  try {
    firebaseApp = initializeApp(clientConfig);
    // eslint-disable-next-line no-empty
  } catch (err) {
    console.error('Firebase initializeApp error (likely invalid config):', err);
    // still expose partial config for debugging
    firebaseApp = null;
  }
} else {
  firebaseApp = getApps()[0];
}

export const auth = firebaseApp ? getAuth(firebaseApp) : null;
export const db = firebaseApp ? getFirestore(firebaseApp) : null;
export const storage = firebaseApp ? getStorage(firebaseApp) : null;

// DEBUG: expose runtime info for browser console inspection
if (typeof window !== 'undefined') {
  window.__CLINIC_DEBUG__ = window.__CLINIC_DEBUG__ || {};
  window.__CLINIC_DEBUG__.firebaseClientConfig = clientConfig;
  window.__CLINIC_DEBUG__.firebaseApp = firebaseApp;
  window.__CLINIC_DEBUG__.auth = auth;
  window.__CLINIC_DEBUG__.db = db;
  window.__CLINIC_DEBUG__.storage = storage;
  console.debug('FIREBASE DEBUG: exported to window.__CLINIC_DEBUG__');
  console.debug('FIREBASE CONFIG:', clientConfig);
}
