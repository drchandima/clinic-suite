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
"[project]/clinic-suite/components/PharmacySidebar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PharmacySidebar.js
__turbopack_context__.s([
    "default",
    ()=>PharmacySidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function PharmacySidebar({ clinicId, prescriptions = [], onSelect = ()=>{}, selectedId = null, selectedPrescription = null }) {
    const [patient, setPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingPatient, setLoadingPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [patientError, setPatientError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        setPatient(null);
        setPatientError(null);
        if (!clinicId || !selectedPrescription?.patientNic) return undefined;
        setLoadingPatient(true);
        (async ()=>{
            try {
                const nic = String(selectedPrescription.patientNic);
                const p = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPatient"])(clinicId, nic);
                if (!mounted) return;
                setPatient(p ?? null);
            } catch (err) {
                if (!mounted) return;
                console.error('getPatient failed', err);
                setPatientError(err?.message ?? String(err));
                setPatient(null);
            } finally{
                if (!mounted) return;
                setLoadingPatient(false);
            }
        })();
        return ()=>{
            mounted = false;
        };
    }, [
        clinicId,
        selectedPrescription?.patientNic
    ]);
    const looksLikeNic = (s)=>typeof s === 'string' && /^\s*\d{4,12}[vVxX]?\s*$/.test(String(s).replace(/\s+/g, ''));
    const buildPreview = (presc, patientDoc)=>{
        const preview = {
            patientName: '—',
            nic: '—',
            gender: '—',
            doctorEmail: '—',
            rawManagement: ''
        };
        if (!presc) return preview;
        const nicVal = presc.patientNic ?? (patientDoc && patientDoc.nic) ?? '';
        preview.nic = nicVal || '—';
        // prefer patient document for name
        const pFirst = (patientDoc && (patientDoc.firstName ?? patientDoc.givenName)) ?? '';
        const pLast = (patientDoc && (patientDoc.lastName ?? patientDoc.familyName)) ?? '';
        // fallback name sources from prescription if patient doc not available
        const rawNameFromPresc = (presc.patientName ?? presc.patientFullName ?? presc.patient ?? '') || '';
        let patientName = '';
        if (pFirst || pLast) patientName = [
            pFirst,
            pLast
        ].filter(Boolean).join(' ');
        else if (rawNameFromPresc && !looksLikeNic(String(rawNameFromPresc))) patientName = String(rawNameFromPresc).trim();
        if (!patientName) patientName = preview.nic;
        preview.patientName = patientName || '—';
        // gender MUST come from patient document if available
        const genderFromPatient = patientDoc?.gender ?? patientDoc?.sex ?? null;
        preview.gender = (genderFromPatient ?? presc.gender ?? presc.patientGender ?? '—') || '—';
        preview.doctorEmail = presc.doctorEmail ?? '—';
        // rawManagement: show exactly as stored in the DB (or empty string)
        preview.rawManagement = presc.rawManagement ?? '';
        return preview;
    };
    const preview = buildPreview(selectedPrescription, patient);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-800",
                        children: "Prescriptions"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500 mt-1",
                        children: "Pending prescriptions from doctors"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-2 max-h-[48vh] overflow-auto",
                        children: [
                            prescriptions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400",
                                children: "No pending prescriptions"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                lineNumber: 103,
                                columnNumber: 42
                            }, this),
                            prescriptions.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelect(p),
                                    className: `w-full text-left p-3 border rounded transition-colors duration-100 ${selectedId === p.id ? 'bg-indigo-50 ring-1 ring-indigo-200' : 'hover:bg-slate-50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium",
                                                    children: p.patientNic ?? 'Unknown'
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: p.createdAt ? new Date(p.createdAt).toLocaleString() : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: [
                                                "Doctor: ",
                                                p.doctorEmail ?? '-'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, p.id, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-800",
                        children: "Selected prescription"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: selectedPrescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Patient:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                            lineNumber: 127,
                                            columnNumber: 40
                                        }, this),
                                        " ",
                                        preview.patientName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "NIC:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                            lineNumber: 128,
                                            columnNumber: 40
                                        }, this),
                                        " ",
                                        preview.nic
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Gender:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                            lineNumber: 129,
                                            columnNumber: 40
                                        }, this),
                                        " ",
                                        preview.gender
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Doctor:"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                            lineNumber: 130,
                                            columnNumber: 40
                                        }, this),
                                        " ",
                                        preview.doctorEmail
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-sm font-medium",
                                    children: "Drug list:"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                preview.rawManagement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 whitespace-pre-wrap text-sm text-slate-700",
                                    children: preview.rawManagement
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-slate-400",
                                    children: "No drugs listed"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                patientError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-red-600",
                                    children: [
                                        "Patient lookup failed: ",
                                        String(patientError)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                                    lineNumber: 139,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-400",
                            children: "Select a prescription"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/PharmacySidebar.js",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/clinic-suite/components/PharmacyCenter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PharmacyCenter.js
__turbopack_context__.s([
    "default",
    ()=>PharmacyCenter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function PharmacyCenter({ clinicId, drugs = [], prescription = null, pharmacistEmail }) {
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [qtyMap, setQtyMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({}); // drugId -> qty (input)
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // invoice items: { drugId, drugName, dose, qty, unitPrice, lineTotal }
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const term = (q || '').trim().toLowerCase();
        if (!term) return drugs;
        return drugs.filter((d)=>(d.name || '').toLowerCase().includes(term) || (d.dose || '').toLowerCase().includes(term));
    }, [
        q,
        drugs
    ]);
    function setQty(drugId, val) {
        const n = Number(val || 0);
        setQtyMap((prev)=>({
                ...prev,
                [drugId]: n
            }));
    }
    async function handleAdd(drug) {
        const drugId = drug.id;
        const qty = Number(qtyMap[drugId] || 0);
        if (!qty || qty <= 0) {
            alert('Enter a valid quantity (>0)');
            return;
        }
        if (!clinicId) {
            alert('Missing clinic context');
            return;
        }
        setBusy(true);
        setMsg(null);
        try {
            // decrement stock atomically
            const newQty = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementDrugStock"])(clinicId, drugId, qty);
            // add to cart (merge if exists)
            const unitPrice = Number(drug.pricePerUnit || 0);
            setCart((prev)=>{
                const existing = prev.find((p)=>p.drugId === drugId);
                if (existing) {
                    return prev.map((p)=>p.drugId === drugId ? {
                            ...p,
                            qty: p.qty + qty,
                            lineTotal: (p.qty + qty) * p.unitPrice
                        } : p);
                }
                return [
                    ...prev,
                    {
                        drugId,
                        drugName: drug.name,
                        dose: drug.dose || '',
                        qty,
                        unitPrice,
                        lineTotal: unitPrice * qty
                    }
                ];
            });
            setMsg({
                type: 'success',
                text: `Added ${qty} x ${drug.name}. New stock: ${newQty}`
            });
            setQtyMap((prev)=>({
                    ...prev,
                    [drugId]: 0
                }));
        } catch (err) {
            console.error(err);
            setMsg({
                type: 'error',
                text: err?.message || String(err)
            });
        } finally{
            setBusy(false);
        }
    }
    // update quantity in cart (adjust stock for difference)
    async function updateCartQty(drugId, newQty) {
        newQty = Number(newQty || 0);
        const item = cart.find((c)=>c.drugId === drugId);
        if (!item) return;
        const oldQty = Number(item.qty || 0);
        if (newQty === oldQty) return;
        if (newQty <= 0) {
            // same as removing the item
            return removeFromCart(drugId);
        }
        const delta = newQty - oldQty; // positive => need to decrement stock, negative => increment stock
        setBusy(true);
        setMsg(null);
        try {
            if (delta > 0) {
                // need to decrement additional stocks
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrementDrugStock"])(clinicId, drugId, delta);
            } else if (delta < 0) {
                // return stock to inventory
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementDrugStock"])(clinicId, drugId, Math.abs(delta));
            }
            // update cart item
            setCart((prev)=>prev.map((p)=>p.drugId === drugId ? {
                        ...p,
                        qty: newQty,
                        lineTotal: newQty * p.unitPrice
                    } : p));
            setMsg({
                type: 'success',
                text: `Updated ${item.drugName} quantity to ${newQty}.`
            });
        } catch (err) {
            console.error(err);
            setMsg({
                type: 'error',
                text: err?.message || String(err)
            });
        } finally{
            setBusy(false);
        }
    }
    // remove item and restock its qty
    async function removeFromCart(drugId) {
        const item = cart.find((c)=>c.drugId === drugId);
        if (!item) return;
        if (!confirm(`Remove ${item.qty} x ${item.drugName} from invoice and restock?`)) return;
        setBusy(true);
        setMsg(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementDrugStock"])(clinicId, drugId, item.qty);
            setCart((prev)=>prev.filter((p)=>p.drugId !== drugId));
            setMsg({
                type: 'success',
                text: `Removed ${item.drugName} and restored ${item.qty} to stock.`
            });
        } catch (err) {
            console.error(err);
            setMsg({
                type: 'error',
                text: err?.message || String(err)
            });
        } finally{
            setBusy(false);
        }
    }
    function computeTotal() {
        return cart.reduce((s, it)=>s + (Number(it.lineTotal) || 0), 0);
    }
    // Print invoice (A5) using hidden iframe (like prescription)
    function printInvoice() {
        if (cart.length === 0) {
            alert('Invoice is empty.');
            return;
        }
        const now = new Date();
        const clinicName = clinicId || 'Clinic';
        const patientName = prescription?.patientNic ?? '-';
        const docHtml = buildInvoiceHtml({
            clinicName,
            patientName,
            cart,
            pharmacistEmail,
            now
        });
        // create hidden iframe and print
        try {
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
            doc.write(docHtml);
            doc.close();
            setTimeout(()=>{
                try {
                    iframe.contentWindow.focus();
                    iframe.contentWindow.print();
                } catch (err) {
                    console.error('Print failed', err);
                    alert('Printing failed. Try browser print dialog or allow popups.');
                } finally{
                    setTimeout(()=>{
                        try {
                            document.body.removeChild(iframe);
                        } catch (_) {}
                    }, 500);
                }
            }, 300);
        } catch (err) {
            console.error('printInvoice error', err);
            alert('Unable to print. Check browser settings.');
        }
    }
    function buildInvoiceHtml({ clinicName, patientName, cart, pharmacistEmail, now }) {
        const escaped = (s)=>{
            if (s === null || s === undefined) return '';
            return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
        };
        const rows = cart.map((it)=>`
      <tr>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;">${escaped(it.drugName)}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;">${escaped(it.dose)}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;text-align:right;">${escaped(String(it.qty))}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;text-align:right;">${escaped(Number(it.unitPrice).toFixed(2))}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #ddd;text-align:right;">${escaped(Number(it.lineTotal).toFixed(2))}</td>
      </tr>
    `).join('');
        const total = computeTotal().toFixed(2);
        return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Invoice - ${escaped(patientName)}</title>
  <style>
    @page { size: A5; margin: 12mm; }
    body { font-family: Arial, Helvetica, sans-serif; color: #111; font-size: 12px; margin:0; padding:8mm; box-sizing:border-box; }
    .header { text-align:center; margin-bottom:8px; }
    .clinic { font-weight:700; font-size:14px; }
    table { width:100%; border-collapse:collapse; margin-top:6px; }
    th { text-align:left; padding:6px 8px; border-bottom:1px solid #ddd; font-size:12px; }
    td { font-size:12px; }
    .total { text-align:right; font-weight:700; margin-top:8px; }
    .footer { text-align:center; margin-top:12px; font-size:11px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="clinic">${escaped(clinicName)}</div>
    <div class="meta">Drug Invoice</div>
  </div>

  <div>
    <div><strong>Patient:</strong> ${escaped(patientName)}</div>
    <div><strong>Date:</strong> ${escaped(now.toLocaleString())}</div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:40%;">Drug</th>
        <th style="width:20%;">Dose</th>
        <th style="width:10%;">Qty</th>
        <th style="width:15%;text-align:right;">Unit</th>
        <th style="width:15%;text-align:right;">Total</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>

  <div class="total">TOTAL: LKR ${escaped(total)}</div>

  <div class="footer">Pharmacist: ${escaped(pharmacistEmail || '')}</div>
</body>
</html>`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-slate-800",
                                        children: "Drug stock"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Search and add to invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: q,
                                    onChange: (e)=>setQ(e.target.value),
                                    placeholder: "Search by name or dose",
                                    className: "p-2 border rounded"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 max-h-56 overflow-auto",
                        children: [
                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400",
                                children: "No drugs found"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 251,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: filtered.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2 border rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: [
                                                            d.name,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate-400",
                                                                children: [
                                                                    "(",
                                                                    d.dose,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                                lineNumber: 256,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500",
                                                        children: [
                                                            "Qty: ",
                                                            d.qtyAvailable ?? 0,
                                                            " • LKR ",
                                                            Number(d.pricePerUnit || 0).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "1",
                                                        value: qtyMap[d.id] || '',
                                                        onChange: (e)=>setQty(d.id, e.target.value),
                                                        className: "w-20 p-1 border rounded",
                                                        placeholder: "qty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: busy,
                                                        onClick: ()=>handleAdd(d),
                                                        className: "px-3 py-1 rounded border text-sm",
                                                        children: "Add"
                                                    }, void 0, false, {
                                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, d.id, true, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-slate-800",
                                        children: "Drug Invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500",
                                        children: "Items added will reduce stock immediately"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCart([]);
                                        setMsg(null);
                                    },
                                    className: "px-2 py-1 rounded border text-sm",
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            cart.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400",
                                children: "No items in invoice"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 292,
                                columnNumber: 33
                            }, this),
                            cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-2 border rounded mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: item.drugName
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: item.dose
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    value: item.qty,
                                                    onChange: (e)=>updateCartQty(item.drugId, Number(e.target.value || 0)),
                                                    className: "w-20 p-1 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm w-28 text-right",
                                                    children: [
                                                        "LKR ",
                                                        Number(item.unitPrice).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm w-36 text-right",
                                                    children: [
                                                        "LKR ",
                                                        Number(item.lineTotal).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeFromCart(item.drugId),
                                                    className: "px-2 py-1 rounded border text-sm",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, item.drugId, true, {
                                    fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium",
                                        children: [
                                            "Total: LKR ",
                                            computeTotal().toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: cart.length === 0,
                                            onClick: printInvoice,
                                            className: "px-3 py-2 rounded bg-indigo-600 text-white",
                                            children: "Print Invoice"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-3 p-2 rounded ${msg.type === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`,
                                children: msg.text
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/PharmacyCenter.js",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
}),
"[project]/clinic-suite/components/PharmacyQuickActions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PharmacyQuickActions.js
__turbopack_context__.s([
    "default",
    ()=>PharmacyQuickActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/AuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PharmacyQuickActions({ clinicId, refresh = ()=>{} }) {
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { claims, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    async function seedSampleDrugs() {
        if (loading) {
            alert('Auth still loading — try again in a moment.');
            return;
        }
        if (!clinicId) {
            alert('Missing clinic context (clinicId).');
            return;
        }
        // restrict to pharmacist/admin to reduce permission failures
        const role = claims?.role;
        if (!role || ![
            'pharmacist',
            'admin'
        ].includes(role)) {
            if (!confirm('You are not a pharmacist/admin. Attempt to seed anyway?')) return;
        }
        if (!confirm('Create 5 sample drugs (1000 qty each)? This will create or update the drug docs.')) return;
        setBusy(true);
        try {
            const sample = [
                {
                    id: 'paracetamol_500mg',
                    name: 'Paracetamol',
                    dose: '500mg',
                    qtyAvailable: 1000,
                    pricePerUnit: 5
                },
                {
                    id: 'omeprazole_20mg',
                    name: 'Omeprazole',
                    dose: '20mg',
                    qtyAvailable: 1000,
                    pricePerUnit: 30
                },
                {
                    id: 'domperidone_10mg',
                    name: 'Domperidone',
                    dose: '10mg',
                    qtyAvailable: 1000,
                    pricePerUnit: 8
                },
                {
                    id: 'cetirizine_10mg',
                    name: 'Cetirizine',
                    dose: '10mg',
                    qtyAvailable: 1000,
                    pricePerUnit: 6
                },
                {
                    id: 'pirion_4mg',
                    name: 'Pirion',
                    dose: '4mg',
                    qtyAvailable: 1000,
                    pricePerUnit: 12
                }
            ];
            for (const s of sample){
                // createOrUpdateDrug will set/merge the document
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOrUpdateDrug"])(clinicId, s.id, {
                    name: s.name,
                    dose: s.dose,
                    qtyAvailable: s.qtyAvailable,
                    pricePerUnit: s.pricePerUnit,
                    updatedBy: claims?.email ?? null
                });
            }
            alert('Sample drugs created/updated successfully.');
            refresh();
        } catch (err) {
            console.error('Seeding failed', err);
            alert('Seeding failed: ' + (err?.message || String(err)));
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-white p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-medium text-slate-800",
                children: "Quick actions"
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/PharmacyQuickActions.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: seedSampleDrugs,
                        disabled: busy,
                        className: `px-3 py-2 rounded border text-sm ${busy ? 'opacity-60 cursor-not-allowed' : ''}`,
                        children: busy ? 'Seeding...' : 'Seed sample drugs (5 x 1000)'
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PharmacyQuickActions.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "px-3 py-2 rounded border text-sm",
                        children: "Refresh page"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PharmacyQuickActions.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PharmacyQuickActions.js",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/PharmacyQuickActions.js",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/clinic-suite/app/pharmacy/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pharmacy/page.js
__turbopack_context__.s([
    "default",
    ()=>PharmacyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/AuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PharmacySidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/PharmacySidebar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PharmacyCenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/PharmacyCenter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PharmacyQuickActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/PharmacyQuickActions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function PharmacyPage() {
    // --- hooks first ---
    const { user, claims, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [prescriptions, setPrescriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drugs, setDrugs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPrescription, setSelectedPrescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clinicId = claims?.clinicId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading || !clinicId) return;
        setError(null);
        const unsub1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribePendingPrescriptions"])(clinicId, (items)=>setPrescriptions(items), (err)=>setError(err?.message ?? String(err)));
        const unsub2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeDrugs"])(clinicId, (items)=>setDrugs(items), (err)=>setError(err?.message ?? String(err)));
        return ()=>{
            try {
                unsub1?.();
            } catch (_) {}
            try {
                unsub2?.();
            } catch (_) {}
        };
    }, [
        loading,
        clinicId
    ]);
    // AUTH GUARD (after hooks)
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: "Loading authentication..."
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
            lineNumber: 46,
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
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: "You must be signed in to access the Pharmacy area."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "px-3 py-2 bg-indigo-600 text-white rounded",
                            children: "Go to login"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    // Allow pharmacist, admin and doctor to access pharmacy.
    if (!clinicId || ![
        'pharmacist',
        'admin',
        'doctor'
    ].includes(claims.role)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl w-full p-6 bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-slate-800",
                        children: "Access denied"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: "Your account does not have permission to access the Pharmacy area."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 72,
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
                                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                        lineNumber: 75,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    claims?.role ?? '—'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clinic:"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                        lineNumber: 76,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    claims?.clinicId ?? '—'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/',
                            className: "px-3 py-2 rounded border",
                            children: "Back to home"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-xs text-slate-400",
                        children: [
                            "Note: Pharmacy pages are restricted to users with role ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "pharmacist"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                lineNumber: 84,
                                columnNumber: 68
                            }, this),
                            " or ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: "admin"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                lineNumber: 84,
                                columnNumber: 95
                            }, this),
                            ". Contact your administrator to get access."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-56px)] bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PharmacySidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            prescriptions: prescriptions,
                            selectedId: selectedPrescription?.id,
                            onSelect: (p)=>setSelectedPrescription(p),
                            selectedPrescription: selectedPrescription
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "lg:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PharmacyCenter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            clinicId: clinicId,
                            drugs: drugs,
                            prescription: selectedPrescription,
                            pharmacistEmail: user?.email
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PharmacyQuickActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                clinicId: clinicId
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 text-red-700 border border-red-200 p-3 rounded",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/pharmacy/page.js",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/app/pharmacy/page.js",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=clinic-suite_6d58591e._.js.map