module.exports = [
"[project]/clinic-suite/utils/idHelpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/idHelpers.js
__turbopack_context__.s([
    "formatDateToId",
    ()=>formatDateToId
]);
function formatDateToId(date = new Date()) {
    const d = date instanceof Date ? date : new Date(date);
    const pad = (n)=>String(n).padStart(2, '0');
    const YYYY = d.getFullYear();
    const MM = pad(d.getMonth() + 1);
    const DD = pad(d.getDate());
    const hh = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `${YYYY}${MM}${DD}${hh}${mm}${ss}`;
}
}),
"[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/firestoreClient.js
// Consolidated Firestore client helpers for Clinic Suite
__turbopack_context__.s([
    "cancelAppointment",
    ()=>cancelAppointment,
    "createAppointment",
    ()=>createAppointment,
    "createConsultation",
    ()=>createConsultation,
    "createOrUpdateDrug",
    ()=>createOrUpdateDrug,
    "createOrUpdatePatient",
    ()=>createOrUpdatePatient,
    "createPrescription",
    ()=>createPrescription,
    "decrementDrugStock",
    ()=>decrementDrugStock,
    "deleteAppointment",
    ()=>deleteAppointment,
    "fetchAppointmentsByDate",
    ()=>fetchAppointmentsByDate,
    "fetchAppointmentsForPatient",
    ()=>fetchAppointmentsForPatient,
    "fetchConsultationsForPatient",
    ()=>fetchConsultationsForPatient,
    "fetchDrugsOnce",
    ()=>fetchDrugsOnce,
    "fetchInvoicesForPatient",
    ()=>fetchInvoicesForPatient,
    "fetchPatientsOnce",
    ()=>fetchPatientsOnce,
    "getPatient",
    ()=>getPatient,
    "incrementDrugStock",
    ()=>incrementDrugStock,
    "issuePrescriptionTransaction",
    ()=>issuePrescriptionTransaction,
    "subscribeAppointmentsByDate",
    ()=>subscribeAppointmentsByDate,
    "subscribeAppointmentsForPatient",
    ()=>subscribeAppointmentsForPatient,
    "subscribeConsultationsForPatient",
    ()=>subscribeConsultationsForPatient,
    "subscribeDrugs",
    ()=>subscribeDrugs,
    "subscribePatients",
    ()=>subscribePatients,
    "subscribePendingPrescriptions",
    ()=>subscribePendingPrescriptions,
    "updateAppointment",
    ()=>updateAppointment,
    "updatePatient",
    ()=>updatePatient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/utils/idHelpers.js [app-ssr] (ecmascript)");
;
;
;
/* ============================
   Collection reference helpers
   ============================ */ function patientsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients');
}
function appointmentsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments');
}
function drugsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs');
}
function consultationsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations');
}
function prescriptionsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions');
}
function invoicesCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'invoices');
}
function subscribePatients(clinicId, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(patientsCollectionRef(clinicId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
        const items = snap.docs.map((d)=>({
                id: d.id,
                ...d.data()
            }));
        callback(items);
    }, onError);
    return unsub;
}
async function fetchPatientsOnce(clinicId) {
    if (!clinicId) throw new Error('clinicId required');
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(patientsCollectionRef(clinicId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function createOrUpdatePatient(clinicId, patient, createdByEmail = null) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patient || !patient.nic) throw new Error('patient.nic (NIC) required');
    const patientId = String(patient.nic).trim();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients', patientId);
    const now = new Date();
    const payload = {
        ...patient,
        nic: patientId,
        updatedAt: now.toISOString(),
        createdAt: patient.createdAt ?? now.toISOString(),
        createdBy: patient.createdBy ?? createdByEmail ?? null
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
        merge: true
    });
    return {
        id: patientId,
        ...payload
    };
}
async function getPatient(clinicId, patientNic) {
    if (!clinicId) throw new Error('clinicId required');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients', String(patientNic));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(ref);
    if (!snap.exists()) return null;
    return {
        id: snap.id,
        ...snap.data()
    };
}
async function updatePatient(clinicId, patientNic, data) {
    if (!clinicId) throw new Error('clinicId required');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients', String(patientNic));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(ref, {
        ...data,
        updatedAt: new Date().toISOString()
    });
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(ref);
    return {
        id: snap.id,
        ...snap.data()
    };
}
async function createAppointment(clinicId, { patientNic, scheduledAtISO, receptionistEmail = null, notes = '', status = 'confirmed' }) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patientNic) throw new Error('patientNic required');
    const scheduledDate = scheduledAtISO instanceof Date ? scheduledAtISO : new Date(scheduledAtISO);
    if (Number.isNaN(scheduledDate.getTime())) throw new Error('Invalid scheduledAt value');
    const appointmentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateToId"])(scheduledDate);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments', appointmentId);
    const payload = {
        patientNic: String(patientNic).trim(),
        scheduledAt: scheduledDate.toISOString(),
        status,
        receptionistEmail,
        notes,
        createdAt: new Date().toISOString()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
        merge: false
    });
    return {
        id: appointmentId,
        ...payload
    };
}
async function fetchAppointmentsForPatient(clinicId, patientNic) {
    if (!clinicId) throw new Error('clinicId required');
    const coll = appointmentsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const items = snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
    items.sort((a, b)=>(b.scheduledAt || '').localeCompare(a.scheduledAt || ''));
    return items;
}
function subscribeAppointmentsForPatient(clinicId, patientNic, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const coll = appointmentsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
        const items = snap.docs.map((d)=>({
                id: d.id,
                ...d.data()
            }));
        items.sort((a, b)=>(b.scheduledAt || '').localeCompare(a.scheduledAt || ''));
        callback(items);
    }, (err)=>{
        console.error('subscribeAppointmentsForPatient error', err);
        if (onError) onError(err);
    });
    return unsub;
}
async function updateAppointment(clinicId, appointmentId, data) {
    if (!clinicId) throw new Error('clinicId required');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments', String(appointmentId));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(ref, {
        ...data,
        updatedAt: new Date().toISOString()
    });
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(ref);
    return {
        id: snap.id,
        ...snap.data()
    };
}
async function cancelAppointment(clinicId, appointmentId, cancelledByEmail = null) {
    return updateAppointment(clinicId, appointmentId, {
        status: 'cancelled',
        cancelledBy: cancelledByEmail,
        cancelledAt: new Date().toISOString()
    });
}
async function deleteAppointment(clinicId, appointmentId) {
    if (!clinicId) throw new Error('clinicId required');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments', String(appointmentId));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(ref);
    return true;
}
async function fetchAppointmentsByDate(clinicId, date) {
    if (!clinicId) throw new Error('clinicId required');
    const d = date instanceof Date ? date : new Date(date);
    const start = new Date(d);
    start.setHours(0, 0, 0, 0);
    const end = new Date(d);
    end.setHours(23, 59, 59, 999);
    const coll = appointmentsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '>=', start.toISOString()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '<=', end.toISOString()));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const items = snap.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    items.sort((a, b)=>(a.scheduledAt || '').localeCompare(b.scheduledAt || ''));
    return items;
}
function subscribeAppointmentsByDate(clinicId, date, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const d = date instanceof Date ? date : new Date(date);
    const start = new Date(d);
    start.setHours(0, 0, 0, 0);
    const end = new Date(d);
    end.setHours(23, 59, 59, 999);
    const coll = appointmentsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '>=', start.toISOString()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '<=', end.toISOString()));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
        const items = snap.docs.map((dd)=>({
                id: dd.id,
                ...dd.data()
            }));
        items.sort((a, b)=>(a.scheduledAt || '').localeCompare(b.scheduledAt || ''));
        callback(items);
    }, (err)=>{
        console.error('subscribeAppointmentsByDate error', err);
        if (onError) onError(err);
    });
    return unsub;
}
async function createConsultation(clinicId, { patientNic, appointmentId = null, doctorEmail = null, presentComplaint = '', examFindings = '', differentialDiagnosis = '', investigations = '', management = '' } = {}) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patientNic) throw new Error('patientNic required');
    const now = new Date();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateToId"])(now) + '-' + String(patientNic);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations', id);
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(ref, docData, {
        merge: false
    });
    return {
        id,
        ...docData
    };
}
async function fetchConsultationsForPatient(clinicId, patientNic) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patientNic) throw new Error('patientNic required');
    const coll = consultationsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const items = snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
    items.sort((a, b)=>(b.createdAt || '').localeCompare(a.createdAt || ''));
    return items;
}
function subscribeConsultationsForPatient(clinicId, patientNic, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const coll = consultationsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
        const items = snap.docs.map((d)=>({
                id: d.id,
                ...d.data()
            }));
        items.sort((a, b)=>(b.createdAt || '').localeCompare(a.createdAt || ''));
        callback(items);
    }, (err)=>{
        console.error('subscribeConsultationsForPatient error', err);
        if (onError) onError(err);
    });
    return unsub;
}
async function createPrescription(clinicId, { consultationId = null, patientNic, doctorEmail = null, rawManagement = '', items = [] } = {}) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patientNic) throw new Error('patientNic required');
    const now = new Date();
    const prescId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateToId"])(now) + '-' + String(patientNic);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions', prescId);
    // compute subtotal if items provided
    let subtotal = 0;
    const normalizedItems = (Array.isArray(items) ? items : []).map((it)=>{
        const unitPrice = Number(it.unitPrice || 0) || 0;
        const qty = Number(it.qty || 0) || 0;
        const lineTotal = unitPrice * qty;
        subtotal += lineTotal;
        return {
            drugId: it.drugId ?? null,
            drugName: it.drugName ?? it.name ?? '',
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(ref, docData, {
        merge: false
    });
    return {
        id: prescId,
        ...docData
    };
}
function subscribePendingPrescriptions(clinicId, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const coll = prescriptionsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', '==', 'pending'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'asc'));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
        const items = snap.docs.map((d)=>({
                id: d.id,
                ...d.data()
            }));
        callback(items);
    }, (err)=>{
        console.error('subscribePendingPrescriptions error', err);
        if (onError) onError(err);
    });
    return unsub;
}
function subscribeDrugs(clinicId, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const coll = drugsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('name', 'asc'));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
        const items = snap.docs.map((d)=>({
                id: d.id,
                ...d.data()
            }));
        callback(items);
    }, onError);
    return unsub;
}
async function fetchDrugsOnce(clinicId) {
    if (!clinicId) throw new Error('clinicId required');
    const coll = drugsCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('name', 'asc'));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function createOrUpdateDrug(clinicId, drugIdOrName, { name, dose, qtyAvailable = 0, pricePerUnit = 0, updatedBy = null } = {}) {
    if (!clinicId) throw new Error('clinicId required');
    const id = String(drugIdOrName).trim();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', id);
    const payload = {
        name: name ?? id,
        dose: dose ?? '',
        qtyAvailable: Number(qtyAvailable) || 0,
        pricePerUnit: Number(pricePerUnit) || 0,
        updatedAt: new Date().toISOString(),
        updatedBy: updatedBy ?? null
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
        merge: true
    });
    return {
        id,
        ...payload
    };
}
async function decrementDrugStock(clinicId, drugId, decQty = 1) {
    if (!clinicId) throw new Error('clinicId required');
    if (!drugId) throw new Error('drugId required');
    decQty = Number(decQty) || 0;
    if (decQty <= 0) throw new Error('decQty must be > 0');
    const drugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', String(drugId));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
        const snap = await tx.get(drugRef);
        if (!snap.exists()) throw new Error('Drug not found');
        const data = snap.data();
        const current = Number(data.qtyAvailable || 0);
        if (current < decQty) throw new Error(`Insufficient stock for ${data.name || drugId} (need ${decQty}, have ${current})`);
        const newQty = current - decQty;
        tx.update(drugRef, {
            qtyAvailable: newQty,
            updatedAt: new Date().toISOString()
        });
        return newQty;
    });
    return result; // number
}
async function incrementDrugStock(clinicId, drugId, incQty = 1) {
    if (!clinicId) throw new Error('clinicId required');
    if (!drugId) throw new Error('drugId required');
    incQty = Number(incQty) || 0;
    if (incQty <= 0) throw new Error('incQty must be > 0');
    const drugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', String(drugId));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
        const snap = await tx.get(drugRef);
        if (!snap.exists()) throw new Error('Drug not found');
        const data = snap.data();
        const current = Number(data.qtyAvailable || 0);
        const newQty = current + incQty;
        tx.update(drugRef, {
            qtyAvailable: newQty,
            updatedAt: new Date().toISOString()
        });
        return newQty;
    });
    return result;
}
async function issuePrescriptionTransaction(clinicId, prescriptionId, pharmacistEmail, items = []) {
    if (!clinicId) throw new Error('clinicId required');
    if (!prescriptionId) throw new Error('prescriptionId required');
    if (!Array.isArray(items) || items.length === 0) throw new Error('items required');
    const prescRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions', prescriptionId);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
        const prescSnap = await tx.get(prescRef);
        if (!prescSnap.exists()) throw new Error('Prescription not found');
        const presc = prescSnap.data();
        if (presc.status === 'issued') throw new Error('Prescription already issued');
        // Prepare drug refs and read them
        const drugRefs = items.map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', String(i.drugId)));
        const drugSnaps = [];
        for (const r of drugRefs){
            const s = await tx.get(r);
            drugSnaps.push(s);
        }
        // Check availability
        for(let i = 0; i < items.length; i++){
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
        for(let i = 0; i < items.length; i++){
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
        const invoiceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateToId"])(now) + '-' + String(presc.patientNic || 'unknown');
        const invRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'invoices', invoiceId);
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
        for(let i = 0; i < items.length; i++){
            const it = items[i];
            const r = drugRefs[i];
            const snap = drugSnaps[i];
            const current = Number(snap.data().qtyAvailable || 0);
            const newQty = current - Number(it.qty || 0);
            tx.update(r, {
                qtyAvailable: newQty,
                updatedAt: new Date().toISOString()
            });
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
            const consultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations', presc.consultationId);
            const consultSnap = await tx.get(consultRef);
            if (consultSnap.exists()) {
                tx.update(consultRef, {
                    invoiceId
                });
            }
        }
        return {
            invoiceId,
            invoice: invoiceDoc
        };
    });
    return result;
}
async function fetchInvoicesForPatient(clinicId, patientNic) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patientNic) throw new Error('patientNic required');
    const coll = invoicesCollectionRef(clinicId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
} /* ============================
   Exports (already named exports above)
   ============================ */  // Note: all functions are exported as named exports above.
 // No default export.
}),
"[project]/clinic-suite/components/ConsultationSidebar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ConsultationSidebar.js
__turbopack_context__.s([
    "default",
    ()=>ConsultationSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ConsultationSidebar({ clinicId, date = new Date().toISOString().slice(0, 10), onChangeDate = ()=>{}, appointments = [], selectedAppointmentId = null, onSelect = ()=>{} }) {
    const [patientMap, setPatientMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingMap, setLoadingMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // compute unique NICs present in appointments
    const uniqueNics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const s = new Set();
        for (const a of appointments || []){
            if (a && a.patientNic) s.add(String(a.patientNic));
        }
        return Array.from(s);
    }, [
        appointments
    ]);
    // fetch patient docs for those NICs (batch)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        if (!clinicId || uniqueNics.length === 0) {
            setPatientMap({});
            return;
        }
        setLoadingMap(true);
        setError(null);
        (async ()=>{
            try {
                const map = {};
                await Promise.all(uniqueNics.map(async (nic)=>{
                    try {
                        const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPatient"])(clinicId, nic);
                        map[nic] = p ?? null;
                    } catch (err) {
                        map[nic] = null;
                        console.error('getPatient error', nic, err);
                    }
                }));
                if (!mounted) return;
                setPatientMap(map);
            } catch (err) {
                console.error('fetch patientMap failed', err);
                if (mounted) setError(err?.message ?? String(err));
            } finally{
                if (mounted) setLoadingMap(false);
            }
        })();
        return ()=>{
            mounted = false;
        };
    }, [
        clinicId,
        uniqueNics.join('|')
    ]);
    function formatTime(iso) {
        if (!iso) return '';
        try {
            const d = new Date(iso);
            return d.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch  {
            return iso;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-800",
                        children: "Calendar"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: date,
                            onChange: (e)=>onChangeDate(e.target.value),
                            className: "w-full p-2 border rounded"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-slate-100 shadow-sm p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium text-slate-700",
                            children: "Appointments for selected date"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    loadingMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500 py-4",
                        children: "Loading patients..."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-red-600 py-2",
                        children: [
                            "Error: ",
                            String(error)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-[56vh] overflow-auto",
                        children: [
                            appointments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400 p-3",
                                children: "No appointments for this date."
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            appointments.map((appt)=>{
                                const nic = String(appt.patientNic ?? '').trim();
                                const patient = patientMap[nic];
                                const firstName = patient?.firstName || patient?.givenName || patient?.name?.split?.(' ')?.[0] || '';
                                const lastName = patient?.lastName || patient?.familyName || patient?.name && patient.name.split(' ').slice(1).join(' ') || '';
                                const gender = patient && patient.gender ? String(patient.gender) : patient && patient.sex ? String(patient.sex) : '';
                                const titleLine = firstName || lastName || gender ? `${[
                                    firstName,
                                    lastName
                                ].filter(Boolean).join(' ')}${gender ? `, ${gender}` : ''}` : nic;
                                const isSelected = selectedAppointmentId && selectedAppointmentId === appt.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelect(appt),
                                    className: `w-full text-left p-3 rounded-lg border ${isSelected ? 'border-indigo-200 bg-indigo-50' : 'border-transparent hover:border-slate-200'} `,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-semibold text-slate-900",
                                                        children: patient ? titleLine : nic
                                                    }, void 0, false, {
                                                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500 mt-0.5",
                                                        children: [
                                                            nic,
                                                            " • ",
                                                            appt.status || 'confirmed'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500 ml-3",
                                                children: formatTime(appt.scheduledAt)
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                }, appt.id, false, {
                                    fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/ConsultationSidebar.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/clinic-suite/components/NewConsultationForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/NewConsultationForm.js
__turbopack_context__.s([
    "default",
    ()=>NewConsultationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function NewConsultationForm({ patient = null, patientNic = null, appointmentId = null, clinicId, doctorEmail, onSaved = ()=>{} }) {
    const resolvedNic = patient && patient.id || patientNic || '';
    const [presentComplaint, setPresentComplaint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [examFindings, setExamFindings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [differentialDiagnosis, setDifferentialDiagnosis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [investigations, setInvestigations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [management, setManagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // no-op
    }, [
        patient
    ]);
    // Parse management free-text into structured drug items based on the user-specified syntax:
    // <drug name><space><dosage><space><frequency><space>"x"<space><duration in number><space>"days"
    // Frequencies allowed (case-insensitive): mane, nocte, daily, bd, tds, qds
    function parseManagementLines(rawText) {
        const lines = (rawText || '').split('\n').map((l)=>l.trim()).filter(Boolean);
        const items = [];
        const re = /^(.+?)\s+(\S+)\s+(mane|nocte|daily|bd|tds|qds)\s+x\s+(\d+)\s+days$/i;
        for (const line of lines){
            const m = line.match(re);
            if (!m) {
                items.push({
                    raw: line
                });
            } else {
                const [, name, dose, freq, dur] = m;
                items.push({
                    drugName: name.trim(),
                    dose: dose.trim(),
                    frequency: freq.toLowerCase(),
                    durationDays: Number(dur)
                });
            }
        }
        return items;
    }
    // Create printable HTML for prescription
    function buildPrescriptionHtml({ clinicId, patientObj, doctorEmail, items, now }) {
        const clinicName = clinicId || 'Clinic';
        const patientName = `${patientObj.firstName || ''} ${patientObj.lastName || ''}`.trim() || '—';
        const dob = patientObj.dob || '';
        const ageStr = (()=>{
            if (!dob) return '—';
            try {
                const b = new Date(dob);
                const diff = Date.now() - b.getTime();
                const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
                return `${years} y`;
            } catch  {
                return '—';
            }
        })();
        const gender = patientObj.gender || '—';
        const escaped = (s)=>{
            if (!s) return '';
            return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
        };
        return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Prescription - ${escaped(patientName)}</title>
  <style>
    @page { size: A5; margin: 12mm; }
    html,body { height: 100%; margin:0; padding:0; }
    body { font-family: Arial, Helvetica, sans-serif; color: #111; font-size: 12px; padding: 6mm; box-sizing: border-box; }
    .header { text-align: center; margin-bottom: 6px; }
    .clinic { font-weight: 700; font-size: 14px; }
    .meta { font-size: 11px; color: #333; margin-bottom: 8px; }
    .section { margin-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 6px; }
    th, td { border-bottom: 1px solid #ddd; padding: 6px 8px; text-align: left; font-size: 11px; }
    th { background: #fafafa; font-weight: 700; }
    .footer { text-align: center; margin-top: 12px; font-size: 11px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="clinic">${escaped(clinicName)}</div>
    <div class="meta">Prescription</div>
  </div>

  <div class="section">
    <div><strong>Patient:</strong> ${escaped(patientName)}</div>
    <div><strong>NIC:</strong> ${escaped(patientObj.id || '')}</div>
    <div><strong>Age/Gender:</strong> ${escaped(ageStr)} / ${escaped(gender)}</div>
    <div><strong>Date:</strong> ${escaped(now.toLocaleString())}</div>
  </div>

  <div class="section">
    <table>
      <thead>
        <tr>
          <th style="width:40%;">Drug</th>
          <th style="width:20%;">Dose</th>
          <th style="width:20%;">Frequency</th>
          <th style="width:20%;">Duration</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((i)=>{
            if (i.raw) {
                return `<tr><td colspan="4">${escaped(i.raw)}</td></tr>`;
            }
            return `<tr>
            <td>${escaped(i.drugName)}</td>
            <td>${escaped(i.dose)}</td>
            <td>${escaped(i.frequency)}</td>
            <td>${escaped(String(i.durationDays))} days</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div class="footer">Doctor: ${escaped(doctorEmail || '—')}</div>
</body>
</html>`;
    }
    // Print via hidden iframe to avoid popup blocks
    function printPrescription() {
        if (!management || !doctorEmail) {
            alert('Cannot print — ensure management text and doctor email are present.');
            return;
        }
        const patientObj = patient || {
            id: resolvedNic,
            firstName: '',
            lastName: '',
            dob: '',
            gender: ''
        };
        const items = parseManagementLines(management);
        const now = new Date();
        const html = buildPrescriptionHtml({
            clinicId,
            patientObj,
            doctorEmail,
            items,
            now
        });
        try {
            // create hidden iframe
            const iframe = document.createElement('iframe');
            iframe.style.position = 'fixed';
            iframe.style.right = '0';
            iframe.style.bottom = '0';
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.style.border = '0';
            iframe.style.visibility = 'hidden';
            document.body.appendChild(iframe);
            const iframeDoc = iframe.contentWindow || iframe.contentDocument;
            const doc = iframeDoc.document ? iframeDoc.document : iframeDoc;
            doc.open();
            doc.write(html);
            doc.close();
            // Some browsers need a short delay to render
            const printAndCleanup = ()=>{
                try {
                    // call print
                    iframe.contentWindow.focus();
                    // The print() must be directly triggered by user gesture to avoid blocking; since this function is called from click it's fine.
                    const printed = iframe.contentWindow.print();
                    // cleanup after small timeout (gives print dialog time to open)
                    setTimeout(()=>{
                        try {
                            document.body.removeChild(iframe);
                        } catch (_) {}
                    }, 500);
                } catch (err) {
                    try {
                        document.body.removeChild(iframe);
                    } catch (_) {}
                    console.error('Print failed', err);
                    alert('Printing failed. Please allow the browser to print or try saving as PDF from the print dialog.');
                }
            };
            // If iframe content may take a moment to load resources, wait until ready
            // but avoid long waits; do a short delay
            setTimeout(printAndCleanup, 300);
        } catch (err) {
            console.error('printPrescription error', err);
            alert('Unable to print. Please check browser settings.');
        }
    }
    // Save consultation and also create a prescription doc
    async function handleSave(e) {
        e?.preventDefault();
        setError(null);
        if (!clinicId) {
            setError('Missing clinic context (clinicId).');
            return;
        }
        if (!resolvedNic) {
            setError('Missing patient NIC.');
            return;
        }
        setSaving(true);
        try {
            const consultPayload = {
                patientNic: resolvedNic,
                appointmentId: appointmentId ?? null,
                doctorEmail: doctorEmail ?? null,
                presentComplaint,
                examFindings,
                differentialDiagnosis,
                investigations,
                management
            };
            // create consultation
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConsultation"])(clinicId, consultPayload);
            // create prescription right after consultation
            const parsedItems = parseManagementLines(management).map((it)=>{
                if (it.raw) return {
                    raw: it.raw
                };
                return {
                    drugName: it.drugName,
                    dose: it.dose,
                    frequency: it.frequency,
                    durationDays: it.durationDays
                };
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPrescription"])(clinicId, {
                consultationId: created.id,
                patientNic: resolvedNic,
                doctorEmail: doctorEmail ?? null,
                rawManagement: management || '',
                items: parsedItems
            });
            onSaved && onSaved(created);
            alert('Consultation saved and prescription created.');
        } catch (err) {
            console.error(err);
            setError(err.message || String(err));
        } finally{
            setSaving(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSave,
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs text-slate-500",
                        children: "Presenting complaint"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: presentComplaint,
                        onChange: (e)=>setPresentComplaint(e.target.value),
                        className: "w-full p-2 border rounded",
                        rows: "3"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs text-slate-500",
                        children: "Examination findings"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: examFindings,
                        onChange: (e)=>setExamFindings(e.target.value),
                        className: "w-full p-2 border rounded",
                        rows: "3"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Differential diagnosis"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: differentialDiagnosis,
                                onChange: (e)=>setDifferentialDiagnosis(e.target.value),
                                className: "w-full p-2 border rounded",
                                rows: "2"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-slate-500",
                                children: "Investigations"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: investigations,
                                onChange: (e)=>setInvestigations(e.target.value),
                                className: "w-full p-2 border rounded",
                                rows: "2"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs text-slate-500",
                        children: [
                            "Management (one drug per line) ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400",
                                children: "(format: <drug> <dose> <frequency> x <days> — e.g. Paracetamol 500mg bd x 5 days)"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                                lineNumber: 280,
                                columnNumber: 82
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: management,
                        onChange: (e)=>setManagement(e.target.value),
                        className: "w-full p-2 border rounded",
                        rows: "5",
                        placeholder: `Paracetamol 500mg bd x 5 days\nAmoxicillin 500mg tds x 7 days`
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                lineNumber: 284,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: printPrescription,
                            disabled: !management || !doctorEmail,
                            className: "px-3 py-2 rounded-md border text-sm",
                            children: "Print Prescription"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: saving,
                            className: "px-3 py-2 rounded-md bg-indigo-600 text-white",
                            children: saving ? 'Saving...' : 'Save Consultation'
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/NewConsultationForm.js",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
}),
"[project]/clinic-suite/components/ConsultationDetailCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ConsultationDetailCard.js
__turbopack_context__.s([
    "default",
    ()=>ConsultationDetailCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewConsultationForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/NewConsultationForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ConsultationDetailCard({ patient, appointment, clinicId, doctorEmail }) {
    const [consultations, setConsultations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedConsult, setSelectedConsult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            if (!patient || !clinicId) {
                setConsultations([]);
                return;
            }
            try {
                // patient.id is expected to be the NIC (per your design)
                const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchConsultationsForPatient"])(clinicId, patient.id);
                setConsultations(list);
            } catch (err) {
                console.error(err);
                setError(err.message || String(err));
            }
        })();
    }, [
        patient,
        clinicId
    ]);
    function formatDateShort(iso) {
        if (!iso) return '-';
        try {
            const d = new Date(iso);
            // e.g., 22 Nov 1980
            return d.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch  {
            return iso;
        }
    }
    const firstName = patient?.firstName ?? patient?.givenName ?? '';
    const lastName = patient?.lastName ?? patient?.familyName ?? '';
    // allergies may be stored as array or string
    function renderAllergies(allergyField) {
        if (!allergyField) return '-';
        if (Array.isArray(allergyField)) {
            return allergyField.length ? allergyField.join(', ') : '-';
        }
        const s = String(allergyField).trim();
        return s.length ? s : '-';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold",
                                    children: patient ? `${firstName} ${lastName}`.trim() : 'No patient selected'
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500 mt-1",
                                    children: [
                                        "NIC: ",
                                        patient?.id ?? '-'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-sm text-slate-600 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "DOB:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 66,
                                                    columnNumber: 20
                                                }, this),
                                                " ",
                                                patient?.dob ? formatDateShort(patient.dob) : '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Gender:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 67,
                                                    columnNumber: 20
                                                }, this),
                                                " ",
                                                patient?.gender ?? patient?.sex ?? '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Allergies:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 68,
                                                    columnNumber: 20
                                                }, this),
                                                " ",
                                                renderAllergies(patient?.allergies)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-sm text-slate-600",
                        children: patient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-sm mb-1",
                                    children: "Contact Details:"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 77,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        patient.phone ?? '-'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 78,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        patient.address ?? '-'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Select a patient or appointment to begin."
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-slate-800",
                        children: "Appointment details"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-600 mt-2",
                        children: appointment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Time:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 89,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        new Date(appointment.scheduledAt).toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 90,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        appointment.status
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Notes:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 91,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        appointment.notes || '-'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-400",
                            children: "No appointment selected."
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-slate-800",
                        children: "Consultation"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewConsultationForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            patient: patient,
                            appointmentId: appointment?.id,
                            clinicId: clinicId,
                            doctorEmail: doctorEmail,
                            onSaved: (created)=>{
                                (async ()=>{
                                    try {
                                        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchConsultationsForPatient"])(clinicId, patient.id);
                                        setConsultations(list);
                                    } catch (err) {
                                        console.error(err);
                                    }
                                })();
                            }
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium text-slate-800",
                        children: "Previous Consultations"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-2",
                        children: [
                            consultations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400",
                                children: "No consultations yet"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                lineNumber: 122,
                                columnNumber: 42
                            }, this),
                            consultations.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-sm",
                                                    children: new Date(c.createdAt).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: c.id
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-600 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Complaint:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 129,
                                                    columnNumber: 60
                                                }, this),
                                                " ",
                                                c.presentComplaint || '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-600 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Management:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                                    lineNumber: 130,
                                                    columnNumber: 60
                                                }, this),
                                                " ",
                                                c.management || '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/ConsultationDetailCard.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/clinic-suite/app/consultation/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/consultation/page.js
__turbopack_context__.s([
    "default",
    ()=>ConsultationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/AuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$ConsultationSidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/ConsultationSidebar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$ConsultationDetailCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/ConsultationDetailCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ConsultationPage() {
    const { user, claims, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Date().toISOString().slice(0, 10));
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAppointment, setSelectedAppointment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPatient, setSelectedPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Client-side authorization: only allow role === 'doctor' in clinic to see this page
    const isAuthReady = !loading;
    const isDoctor = Boolean(claims?.role === 'doctor' && claims?.clinicId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // if user is not a doctor, do not subscribe to any data
        if (!isAuthReady || !isDoctor) return;
        setError(null);
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeAppointmentsByDate"])(claims.clinicId, new Date(date), (items)=>{
            setAppointments(items);
        }, (err)=>setError(err.message || String(err)));
        return ()=>{
            if (typeof unsub === 'function') unsub();
        };
    }, [
        isAuthReady,
        isDoctor,
        claims?.clinicId,
        date
    ]);
    // when user selects an appointment, load the patient
    async function handleSelectAppointment(appt) {
        setError(null);
        setSelectedAppointment(appt || null);
        if (!appt || !appt.patientNic) {
            setSelectedPatient(null);
            return;
        }
        try {
            // fetch patient (returns null if not found)
            const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPatient"])(claims.clinicId, appt.patientNic);
            if (!p) {
                setError(`Patient ${appt.patientNic} not found`);
                setSelectedPatient(null);
                return;
            }
            setSelectedPatient(p);
        } catch (err) {
            console.error('Failed to load patient', err);
            setError(err.message || String(err));
            setSelectedPatient(null);
        }
    }
    // Simple helpers for display states
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: "Loading authentication..."
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/consultation/page.js",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/consultation/page.js",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-lg p-6 bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Sign in required"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: "You must be signed in to access the Consultation area."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "px-3 py-2 bg-indigo-600 text-white rounded",
                            children: "Go to login"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/consultation/page.js",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/consultation/page.js",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/consultation/page.js",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    // User is signed in but not a doctor (or missing clinicId)
    if (!isDoctor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl w-full p-6 bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-slate-800",
                        children: "Access denied"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: "Your account does not have permission to access the Consultation area."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-sm text-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Role:"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                                        lineNumber: 98,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    claims?.role ?? '—'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/app/consultation/page.js",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clinic:"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                                        lineNumber: 99,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    claims?.clinicId ?? '—'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/app/consultation/page.js",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/',
                            className: "px-3 py-2 rounded border",
                            children: "Back to home"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/consultation/page.js",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-xs text-slate-400",
                        children: [
                            "Note: Consultations are restricted to users with role ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "doctor"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/consultation/page.js",
                                lineNumber: 107,
                                columnNumber: 67
                            }, this),
                            ". Contact your administrator to get access."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/consultation/page.js",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/consultation/page.js",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    // Authorized doctor: render the consultation UI
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-56px)] bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$ConsultationSidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            clinicId: claims.clinicId,
                            appointments: appointments,
                            selectedAppointmentId: selectedAppointment?.id,
                            onSelect: handleSelectAppointment
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/consultation/page.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "lg:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$ConsultationDetailCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            patient: selectedPatient,
                            appointment: selectedAppointment,
                            clinicId: claims?.clinicId,
                            doctorEmail: user?.email
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/consultation/page.js",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-white shadow-sm p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm text-slate-500",
                                        children: "Quick actions"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedAppointment(null);
                                                    setSelectedPatient(null);
                                                },
                                                className: "text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700",
                                                children: "Clear selection"
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/app/consultation/page.js",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.location.reload(),
                                                className: "text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700",
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/app/consultation/page.js",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/app/consultation/page.js",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/consultation/page.js",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/consultation/page.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/consultation/page.js",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/app/consultation/page.js",
                    lineNumber: 151,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/consultation/page.js",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/app/consultation/page.js",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=clinic-suite_348bd426._.js.map