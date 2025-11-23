// lib/adminFirebase.js
// Server-only Firebase Admin initializer.
// NOTE: Do NOT import this file in client-side code.

import admin from 'firebase-admin';

let firebaseAdminApp;

// Initialize admin SDK safely. Prefer FIREBASE_SERVICE_ACCOUNT env var containing JSON string.
// If that's not provided, attempt to use Application Default Credentials (useful on Cloud Run).
const initAdmin = () => {
  if (admin.apps.length) {
    firebaseAdminApp = admin.app();
    return;
  }

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT || null;

  if (!raw) {
    // Try default credentials (works when running on GCP with a service account)
    try {
      admin.initializeApp();
      firebaseAdminApp = admin.app();
      // eslint-disable-next-line no-console
      console.warn('Initialized firebase-admin with application default credentials.');
      return;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('firebase-admin: no FIREBASE_SERVICE_ACCOUNT and default credentials unavailable.', err.message);
      throw err;
    }
  }

  // Parse provided JSON string
  let credObj;
  try {
    credObj = typeof raw === 'string' ? JSON.parse(raw) : raw;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT JSON env var.', e);
    throw e;
  }

  admin.initializeApp({
    credential: admin.credential.cert(credObj)
  });
  firebaseAdminApp = admin.app();
};

// initialize immediately
initAdmin();

// Named exports expected by server routes
export const adminApp = firebaseAdminApp;
export const adminAuth = admin.auth();
export const adminFirestore = admin.firestore();
export const adminStorage = admin.storage();

// Default export for backwards compatibility
export default admin;
