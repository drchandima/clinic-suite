// lib/adminFirebase.js
// Server-only Firebase Admin initializer.
// IMPORTANT: never import this file in client components.

import admin from 'firebase-admin';

let firebaseAdminApp;

/**
 * Initialize firebase-admin using JSON from env var FIREBASE_SERVICE_ACCOUNT.
 * In Vercel, add FIREBASE_SERVICE_ACCOUNT as a *production* env var containing the
 * full JSON (stringified).
 */
if (!admin.apps.length) {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT || null;

  if (!raw) {
    // If no service account provided in env, try Application Default Credentials
    // (useful for Cloud Run / Cloud Functions with attached service account)
    try {
      admin.initializeApp();
      firebaseAdminApp = admin.app();
      // eslint-disable-next-line no-console
      console.warn('Initialized firebase-admin with default application credentials.');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('firebase-admin initialization failed: no SERVICE_ACCOUNT env and default credentials not available.', err.message);
      // rethrow so server code fails fast if admin is required
      throw err;
    }
  } else {
    // FIREBASE_SERVICE_ACCOUNT must be a JSON string
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
  }
} else {
  firebaseAdminApp = admin.app();
}

export default admin;