# Clinic Suite Starter (Next.js 16) — Multi-tenant (clinicId) design

This starter scaffold implements the requested multi-tenant clinic EMR design using **Next.js 16 (App Router)** and **Firebase** (Auth, Firestore, Storage).  
It follows your constraints:
- **clinicId** is the tenant separator (top-level in documents).
- **userId** uses **email address**.
- **patientId** uses **NIC**.
- **appointmentId** and **visitId** use `YYYYMMDDHHMMSS` timestamp format.
- **prescriptions** include a `route` field (oral, rectal, local_application, IV).
- **invoices** include `issuedDrugExpenses`.

This scaffold provides a minimal runnable structure, Firebase helpers, example API route to set roles, security rules template, and a step-by-step Firebase configuration guide.

---

## What is included (minimal starter)
```
/app                     Next.js app directory (App Router)
  /api/setRole/route.js  Server API to set custom claims (admin-only)
  layout.js
  page.js
/components
/lib
  adminFirebase.js       Firebase Admin SDK helper (server)
  firebase.js            Firebase Client SDK helper
/utils
  idHelpers.js           helpers for ID formats
firestore.rules          Firestore security rules (template)
.env.example             Example env variables
package.json
next.config.js
tailwind.config.js
postcss.config.js
README.md
```

> This is a starter. To keep the package small and focused, many UI pieces are placeholders so you can extend easily.

---

## Quick start (local)
1. Unzip the archive and `cd` into the folder.
2. Create a project in Firebase console and enable:
   - Authentication (Email/Password)
   - Firestore (Native mode)
   - Storage (optional for attachments)
3. Copy your Firebase config into `.env.local` (see `.env.example`).
4. Install dependencies:
```bash
npm install
```
5. Run locally:
```bash
npm run dev
```

---

## Firebase configuration (step-by-step)

1. Go to https://console.firebase.google.com and **create a new project** (or use existing).
   - Name it e.g. `clinic-suite-{your-clinic}` or for multi-tenant, create a single project that will host all tenants, and you will separate tenant data by `clinicId` field.
2. **Enable Authentication**:
   - Authentication -> Sign-in method -> Enable **Email/Password** (also Phone if desired).
3. **Create a Service Account for Admin SDK**:
   - Project Settings -> Service accounts -> Generate new private key.
   - Save the JSON file securely.
   - You will use this to populate `FIREBASE_SERVICE_ACCOUNT` (as JSON string or path) in `.env.local` available to server.
4. **Enable Firestore**:
   - Create Firestore in **Native mode**.
   - Use the security rules file included (`firestore.rules`) as a starting point. Deploy carefully.
5. **Enable Storage** (optional):
   - Storage -> create a bucket.
6. **Set environment variables**:
   - Copy `.env.example` -> `.env.local` and fill in values. Important variables:
     - `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `FIREBASE_SERVICE_ACCOUNT` (server only — keep secret).
7. **Deploy rules and indexes**:
   - Use Firebase CLI to deploy rules and security.
   - Example:
     ```bash
     firebase login
     firebase init firestore
     firebase deploy --only firestore:rules
     ```
8. **Admin users & roles**:
   - Admin UI is not included fully — use the sample API route to set custom claims using your service account or run a small script with Admin SDK to assign `admin` role for a given user email.

---

## Important: tenant (clinicId) design
All collections are namespaced under `clinics/{clinicId}/...` where `clinicId` is your tenant key. Example:
```
clinics/{clinicId}/patients/{patientNic}
clinics/{clinicId}/appointments/{appointmentId}   // appointmentId = YYYYMMDDHHMMSS
clinics/{clinicId}/visits/{visitId}               // visitId = YYYYMMDDHHMMSS
clinics/{clinicId}/prescriptions/{prescriptionId}
clinics/{clinicId}/drugs/{drugId}
clinics/{clinicId}/invoices/{invoiceId}
```

Security rules must check `request.auth.token.clinicId == clinicId` or use custom claims to enforce that users can only access their clinic's data.

---

## Notes & next steps
- This scaffold focuses on correct data modelling and Firebase integration patterns. You should extend UI and flows, add tests, and deploy carefully.
- Watch out for **race conditions** when decrementing drug stock — use Firestore transactions.
- Audit logs should be written server-side using Admin SDK to prevent client manipulation.

---

Now I'll provide the scaffolding and a downloadable ZIP in this package. Follow the README for further steps.
