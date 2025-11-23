(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/clinic-suite/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pharmacy/page.js
__turbopack_context__.s([
    "default",
    ()=>PharmacyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/AuthProvider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/PharmacySidebar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/PharmacyCenter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/PharmacyQuickActions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../lib/firestoreClient'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function PharmacyPage() {
    _s();
    // --- hooks first ---
    const { user, claims, loading } = useAuth();
    const [prescriptions, setPrescriptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drugs, setDrugs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPrescription, setSelectedPrescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clinicId = claims?.clinicId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PharmacyPage.useEffect": ()=>{
            if (loading || !clinicId) return;
            setError(null);
            const unsub1 = subscribePendingPrescriptions(clinicId, {
                "PharmacyPage.useEffect.unsub1": (items)=>setPrescriptions(items)
            }["PharmacyPage.useEffect.unsub1"], {
                "PharmacyPage.useEffect.unsub1": (err)=>setError(err?.message ?? String(err))
            }["PharmacyPage.useEffect.unsub1"]);
            const unsub2 = subscribeDrugs(clinicId, {
                "PharmacyPage.useEffect.unsub2": (items)=>setDrugs(items)
            }["PharmacyPage.useEffect.unsub2"], {
                "PharmacyPage.useEffect.unsub2": (err)=>setError(err?.message ?? String(err))
            }["PharmacyPage.useEffect.unsub2"]);
            return ({
                "PharmacyPage.useEffect": ()=>{
                    try {
                        unsub1?.();
                    } catch (_) {}
                    try {
                        unsub2?.();
                    } catch (_) {}
                }
            })["PharmacyPage.useEffect"];
        }
    }["PharmacyPage.useEffect"], [
        loading,
        clinicId
    ]);
    // AUTH GUARD (after hooks)
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[calc(100vh-56px)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: "Loading authentication..."
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/page.js",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/page.js",
            lineNumber: 46,
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
                        fileName: "[project]/clinic-suite/app/page.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-600",
                        children: "You must be signed in to access the Pharmacy area."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/page.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "px-3 py-2 bg-indigo-600 text-white rounded",
                            children: "Go to login"
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/page.js",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/page.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/page.js",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/page.js",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    if (!claims?.clinicId || ![
        'pharmacist',
        'admin'
    ].includes(claims.role)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10",
            children: "Access denied — pharmacist role required."
        }, void 0, false, {
            fileName: "[project]/clinic-suite/app/page.js",
            lineNumber: 67,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh-56px)] bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PharmacySidebar, {
                            prescriptions: prescriptions,
                            selectedId: selectedPrescription?.id,
                            onSelect: (p)=>setSelectedPrescription(p),
                            selectedPrescription: selectedPrescription
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/page.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/page.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "lg:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PharmacyCenter, {
                            clinicId: clinicId,
                            drugs: drugs,
                            prescription: selectedPrescription,
                            pharmacistEmail: user?.email
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/page.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/page.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PharmacyQuickActions, {
                                clinicId: clinicId
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/app/page.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/app/page.js",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/app/page.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/clinic-suite/app/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 text-red-700 border border-red-200 p-3 rounded",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/app/page.js",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/app/page.js",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/app/page.js",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(PharmacyPage, "JG1Uf2PHU3lAaiEjtOSsll5TSfQ=", false, function() {
    return [
        useAuth
    ];
});
_c = PharmacyPage;
var _c;
__turbopack_context__.k.register(_c, "PharmacyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=clinic-suite_app_page_34e937cb.js.map