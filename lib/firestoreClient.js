// lib/firestoreClient.js
// Consolidated Firestore client helpers for Clinic Suite
import { db } from './firebase';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  where,
  updateDoc,
  deleteDoc,
  getDoc,
  addDoc,
  runTransaction
} from 'firebase/firestore';
import { formatDateToId } from '../utils/idHelpers';

/* ============================
   Collection reference helpers
   ============================ */
function patientsCollectionRef(clinicId) {
  return collection(db, 'clinics', clinicId, 'patients');
}
function appointmentsCollectionRef(clinicId) {
  return collection(db, 'clinics', clinicId, 'appointments');
}
function drugsCollectionRef(clinicId) {
  return collection(db, 'clinics', clinicId, 'drugs');
}
function consultationsCollectionRef(clinicId) {
  return collection(db, 'clinics', clinicId, 'consultations');
}
function prescriptionsCollectionRef(clinicId) {
  return collection(db, 'clinics', clinicId, 'prescriptions');
}
function invoicesCollectionRef(clinicId) {
  return collection(db, 'clinics', clinicId, 'invoices');
}

/* ============================
   Patients
   ============================ */

/* Patients: subscribe live */
export function subscribePatients(clinicId, callback, onError) {
  if (!clinicId) {
    if (onError) onError(new Error('clinicId required'));
    return () => {};
  }
  const q = query(patientsCollectionRef(clinicId), orderBy('createdAt', 'desc'));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  }, onError);
  return unsub;
}

/* fetch once */
export async function fetchPatientsOnce(clinicId) {
  if (!clinicId) throw new Error('clinicId required');
  const q = query(patientsCollectionRef(clinicId), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/* create or update patient (patient.nic used as doc id) */
export async function createOrUpdatePatient(clinicId, patient, createdByEmail = null) {
  if (!clinicId) throw new Error('clinicId required');
  if (!patient || !patient.nic) throw new Error('patient.nic (NIC) required');

  const patientId = String(patient.nic).trim();
  const ref = doc(db, 'clinics', clinicId, 'patients', patientId);

  const now = new Date();
  const payload = {
    ...patient,
    nic: patientId,
    updatedAt: now.toISOString(),
    createdAt: patient.createdAt ?? now.toISOString(),
    createdBy: patient.createdBy ?? createdByEmail ?? null
  };
  await setDoc(ref, payload, { merge: true });
  return { id: patientId, ...payload };
}

/* get single patient */
export async function getPatient(clinicId, patientNic) {
  if (!clinicId) throw new Error('clinicId required');
  const ref = doc(db, 'clinics', clinicId, 'patients', String(patientNic));
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/* update patient fields */
export async function updatePatient(clinicId, patientNic, data) {
  if (!clinicId) throw new Error('clinicId required');
  const ref = doc(db, 'clinics', clinicId, 'patients', String(patientNic));
  await updateDoc(ref, { ...data, updatedAt: new Date().toISOString() });
  const snap = await getDoc(ref);
  return { id: snap.id, ...snap.data() };
}

/* ============================
   Appointments
   ============================ */

/* Appointments: create using scheduledAt -> YYYYMMDDHHMMSS id */
export async function createAppointment(clinicId, { patientNic, scheduledAtISO, receptionistEmail = null, notes = '', status = 'confirmed' }) {
  if (!clinicId) throw new Error('clinicId required');
  if (!patientNic) throw new Error('patientNic required');

  const scheduledDate = (scheduledAtISO instanceof Date) ? scheduledAtISO : new Date(scheduledAtISO);
  if (Number.isNaN(scheduledDate.getTime())) throw new Error('Invalid scheduledAt value');

  const appointmentId = formatDateToId(scheduledDate);
  const ref = doc(db, 'clinics', clinicId, 'appointments', appointmentId);

  const payload = {
    patientNic: String(patientNic).trim(),
    scheduledAt: scheduledDate.toISOString(),
    status,
    receptionistEmail,
    notes,
    createdAt: new Date().toISOString()
  };

  await setDoc(ref, payload, { merge: false });
  return { id: appointmentId, ...payload };
}

/* fetch appointments for a patient (once) — client-side sort */
export async function fetchAppointmentsForPatient(clinicId, patientNic) {
  if (!clinicId) throw new Error('clinicId required');
  const coll = appointmentsCollectionRef(clinicId);
  const q = query(coll, where('patientNic', '==', String(patientNic)));
  const snap = await getDocs(q);
  const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  items.sort((a, b) => (b.scheduledAt || '').localeCompare(a.scheduledAt || ''));
  return items;
}

/* subscribe appointments for a patient (live) — client-side sort */
export function subscribeAppointmentsForPatient(clinicId, patientNic, callback, onError) {
  if (!clinicId) {
    if (onError) onError(new Error('clinicId required'));
    return () => {};
  }
  const coll = appointmentsCollectionRef(clinicId);
  const q = query(coll, where('patientNic', '==', String(patientNic)));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    items.sort((a, b) => (b.scheduledAt || '').localeCompare(a.scheduledAt || ''));
    callback(items);
  }, (err) => {
    console.error('subscribeAppointmentsForPatient error', err);
    if (onError) onError(err);
  });
  return unsub;
}

/* update appointment (partial) */
export async function updateAppointment(clinicId, appointmentId, data) {
  if (!clinicId) throw new Error('clinicId required');
  const ref = doc(db, 'clinics', clinicId, 'appointments', String(appointmentId));
  await updateDoc(ref, { ...data, updatedAt: new Date().toISOString() });
  const snap = await getDoc(ref);
  return { id: snap.id, ...snap.data() };
}

/* cancel appointment -> status = 'cancelled' */
export async function cancelAppointment(clinicId, appointmentId, cancelledByEmail = null) {
  return updateAppointment(clinicId, appointmentId, { status: 'cancelled', cancelledBy: cancelledByEmail, cancelledAt: new Date().toISOString() });
}

/* delete appointment (if needed) */
export async function deleteAppointment(clinicId, appointmentId) {
  if (!clinicId) throw new Error('clinicId required');
  const ref = doc(db, 'clinics', clinicId, 'appointments', String(appointmentId));
  await deleteDoc(ref);
  return true;
}

/* ============================
   Date-based appointment helpers
   ============================ */

/**
 * Fetch appointments for a specific date (ISO date string or Date object)
 * Returns appointments ordered by scheduledAt ascending.
 */
export async function fetchAppointmentsByDate(clinicId, date) {
  if (!clinicId) throw new Error('clinicId required');
  const d = (date instanceof Date) ? date : new Date(date);
  const start = new Date(d); start.setHours(0,0,0,0);
  const end = new Date(d); end.setHours(23,59,59,999);

  const coll = appointmentsCollectionRef(clinicId);
  const q = query(coll, where('scheduledAt', '>=', start.toISOString()), where('scheduledAt', '<=', end.toISOString()));
  const snap = await getDocs(q);
  const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  items.sort((a,b) => (a.scheduledAt || '').localeCompare(b.scheduledAt || ''));
  return items;
}

/**
 * Subscribe to appointments for a specific date (real-time)
 * callback(items) on update
 */
export function subscribeAppointmentsByDate(clinicId, date, callback, onError) {
  if (!clinicId) {
    if (onError) onError(new Error('clinicId required'));
    return () => {};
  }
  const d = (date instanceof Date) ? date : new Date(date);
  const start = new Date(d); start.setHours(0,0,0,0);
  const end = new Date(d); end.setHours(23,59,59,999);

  const coll = appointmentsCollectionRef(clinicId);
  const q = query(coll, where('scheduledAt', '>=', start.toISOString()), where('scheduledAt', '<=', end.toISOString()));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map(dd => ({ id: dd.id, ...dd.data() }));
    items.sort((a,b) => (a.scheduledAt || '').localeCompare(b.scheduledAt || ''));
    callback(items);
  }, (err) => {
    console.error('subscribeAppointmentsByDate error', err);
    if (onError) onError(err);
  });
  return unsub;
}

/* ============================
   Consultations
   ============================ */

/**
 * Create consultation document.
 * ID format: YYYYMMDDHHMMSS-<NIC>
 */
export async function createConsultation(clinicId, {
  patientNic,
  appointmentId = null,
  doctorEmail = null,
  presentComplaint = '',
  examFindings = '',
  differentialDiagnosis = '',
  investigations = '',
  management = ''
} = {}) {
  if (!clinicId) throw new Error('clinicId required');
  if (!patientNic) throw new Error('patientNic required');

  const now = new Date();
  const id = formatDateToId(now) + '-' + String(patientNic);
  const ref = doc(db, 'clinics', clinicId, 'consultations', id);

  const docData = {
    patientNic: String(patientNic),
    appointmentId: appointmentId ?? null,
    doctorEmail: doctorEmail ?? null,
    presentComplaint,
    examFindings,
    differentialDiagnosis,
    investigations,
    management,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  };

  await setDoc(ref, docData, { merge: false });
  return { id, ...docData };
}

/**
 * Fetch consultations for a patient (latest first)
 */
export async function fetchConsultationsForPatient(clinicId, patientNic) {
  if (!clinicId) throw new Error('clinicId required');
  if (!patientNic) throw new Error('patientNic required');

  const coll = consultationsCollectionRef(clinicId);
  const q = query(coll, where('patientNic', '==', String(patientNic)));
  const snap = await getDocs(q);
  const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  items.sort((a,b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  return items;
}

/**
 * Subscribe consultations for a patient (real-time)
 */
export function subscribeConsultationsForPatient(clinicId, patientNic, callback, onError) {
  if (!clinicId) {
    if (onError) onError(new Error('clinicId required'));
    return () => {};
  }
  const coll = consultationsCollectionRef(clinicId);
  const q = query(coll, where('patientNic', '==', String(patientNic)));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    items.sort((a,b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    callback(items);
  }, (err) => {
    console.error('subscribeConsultationsForPatient error', err);
    if (onError) onError(err);
  });
  return unsub;
}

/* ============================
   Prescriptions
   ============================ */

/**
 * Create prescription document (doctor creates from consultation)
 * id format: YYYYMMDDHHMMSS-<NIC>
 * Stored under clinics/{clinicId}/prescriptions/{prescId}
 */
export async function createPrescription(clinicId, { consultationId = null, patientNic, doctorEmail = null, rawManagement = '', items = [] } = {}) {
  if (!clinicId) throw new Error('clinicId required');
  if (!patientNic) throw new Error('patientNic required');

  const now = new Date();
  const prescId = formatDateToId(now) + '-' + String(patientNic);
  const ref = doc(db, 'clinics', clinicId, 'prescriptions', prescId);

  // compute subtotal if items provided
  let subtotal = 0;
  const normalizedItems = (Array.isArray(items) ? items : []).map(it => {
    const unitPrice = Number(it.unitPrice || 0) || 0;
    const qty = Number(it.qty || 0) || 0;
    const lineTotal = unitPrice * qty;
    subtotal += lineTotal;
    return {
      drugId: it.drugId ?? null,
      drugName: it.drugName ?? (it.name ?? ''),
      dose: it.dose ?? '',
      qty,
      unitPrice,
      lineTotal,
      raw: it.raw ?? null
    };
  });

  const docData = {
    consultationId,
    patientNic: String(patientNic),
    doctorEmail: doctorEmail ?? null,
    rawManagement: rawManagement ?? '',
    items: normalizedItems,
    subtotal,
    tax: 0,
    total: subtotal,
    status: 'pending',
    createdAt: now.toISOString()
  };

  await setDoc(ref, docData, { merge: false });
  return { id: prescId, ...docData };
}

/**
 * Subscribe pending prescriptions (pharmacist)
 */
export function subscribePendingPrescriptions(clinicId, callback, onError) {
  if (!clinicId) {
    if (onError) onError(new Error('clinicId required'));
    return () => {};
  }
  const coll = prescriptionsCollectionRef(clinicId);
  const q = query(coll, where('status', '==', 'pending'), orderBy('createdAt', 'asc'));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(items);
  }, (err) => {
    console.error('subscribePendingPrescriptions error', err);
    if (onError) onError(err);
  });
  return unsub;
}

/* ============================
   Drugs (inventory)
   ============================ */

/* Subscribe / fetch drugs list */
export function subscribeDrugs(clinicId, callback, onError) {
  if (!clinicId) {
    if (onError) onError(new Error('clinicId required'));
    return () => {};
  }
  const coll = drugsCollectionRef(clinicId);
  const q = query(coll, orderBy('name', 'asc'));
  const unsub = onSnapshot(q, (snap) => {
    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(items);
  }, onError);
  return unsub;
}

export async function fetchDrugsOnce(clinicId) {
  if (!clinicId) throw new Error('clinicId required');
  const coll = drugsCollectionRef(clinicId);
  const q = query(coll, orderBy('name', 'asc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function createOrUpdateDrug(clinicId, drugIdOrName, { name, dose, qtyAvailable = 0, pricePerUnit = 0, updatedBy = null } = {}) {
  if (!clinicId) throw new Error('clinicId required');
  const id = String(drugIdOrName).trim();
  const ref = doc(db, 'clinics', clinicId, 'drugs', id);
  const payload = {
    name: name ?? id,
    dose: dose ?? '',
    qtyAvailable: Number(qtyAvailable) || 0,
    pricePerUnit: Number(pricePerUnit) || 0,
    updatedAt: new Date().toISOString(),
    updatedBy: updatedBy ?? null
  };
  await setDoc(ref, payload, { merge: true });
  return { id, ...payload };
}

/* ============================
   Stock transactions: decrement / increment
   ============================ */

/**
 * Decrement drug stock atomically using a transaction.
 * Ensures stock never goes negative.
 *
 * Returns the new qtyAvailable after decrement.
 */
export async function decrementDrugStock(clinicId, drugId, decQty = 1) {
  if (!clinicId) throw new Error('clinicId required');
  if (!drugId) throw new Error('drugId required');
  decQty = Number(decQty) || 0;
  if (decQty <= 0) throw new Error('decQty must be > 0');

  const drugRef = doc(db, 'clinics', clinicId, 'drugs', String(drugId));

  const result = await runTransaction(db, async (tx) => {
    const snap = await tx.get(drugRef);
    if (!snap.exists()) throw new Error('Drug not found');
    const data = snap.data();
    const current = Number(data.qtyAvailable || 0);
    if (current < decQty) throw new Error(`Insufficient stock for ${data.name || drugId} (need ${decQty}, have ${current})`);
    const newQty = current - decQty;
    tx.update(drugRef, { qtyAvailable: newQty, updatedAt: new Date().toISOString() });
    return newQty;
  });

  return result; // number
}

/**
 * Increment drug stock atomically using a transaction.
 * Use when removing items from cart / restocking.
 *
 * @returns {number} newQty
 */
export async function incrementDrugStock(clinicId, drugId, incQty = 1) {
  if (!clinicId) throw new Error('clinicId required');
  if (!drugId) throw new Error('drugId required');
  incQty = Number(incQty) || 0;
  if (incQty <= 0) throw new Error('incQty must be > 0');

  const drugRef = doc(db, 'clinics', clinicId, 'drugs', String(drugId));

  const result = await runTransaction(db, async (tx) => {
    const snap = await tx.get(drugRef);
    if (!snap.exists()) throw new Error('Drug not found');
    const data = snap.data();
    const current = Number(data.qtyAvailable || 0);
    const newQty = current + incQty;
    tx.update(drugRef, { qtyAvailable: newQty, updatedAt: new Date().toISOString() });
    return newQty;
  });

  return result;
}

/* ============================
   Issue prescription transaction
   ============================ */

/**
 * issuePrescriptionTransaction
 * - clinicId
 * - prescriptionId
 * - pharmacistEmail
 * - items: [{ drugId, qty }]  // items to issue; caller should provide qty and drugId
 *
 * Behavior (atomic transaction):
 *  - verify prescription exists and is pending
 *  - load each drug doc and ensure qtyAvailable >= qty requested
 *  - decrement qtyAvailable for each drug
 *  - create invoice doc (id format formatDateToId + -patientNic)
 *  - update prescription status -> 'issued', set issuedAt, issuedBy, invoiceId
 *  - return invoice summary
 */
export async function issuePrescriptionTransaction(clinicId, prescriptionId, pharmacistEmail, items = []) {
  if (!clinicId) throw new Error('clinicId required');
  if (!prescriptionId) throw new Error('prescriptionId required');
  if (!Array.isArray(items) || items.length === 0) throw new Error('items required');

  const prescRef = doc(db, 'clinics', clinicId, 'prescriptions', prescriptionId);

  const result = await runTransaction(db, async (tx) => {
    const prescSnap = await tx.get(prescRef);
    if (!prescSnap.exists()) throw new Error('Prescription not found');
    const presc = prescSnap.data();

    if (presc.status === 'issued') throw new Error('Prescription already issued');

    // Prepare drug refs and read them
    const drugRefs = items.map(i => doc(db, 'clinics', clinicId, 'drugs', String(i.drugId)));
    const drugSnaps = [];
    for (const r of drugRefs) {
      const s = await tx.get(r);
      drugSnaps.push(s);
    }

    // Check availability
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const snap = drugSnaps[i];
      if (!snap.exists()) throw new Error(`Drug not found: ${it.drugId}`);
      const d = snap.data();
      const available = Number(d.qtyAvailable || 0);
      const needed = Number(it.qty || 0);
      if (needed <= 0) throw new Error(`Invalid qty for ${it.drugId}`);
      if (available < needed) throw new Error(`Insufficient stock for ${d.name} (need ${needed}, have ${available})`);
    }

    // Compute line items and totals
    const lineItems = [];
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const snap = drugSnaps[i];
      const d = snap.data();
      const unitPrice = Number(d.pricePerUnit || 0);
      const qty = Number(it.qty || 0);
      const lineTotal = unitPrice * qty;
      subtotal += lineTotal;
      lineItems.push({
        drugId: String(it.drugId),
        drugName: d.name,
        dose: d.dose || '',
        qty,
        unitPrice,
        lineTotal
      });
    }

    // Create invoice id
    const now = new Date();
    const invoiceId = formatDateToId(now) + '-' + String(presc.patientNic || 'unknown');

    const invRef = doc(db, 'clinics', clinicId, 'invoices', invoiceId);

    const invoiceDoc = {
      prescriptionId,
      patientNic: presc.patientNic,
      pharmacistEmail,
      createdAt: now.toISOString(),
      items: lineItems,
      subtotal,
      tax: 0,
      total: subtotal,
      status: 'unpaid'
    };

    // Decrement stocks
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const r = drugRefs[i];
      const snap = drugSnaps[i];
      const current = Number(snap.data().qtyAvailable || 0);
      const newQty = current - Number(it.qty || 0);
      tx.update(r, { qtyAvailable: newQty, updatedAt: new Date().toISOString() });
    }

    // Create invoice
    tx.set(invRef, invoiceDoc);

    // Update prescription to issued
    tx.update(prescRef, {
      status: 'issued',
      issuedAt: now.toISOString(),
      issuedBy: pharmacistEmail,
      invoiceId
    });

    // Optionally link invoiceId into consultation doc
    if (presc.consultationId) {
      const consultRef = doc(db, 'clinics', clinicId, 'consultations', presc.consultationId);
      const consultSnap = await tx.get(consultRef);
      if (consultSnap.exists()) {
        tx.update(consultRef, { invoiceId });
      }
    }

    return {
      invoiceId,
      invoice: invoiceDoc
    };
  });

  return result;
}

/* ============================
   Fetch helpers: one-off / subscription
   ============================ */

/* -- already have subscribePatients, subscribeDrugs, subscribePendingPrescriptions, subscribeConsultationsForPatient, etc. -- */

/* Provide fetch functions for invoices if needed */
export async function fetchInvoicesForPatient(clinicId, patientNic) {
  if (!clinicId) throw new Error('clinicId required');
  if (!patientNic) throw new Error('patientNic required');
  const coll = invoicesCollectionRef(clinicId);
  const q = query(coll, where('patientNic', '==', String(patientNic)));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/* ============================
   Exports (already named exports above)
   ============================ */

// Note: all functions are exported as named exports above.
// No default export.
