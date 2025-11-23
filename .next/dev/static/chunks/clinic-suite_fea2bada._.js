(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/clinic-suite/utils/idHelpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/lib/firestoreClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/utils/idHelpers.js [app-client] (ecmascript)");
;
;
;
/* ============================
   Collection reference helpers
   ============================ */ function patientsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients');
}
function appointmentsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments');
}
function drugsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs');
}
function consultationsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations');
}
function prescriptionsCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions');
}
function invoicesCollectionRef(clinicId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'invoices');
}
function subscribePatients(clinicId, callback, onError) {
    if (!clinicId) {
        if (onError) onError(new Error('clinicId required'));
        return ()=>{};
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(patientsCollectionRef(clinicId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(patientsCollectionRef(clinicId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function createOrUpdatePatient(clinicId, patient, createdByEmail = null) {
    if (!clinicId) throw new Error('clinicId required');
    if (!patient || !patient.nic) throw new Error('patient.nic (NIC) required');
    const patientId = String(patient.nic).trim();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients', patientId);
    const now = new Date();
    const payload = {
        ...patient,
        nic: patientId,
        updatedAt: now.toISOString(),
        createdAt: patient.createdAt ?? now.toISOString(),
        createdBy: patient.createdBy ?? createdByEmail ?? null
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
        merge: true
    });
    return {
        id: patientId,
        ...payload
    };
}
async function getPatient(clinicId, patientNic) {
    if (!clinicId) throw new Error('clinicId required');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients', String(patientNic));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(ref);
    if (!snap.exists()) return null;
    return {
        id: snap.id,
        ...snap.data()
    };
}
async function updatePatient(clinicId, patientNic, data) {
    if (!clinicId) throw new Error('clinicId required');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients', String(patientNic));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(ref, {
        ...data,
        updatedAt: new Date().toISOString()
    });
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(ref);
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
    const appointmentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateToId"])(scheduledDate);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments', appointmentId);
    const payload = {
        patientNic: String(patientNic).trim(),
        scheduledAt: scheduledDate.toISOString(),
        status,
        receptionistEmail,
        notes,
        createdAt: new Date().toISOString()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
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
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments', String(appointmentId));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(ref, {
        ...data,
        updatedAt: new Date().toISOString()
    });
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(ref);
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
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'appointments', String(appointmentId));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(ref);
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '>=', start.toISOString()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '<=', end.toISOString()));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '>=', start.toISOString()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('scheduledAt', '<=', end.toISOString()));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
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
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateToId"])(now) + '-' + String(patientNic);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations', id);
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ref, docData, {
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
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
    const prescId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateToId"])(now) + '-' + String(patientNic);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions', prescId);
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ref, docData, {
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'pending'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'asc'));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('name', 'asc'));
    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snap)=>{
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('name', 'asc'));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function createOrUpdateDrug(clinicId, drugIdOrName, { name, dose, qtyAvailable = 0, pricePerUnit = 0, updatedBy = null } = {}) {
    if (!clinicId) throw new Error('clinicId required');
    const id = String(drugIdOrName).trim();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', id);
    const payload = {
        name: name ?? id,
        dose: dose ?? '',
        qtyAvailable: Number(qtyAvailable) || 0,
        pricePerUnit: Number(pricePerUnit) || 0,
        updatedAt: new Date().toISOString(),
        updatedBy: updatedBy ?? null
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(ref, payload, {
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
    const drugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', String(drugId));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
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
    const drugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', String(drugId));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
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
    const prescRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions', prescriptionId);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
        const prescSnap = await tx.get(prescRef);
        if (!prescSnap.exists()) throw new Error('Prescription not found');
        const presc = prescSnap.data();
        if (presc.status === 'issued') throw new Error('Prescription already issued');
        // Prepare drug refs and read them
        const drugRefs = items.map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'drugs', String(i.drugId)));
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
        const invoiceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$utils$2f$idHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateToId"])(now) + '-' + String(presc.patientNic || 'unknown');
        const invRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'invoices', invoiceId);
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
            const consultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations', presc.consultationId);
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
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(coll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('patientNic', '==', String(patientNic)));
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
} /* ============================
   Exports (already named exports above)
   ============================ */  // Note: all functions are exported as named exports above.
 // No default export.
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/components/NewPatientForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/NewPatientForm.js
__turbopack_context__.s([
    "default",
    ()=>NewPatientForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function NewPatientForm({ onSubmit, disabled = false, initial = null }) {
    _s();
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.firstName ?? '');
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.lastName ?? '');
    const [nic, setNic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.nic ?? '');
    const [dob, setDob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.dob ?? '');
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.gender ?? '');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.phone ?? '');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial?.address ?? '');
    const [allergies, setAllergies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((initial?.allergies ?? []).join(', '));
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPatientForm.useEffect": ()=>{
            if (initial) {
                setFirstName(initial.firstName ?? '');
                setLastName(initial.lastName ?? '');
                setNic(initial.nic ?? '');
                setDob(initial.dob ?? '');
                setGender(initial.gender ?? '');
                setPhone(initial.phone ?? '');
                setAddress(initial.address ?? '');
                setAllergies((initial.allergies ?? []).join(', '));
            }
        }
    }["NewPatientForm.useEffect"], [
        initial
    ]);
    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        if (!nic) return setError('NIC is required.');
        const payload = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            nic: nic.trim(),
            dob: dob || null,
            gender: gender || null,
            phone: phone || null,
            address: address || null,
            allergies: allergies ? allergies.split(',').map((s)=>s.trim()).filter(Boolean) : []
        };
        setSubmitting(true);
        try {
            await onSubmit(payload);
            // keep NIC in form to create multiple appointments if needed
            // clear others
            // setFirstName(''); setLastName(''); setDob(''); setGender(''); setPhone(''); setAddress(''); setAllergies('');
            alert('Patient saved.');
        } catch (err) {
            setError(err.message || String(err));
        } finally{
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: nic,
                onChange: (e)=>setNic(e.target.value),
                placeholder: "NIC (ID)",
                className: "w-full p-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: firstName,
                        onChange: (e)=>setFirstName(e.target.value),
                        placeholder: "First name",
                        className: "p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: lastName,
                        onChange: (e)=>setLastName(e.target.value),
                        placeholder: "Last name",
                        className: "p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: dob,
                        onChange: (e)=>setDob(e.target.value),
                        className: "p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: gender,
                        onChange: (e)=>setGender(e.target.value),
                        className: "p-2 border rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Gender"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "M",
                                children: "Male"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "F",
                                children: "Female"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                                lineNumber: 60,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "O",
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                                lineNumber: 60,
                                columnNumber: 75
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: phone,
                onChange: (e)=>setPhone(e.target.value),
                placeholder: "Phone",
                className: "p-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: address,
                onChange: (e)=>setAddress(e.target.value),
                placeholder: "Address",
                className: "p-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: allergies,
                onChange: (e)=>setAllergies(e.target.value),
                placeholder: "Allergies (comma separated)",
                className: "p-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 66,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: disabled || submitting,
                    type: "submit",
                    className: "px-4 py-2 rounded-md bg-indigo-600 text-white",
                    children: submitting ? 'Saving...' : 'Save patient'
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewPatientForm.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/NewPatientForm.js",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(NewPatientForm, "ybm/5zu0Egr9Z8FRP7Moj8QPfDs=");
_c = NewPatientForm;
var _c;
__turbopack_context__.k.register(_c, "NewPatientForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/components/PatientSidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PatientSidebar.js
__turbopack_context__.s([
    "default",
    ()=>PatientSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewPatientForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/NewPatientForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PatientSidebar({ patients = [], query = '', onQuery, onSelect, selectedId, onOpenCreate, disabled }) {
    _s();
    const [openCreateInline, setOpenCreateInline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-slate-800",
                                        children: "Patients"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: "Search and manage patients"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOpenCreateInline(false);
                                    onOpenCreate();
                                },
                                className: "text-xs px-2 py-1 border rounded text-slate-700",
                                children: "+ New"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: query,
                            onChange: (e)=>onQuery(e.target.value),
                            placeholder: "Search by name / NIC",
                            className: "w-full p-2 rounded-md border border-slate-100 focus:ring-1 focus:ring-indigo-300"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    openCreateInline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewPatientForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onSubmit: async (p)=>{
                                if (onOpenCreate) onOpenCreate();
                            },
                            disabled: disabled
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-2 shadow-sm max-h-[65vh] overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-slate-100",
                    children: [
                        patients.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 text-sm text-slate-400",
                            children: "No patients"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                            lineNumber: 34,
                            columnNumber: 37
                        }, this),
                        patients.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelect(p),
                                className: `p-3 cursor-pointer hover:bg-slate-50 flex items-center gap-3 ${selectedId === p.id ? 'bg-slate-50' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium",
                                        children: (p.firstName || p.nic || 'P').charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-slate-800",
                                                children: p.firstName ? `${p.firstName} ${p.lastName ?? ''}` : 'Unnamed'
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-400",
                                                children: [
                                                    p.id,
                                                    " · ",
                                                    p.phone ?? '—'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : ''
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/PatientSidebar.js",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/PatientSidebar.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(PatientSidebar, "EN81V03FqKufBc7o5PFZiGkBVrU=");
_c = PatientSidebar;
var _c;
__turbopack_context__.k.register(_c, "PatientSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/components/NewAppointmentForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/NewAppointmentForm.js
__turbopack_context__.s([
    "default",
    ()=>NewAppointmentForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function NewAppointmentForm({ patientNic, initialAppointment = null, onSubmit, disabled = false }) {
    _s();
    const [datetimeLocal, setDatetimeLocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('confirmed');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAppointmentForm.useEffect": ()=>{
            if (initialAppointment) {
                // convert ISO to input datetime-local format: YYYY-MM-DDTHH:mm
                const d = new Date(initialAppointment.scheduledAt);
                const pad = {
                    "NewAppointmentForm.useEffect.pad": (n)=>String(n).padStart(2, '0')
                }["NewAppointmentForm.useEffect.pad"];
                const val = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
                setDatetimeLocal(val);
                setNotes(initialAppointment.notes || '');
                setStatus(initialAppointment.status || 'confirmed');
            } else {
                // default datetime: next quarter-hour
                const d = new Date();
                d.setMinutes(Math.ceil(d.getMinutes() / 15) * 15, 0, 0);
                const pad = {
                    "NewAppointmentForm.useEffect.pad": (n)=>String(n).padStart(2, '0')
                }["NewAppointmentForm.useEffect.pad"];
                setDatetimeLocal(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`);
                setNotes('');
                setStatus('confirmed');
            }
            setError(null);
        }
    }["NewAppointmentForm.useEffect"], [
        initialAppointment
    ]);
    async function handleSubmit(e) {
        e?.preventDefault();
        setError(null);
        const dt = new Date(datetimeLocal);
        if (Number.isNaN(dt.getTime())) {
            setError('Select valid date/time');
            return;
        }
        const payload = {
            scheduledAtISO: dt.toISOString(),
            notes: notes || '',
            status: status || 'confirmed'
        };
        setSubmitting(true);
        try {
            if (initialAppointment && initialAppointment.id) {
                // update mode
                await onSubmit({
                    mode: 'update',
                    appointmentId: initialAppointment.id,
                    data: payload
                });
            } else {
                // create mode
                await onSubmit({
                    mode: 'create',
                    data: payload
                });
            }
            // keep form values after create if desired; for new create we clear notes
            if (!initialAppointment) setNotes('');
        } catch (err) {
            setError(err.message || String(err));
        } finally{
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-3",
        children: [
            patientNic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: [
                    "Patient: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: patientNic
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 76,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                lineNumber: 76,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs text-slate-500 mb-1",
                        children: "Date & time"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "datetime-local",
                        value: datetimeLocal,
                        onChange: (e)=>setDatetimeLocal(e.target.value),
                        className: "w-full p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs text-slate-500 mb-1",
                        children: "Notes"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: notes,
                        onChange: (e)=>setNotes(e.target.value),
                        placeholder: "Notes (optional)",
                        className: "w-full p-2 border rounded"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs text-slate-500 mb-1",
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: status,
                        onChange: (e)=>setStatus(e.target.value),
                        className: "w-full p-2 border rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "confirmed",
                                children: "Confirmed"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "pending",
                                children: "Pending"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "completed",
                                children: "Completed"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "cancelled",
                                children: "Cancelled"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                lineNumber: 97,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: disabled || submitting,
                    className: "px-3 py-2 rounded-md bg-indigo-600 text-white text-sm",
                    children: submitting ? initialAppointment ? 'Saving...' : 'Creating...' : initialAppointment ? 'Save changes' : 'Create appointment'
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/NewAppointmentForm.js",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(NewAppointmentForm, "5NmTNVkCwdgRWMlc2Q1u//daIt4=");
_c = NewAppointmentForm;
var _c;
__turbopack_context__.k.register(_c, "NewAppointmentForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/components/PatientDetailCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PatientDetailCard.js
__turbopack_context__.s([
    "default",
    ()=>PatientDetailCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewAppointmentForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/NewAppointmentForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewPatientForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/NewPatientForm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PatientDetailCard({ patient, isNew = false, appointments = [], onCreatePatient, onUpdatePatient, onCreateAppointment, onAppointmentAction, busy, onCloseCreate }) {
    _s();
    const [edit, setEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(patient);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('active'); // 'active' | 'create'
    const [editingAppointment, setEditingAppointment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientDetailCard.useEffect": ()=>{
            setForm(patient);
            setEdit(!!isNew); // auto-edit when creating
            setTab(isNew ? 'create' : 'active');
            setEditingAppointment(null);
        }
    }["PatientDetailCard.useEffect"], [
        patient,
        isNew
    ]);
    function setField(k, v) {
        setForm((s)=>({
                ...s,
                [k]: v
            }));
    }
    async function savePatient() {
        // create vs update
        const payload = {
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            address: form.address,
            dob: form.dob,
            gender: form.gender,
            allergies: Array.isArray(form.allergies) ? form.allergies : form.allergies ? form.allergies.split(',').map((s)=>s.trim()) : [],
            nic: form.nic || form.id // ensure nic provided for create
        };
        if (isNew || !form.id) {
            // create
            const created = await onCreatePatient(payload);
            // onCreatePatient returns created object; it will become selected by page
            return created;
        } else {
            // update
            const updated = await onUpdatePatient(payload);
            return updated;
        }
    }
    function cancelEdit() {
        if (isNew) {
            // close the create form
            if (onCloseCreate) onCloseCreate();
            return;
        }
        setForm(patient);
        setEdit(false);
    }
    function startEditAppointment(appt) {
        setEditingAppointment(appt);
        setTab('create');
    }
    async function handleAppointmentFormSubmit(payload) {
        if (payload.mode === 'create') {
            await onCreateAppointment(payload.data);
            setTab('active');
        } else if (payload.mode === 'update') {
            await onAppointmentAction(payload.appointmentId, 'update', payload.data);
            setEditingAppointment(null);
            setTab('active');
        }
    }
    async function handleCancelAppointment(apptId) {
        if (!confirm('Cancel this appointment?')) return;
        await onAppointmentAction(apptId, 'cancel');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400",
                                        children: isNew ? 'New patient' : 'Patient'
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-semibold text-slate-800",
                                        children: form.firstName ? `${form.firstName} ${form.lastName ?? ''}` : isNew ? 'Create patient' : 'Unnamed'
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm text-slate-500",
                                        children: [
                                            "NIC • ",
                                            isNew ? form.nic || 'not set' : form.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: !edit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEdit(true),
                                    className: "px-3 py-1 rounded-md border text-sm",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: async ()=>{
                                                await savePatient();
                                            },
                                            disabled: busy,
                                            className: "px-3 py-1 rounded-md bg-indigo-600 text-white text-sm",
                                            children: busy ? 'Saving...' : isNew ? 'Create' : 'Save'
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: cancelEdit,
                                            disabled: busy,
                                            className: "px-3 py-1 rounded-md border text-sm text-slate-700",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: edit ? // For create mode, show NIC input editable; for update NIC is read-only (stored in id)
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: form.nic ?? '',
                                                onChange: (e)=>setField('nic', e.target.value),
                                                placeholder: "NIC (identifier)",
                                                className: "p-2 border rounded",
                                                disabled: !isNew
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.firstName || '',
                                                    onChange: (e)=>setField('firstName', e.target.value),
                                                    placeholder: "First name",
                                                    className: "p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.lastName || '',
                                                    onChange: (e)=>setField('lastName', e.target.value),
                                                    placeholder: "Last name",
                                                    className: "p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: form.dob || '',
                                                    onChange: (e)=>setField('dob', e.target.value),
                                                    className: "p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.gender || '',
                                                    onChange: (e)=>setField('gender', e.target.value),
                                                    className: "p-2 border rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Gender"
                                                        }, void 0, false, {
                                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "M",
                                                            children: "Male"
                                                        }, void 0, false, {
                                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "F",
                                                            children: "Female"
                                                        }, void 0, false, {
                                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "O",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: form.phone || '',
                                            onChange: (e)=>setField('phone', e.target.value),
                                            placeholder: "Phone",
                                            className: "p-2 border rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: form.address || '',
                                            onChange: (e)=>setField('address', e.target.value),
                                            placeholder: "Address",
                                            className: "p-2 border rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: (form.allergies || []).join?.(', ') || form.allergies || '',
                                            onChange: (e)=>setField('allergies', e.target.value.split(',').map((s)=>s.trim()).filter(Boolean)),
                                            placeholder: "Allergies (comma separated)",
                                            className: "p-2 border rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 137,
                                                    columnNumber: 22
                                                }, this),
                                                ": ",
                                                form.phone || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 138,
                                                    columnNumber: 22
                                                }, this),
                                                ": ",
                                                form.address || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "DOB"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 139,
                                                    columnNumber: 22
                                                }, this),
                                                ": ",
                                                form.dob || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 140,
                                                    columnNumber: 22
                                                }, this),
                                                ": ",
                                                form.gender || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Allergies"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 141,
                                                    columnNumber: 22
                                                }, this),
                                                ": ",
                                                (form.allergies || []).length ? (form.allergies || []).join(', ') : 'None'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border p-3 bg-white text-sm text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400",
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Created:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 149,
                                                    columnNumber: 37
                                                }, this),
                                                " ",
                                                form.createdAt ? new Date(form.createdAt).toLocaleString() : '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Updated:"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 150,
                                                    columnNumber: 37
                                                }, this),
                                                " ",
                                                form.updatedAt ? new Date(form.updatedAt).toLocaleString() : '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTab('active');
                                        setEditingAppointment(null);
                                    },
                                    className: `px-3 py-1 text-sm ${tab === 'active' ? 'bg-slate-100 rounded-md' : 'text-slate-500'}`,
                                    children: "Active Appointments"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTab('create');
                                        setEditingAppointment(null);
                                    },
                                    className: `px-3 py-1 text-sm ${tab === 'create' ? 'bg-slate-100 rounded-md' : 'text-slate-500'}`,
                                    children: "Create New Appointment"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            tab === 'active' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate-600",
                                        children: "Appointments for this patient"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3",
                                        children: [
                                            appointments.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-400",
                                                children: "No appointments."
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                lineNumber: 170,
                                                columnNumber: 47
                                            }, this),
                                            appointments.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 border rounded-md flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium",
                                                                    children: new Date(a.scheduledAt).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                                    lineNumber: 174,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: a.notes || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                                    lineNumber: 175,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-400 mt-1",
                                                                    children: [
                                                                        "Status: ",
                                                                        a.status
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                                    lineNumber: 176,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>startEditAppointment(a),
                                                                    className: "px-2 py-1 border rounded text-xs",
                                                                    children: "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                                    lineNumber: 179,
                                                                    columnNumber: 23
                                                                }, this),
                                                                a.status !== 'cancelled' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleCancelAppointment(a.id),
                                                                    className: "px-2 py-1 bg-red-600 text-white rounded text-xs",
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                                    lineNumber: 180,
                                                                    columnNumber: 51
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-400",
                                                                    children: "Cancelled"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                                    lineNumber: 180,
                                                                    columnNumber: 183
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, a.id, true, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            tab === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-slate-600",
                                        children: editingAppointment ? 'Edit appointment' : 'Create a new appointment'
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$NewAppointmentForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                patientNic: form.nic || form.id,
                                                initialAppointment: editingAppointment,
                                                onSubmit: handleAppointmentFormSubmit,
                                                disabled: busy
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            editingAppointment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 text-right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEditingAppointment(null);
                                                        setTab('active');
                                                    },
                                                    className: "text-sm px-3 py-1 rounded-md border text-slate-700",
                                                    children: "Stop editing"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/PatientDetailCard.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(PatientDetailCard, "vIqkcEOg7Ythf8Y2Lj79N7dwxHI=");
_c = PatientDetailCard;
var _c;
__turbopack_context__.k.register(_c, "PatientDetailCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/app/patients/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/patients/page.js
__turbopack_context__.s([
    "default",
    ()=>PatientsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/AuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firestoreClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PatientSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/PatientSidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PatientDetailCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/PatientDetailCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PatientsPage() {
    _s();
    const { user, claims, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [patients, setPatients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filtered, setFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedPatient, setSelectedPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- AUTH GUARD UI (loading / sign-in) ---
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: "Loading authentication..."
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/patients/page.js",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/patients/page.js",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-lg p-6 bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Sign in required"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: "You must be signed in to access the Patients area."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "px-3 py-2 bg-indigo-600 text-white rounded",
                            children: "Go to login"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/patients/page.js",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/patients/page.js",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/patients/page.js",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    // ------------------------------------------------
    // Subscribe patient list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientsPage.useEffect": ()=>{
            if (loading) return;
            if (!claims?.clinicId) return;
            setError(null);
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribePatients"])(claims.clinicId, {
                "PatientsPage.useEffect.unsub": (items)=>setPatients(items)
            }["PatientsPage.useEffect.unsub"], {
                "PatientsPage.useEffect.unsub": (err)=>setError(err.message || String(err))
            }["PatientsPage.useEffect.unsub"]);
            return ({
                "PatientsPage.useEffect": ()=>unsub()
            })["PatientsPage.useEffect"];
        }
    }["PatientsPage.useEffect"], [
        claims,
        loading
    ]);
    // client-side search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientsPage.useEffect": ()=>{
            const term = (q || '').trim().toLowerCase();
            if (!term) setFiltered(patients);
            else setFiltered(patients.filter({
                "PatientsPage.useEffect": (p)=>{
                    const name = ((p.firstName || '') + ' ' + (p.lastName || '')).toLowerCase();
                    return name.includes(term) || (p.nic || '').toLowerCase().includes(term) || (p.phone || '').toLowerCase().includes(term);
                }
            }["PatientsPage.useEffect"]));
        }
    }["PatientsPage.useEffect"], [
        q,
        patients
    ]);
    // subscribe appointments when a real patient (not new) is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientsPage.useEffect": ()=>{
            if (!selectedPatient || !claims?.clinicId || selectedPatient.isNew) {
                setAppointments([]);
                return;
            }
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeAppointmentsForPatient"])(claims.clinicId, selectedPatient.id, {
                "PatientsPage.useEffect.unsub": (items)=>setAppointments(items)
            }["PatientsPage.useEffect.unsub"], {
                "PatientsPage.useEffect.unsub": (err)=>setError(err.message || String(err))
            }["PatientsPage.useEffect.unsub"]);
            return ({
                "PatientsPage.useEffect": ()=>unsub()
            })["PatientsPage.useEffect"];
        }
    }["PatientsPage.useEffect"], [
        selectedPatient,
        claims
    ]);
    // Open create in center panel
    function handleOpenCreate() {
        const blank = {
            id: '',
            nic: '',
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            phone: '',
            address: '',
            allergies: [],
            isNew: true
        };
        setSelectedPatient(blank);
    }
    // Create patient (called from PatientDetailCard)
    async function handleCreatePatient(payload) {
        if (!claims?.clinicId) {
            setError('No clinicId in your account.');
            throw new Error('No clinicId');
        }
        setBusy(true);
        try {
            // payload must include nic
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdatePatient"])(claims.clinicId, payload, user?.email);
            // created.id will be NIC
            setSelectedPatient(created);
            return created;
        } catch (err) {
            console.error(err);
            setError(err.message || String(err));
            throw err;
        } finally{
            setBusy(false);
        }
    }
    // Update existing patient (called from PatientDetailCard)
    async function handleUpdatePatient(patch) {
        if (!claims?.clinicId || !selectedPatient) return;
        if (selectedPatient.isNew) {
            // shouldn't happen; creation flow above handles new
            return;
        }
        setBusy(true);
        try {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePatient"])(claims.clinicId, selectedPatient.id, patch);
            setSelectedPatient(updated);
            return updated;
        } catch (err) {
            console.error(err);
            setError(err.message || String(err));
            throw err;
        } finally{
            setBusy(false);
        }
    }
    async function handleCreateAppointment(apptData) {
        if (!claims?.clinicId || !selectedPatient) return;
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAppointment"])(claims.clinicId, {
                patientNic: selectedPatient.id,
                ...apptData,
                receptionistEmail: user?.email
            });
        } catch (err) {
            console.error(err);
            setError(err.message || String(err));
        } finally{
            setBusy(false);
        }
    }
    async function handleAppointmentAction(appointmentId, action, data = {}) {
        if (!claims?.clinicId) return;
        setBusy(true);
        try {
            if (action === 'update') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAppointment"])(claims.clinicId, appointmentId, data);
            } else if (action === 'cancel') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firestoreClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelAppointment"])(claims.clinicId, appointmentId, user?.email);
            }
        } catch (err) {
            console.error(err);
            setError(err.message || String(err));
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-56px)] bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "lg:col-span-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PatientSidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        patients: filtered,
                        query: q,
                        onQuery: setQ,
                        onSelect: setSelectedPatient,
                        selectedId: selectedPatient?.id,
                        onOpenCreate: handleOpenCreate,
                        disabled: busy
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/app/patients/page.js",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "lg:col-span-6",
                    children: !selectedPatient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl bg-white shadow-sm p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-slate-800",
                                children: "Select a patient"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/patients/page.js",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-slate-500",
                                children: "Search or create a patient on the left. Click a patient to view details."
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/patients/page.js",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$PatientDetailCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        patient: selectedPatient,
                        isNew: !!selectedPatient.isNew,
                        appointments: appointments,
                        onCreatePatient: handleCreatePatient,
                        onUpdatePatient: handleUpdatePatient,
                        onCreateAppointment: handleCreateAppointment,
                        onAppointmentAction: handleAppointmentAction,
                        busy: busy,
                        onCloseCreate: ()=>setSelectedPatient(null)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/app/patients/page.js",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "lg:col-span-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-6 space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl bg-white shadow-sm p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm text-slate-500",
                                    children: "Quick actions"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/app/patients/page.js",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedPatient(null);
                                                setQ('');
                                            },
                                            className: "text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700",
                                            children: "Clear selection"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/app/patients/page.js",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>window.location.reload(),
                                            className: "text-sm px-3 py-2 rounded-md border border-slate-100 text-slate-700",
                                            children: "Refresh"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/app/patients/page.js",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/app/patients/page.js",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/clinic-suite/app/patients/page.js",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/patients/page.js",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/app/patients/page.js",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/clinic-suite/app/patients/page.js",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/clinic-suite/app/patients/page.js",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(PatientsPage, "TUybkuzAPAI4khdyaxYzXo4KYlE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = PatientsPage;
var _c;
__turbopack_context__.k.register(_c, "PatientsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=clinic-suite_fea2bada._.js.map