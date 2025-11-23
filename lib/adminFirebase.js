// Firebase Admin SDK initializer - for server use only
import admin from "firebase-admin";

let app;
if (!admin.apps.length) {
  const svcJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  const svcPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  if (svcJson) {
    const parsed = JSON.parse(svcJson);
    app = admin.initializeApp({
      credential: admin.credential.cert(parsed)
    });
  } else if (svcPath) {
    app = admin.initializeApp({
      credential: admin.credential.cert(require(svcPath))
    });
  } else {
    // This will allow the Admin SDK to use GOOGLE_APPLICATION_CREDENTIALS env var if set
    app = admin.initializeApp();
  }
} else {
  app = admin.app();
}

export const adminAuth = app.auth();
export const adminDb = app.firestore();
