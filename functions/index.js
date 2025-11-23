// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(); // uses default credentials on GCP when deployed

exports.setRole = functions.https.onCall(async (data, context) => {
  // Require that caller is signed in and (optionally) already an admin
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }

  // OPTIONAL: restrict who can call this (list of admin emails)
  const allowedAdminEmails = ['your.admin@example.com']; // replace with your admin email(s)
  if (!allowedAdminEmails.includes(context.auth.token.email)) {
    throw new functions.https.HttpsError('permission-denied', 'Only admin may set roles');
  }

  const { email, role, clinicId } = data || {};
  if (!email || !role || !clinicId) {
    throw new functions.https.HttpsError('invalid-argument', 'email, role, clinicId required');
  }

  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { role, clinicId });
    return { success: true, message: `Set role ${role} clinic ${clinicId} for ${email}` };
  } catch (err) {
    throw new functions.https.HttpsError('internal', err.message);
  }
});
