(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/clinic-suite/components/HomeStatsClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/HomeStatsClient.js
__turbopack_context__.s([
    "default",
    ()=>HomeStatsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/AuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function HomeStatsClient() {
    _s();
    const { user, claims, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patients: 0,
        consults: 0,
        prescriptions: 0
    });
    const [loadingCounts, setLoadingCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeStatsClient.useEffect": ()=>{
            if (loading) return;
            setError(null);
            if (!user || !claims?.clinicId) {
                setLoadingCounts(false);
                return;
            }
            const clinicId = claims.clinicId;
            // collection refs
            const patientsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'patients');
            const consultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'consultations');
            const prescRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'clinics', clinicId, 'prescriptions');
            // start listeners
            setLoadingCounts(true);
            const unsubPatients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(patientsRef, {
                "HomeStatsClient.useEffect.unsubPatients": (snap)=>{
                    setCounts({
                        "HomeStatsClient.useEffect.unsubPatients": (prev)=>({
                                ...prev,
                                patients: snap.size
                            })
                    }["HomeStatsClient.useEffect.unsubPatients"]);
                    setLoadingCounts(false);
                }
            }["HomeStatsClient.useEffect.unsubPatients"], {
                "HomeStatsClient.useEffect.unsubPatients": (err)=>setError(err?.message || String(err))
            }["HomeStatsClient.useEffect.unsubPatients"]);
            const unsubConsults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(consultRef, {
                "HomeStatsClient.useEffect.unsubConsults": (snap)=>{
                    setCounts({
                        "HomeStatsClient.useEffect.unsubConsults": (prev)=>({
                                ...prev,
                                consults: snap.size
                            })
                    }["HomeStatsClient.useEffect.unsubConsults"]);
                    setLoadingCounts(false);
                }
            }["HomeStatsClient.useEffect.unsubConsults"], {
                "HomeStatsClient.useEffect.unsubConsults": (err)=>setError(err?.message || String(err))
            }["HomeStatsClient.useEffect.unsubConsults"]);
            const unsubPresc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(prescRef, {
                "HomeStatsClient.useEffect.unsubPresc": (snap)=>{
                    setCounts({
                        "HomeStatsClient.useEffect.unsubPresc": (prev)=>({
                                ...prev,
                                prescriptions: snap.size
                            })
                    }["HomeStatsClient.useEffect.unsubPresc"]);
                    setLoadingCounts(false);
                }
            }["HomeStatsClient.useEffect.unsubPresc"], {
                "HomeStatsClient.useEffect.unsubPresc": (err)=>setError(err?.message || String(err))
            }["HomeStatsClient.useEffect.unsubPresc"]);
            return ({
                "HomeStatsClient.useEffect": ()=>{
                    try {
                        unsubPatients();
                    } catch (_) {}
                    try {
                        unsubConsults();
                    } catch (_) {}
                    try {
                        unsubPresc();
                    } catch (_) {}
                }
            })["HomeStatsClient.useEffect"];
        }
    }["HomeStatsClient.useEffect"], [
        user,
        claims,
        loading
    ]);
    // Not logged in or no clinicId — render nothing (as requested)
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-md rounded-2xl p-6 border border-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: "Checking session..."
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    if (!user || !claims?.clinicId) {
        // nothing visible on homepage if not signed in
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-md rounded-2xl p-6 border border-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Clinic"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-semibold text-slate-900 mt-1",
                                children: claims.clinicId
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500",
                        children: "Live"
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid grid-cols-3 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-indigo-50 p-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-indigo-700",
                                children: "Patients"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold mt-1",
                                children: counts.patients
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-emerald-50 p-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-emerald-700",
                                children: "Consults"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold mt-1",
                                children: counts.consults
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-amber-50 p-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-amber-700",
                                children: "Prescriptions"
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold mt-1",
                                children: counts.prescriptions
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 border-t pt-4 text-sm text-slate-500",
                children: [
                    "Realtime clinic stats — updated automatically.",
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-red-600",
                        children: [
                            "Error: ",
                            String(error)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                        lineNumber: 103,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/HomeStatsClient.js",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(HomeStatsClient, "vAZw3nHxpja2CMahRg7BYU6iinE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = HomeStatsClient;
var _c;
__turbopack_context__.k.register(_c, "HomeStatsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=clinic-suite_components_HomeStatsClient_5c138de9.js.map