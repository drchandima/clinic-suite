(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/clinic-suite/lib/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/firebase.js (DEBUG VERSION)
// Overwrite your existing file with this while debugging.
// After debugging you may revert to the normal version (no window exposure).
__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
const clientConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyC91l8z2Cyk2M77qWMDarViuxAtTWf2WM0") || null,
    authDomain: ("TURBOPACK compile-time value", "clinic-suite-firebase.firebaseapp.com") || null,
    projectId: ("TURBOPACK compile-time value", "clinic-suite-firebase") || null,
    storageBucket: ("TURBOPACK compile-time value", "clinic-suite-firebase.firebasestorage.app") || null,
    messagingSenderId: ("TURBOPACK compile-time value", "266758917814") || null,
    appId: ("TURBOPACK compile-time value", "1:266758917814:web:ddb260db6903c00e8ba017") || null
};
let firebaseApp;
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length) {
    try {
        firebaseApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(clientConfig);
    // eslint-disable-next-line no-empty
    } catch (err) {
        console.error('Firebase initializeApp error (likely invalid config):', err);
        // still expose partial config for debugging
        firebaseApp = null;
    }
} else {
    firebaseApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
}
const auth = firebaseApp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(firebaseApp) : null;
const db = firebaseApp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(firebaseApp) : null;
const storage = firebaseApp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(firebaseApp) : null;
// DEBUG: expose runtime info for browser console inspection
if ("TURBOPACK compile-time truthy", 1) {
    window.__CLINIC_DEBUG__ = window.__CLINIC_DEBUG__ || {};
    window.__CLINIC_DEBUG__.firebaseClientConfig = clientConfig;
    window.__CLINIC_DEBUG__.firebaseApp = firebaseApp;
    window.__CLINIC_DEBUG__.auth = auth;
    window.__CLINIC_DEBUG__.db = db;
    window.__CLINIC_DEBUG__.storage = storage;
    console.debug('FIREBASE DEBUG: exported to window.__CLINIC_DEBUG__');
    console.debug('FIREBASE CONFIG:', clientConfig);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/components/AuthProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/AuthProvider.js
__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    claims: null,
    loading: true
});
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claims, setClaims] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsub": async (u)=>{
                    if (!u) {
                        setUser(null);
                        setClaims(null);
                        setLoading(false);
                        return;
                    }
                    setUser(u);
                    setLoading(true);
                    let tokenClaims = null;
                    try {
                        const idTokenResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIdTokenResult"])(u, /* forceRefresh= */ false);
                        tokenClaims = idTokenResult.claims || null;
                    } catch (err) {
                        console.error('getIdTokenResult failed', err);
                        tokenClaims = null;
                    }
                    // If no clinicId on token, try reading users/{uid} as fallback
                    if (!tokenClaims?.clinicId) {
                        try {
                            const uRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', u.uid);
                            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(uRef);
                            if (snap.exists()) {
                                const d = snap.data();
                                tokenClaims = {
                                    ...tokenClaims,
                                    clinicId: tokenClaims?.clinicId ?? d.clinicId ?? null,
                                    role: tokenClaims?.role ?? d.role ?? null
                                };
                                console.debug('AuthProvider: fallback claims from users/{uid}', d);
                            }
                        } catch (err) {
                            console.error('Failed to fetch users/{uid} fallback', err);
                        }
                    }
                    setClaims(tokenClaims);
                    setLoading(false);
                }
            }["AuthProvider.useEffect.unsub"]);
            return ({
                "AuthProvider.useEffect": ()=>unsub()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            claims,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/clinic-suite/components/AuthProvider.js",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "2Vf7i8sIMPXIwSIBeX+EwfGxJRg=");
_c = AuthProvider;
function useAuth() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
}
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/clinic-suite/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/NavBar.js
__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/components/AuthProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinic-suite/lib/firebase.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function NavBar() {
    _s();
    const { user, claims, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // base + per-role links
    const linksForRole = (role)=>{
        const base = [
            {
                href: '/',
                label: 'Home'
            }
        ];
        const roleLinks = {
            admin: [
                {
                    href: '/patients',
                    label: 'Patients'
                },
                {
                    href: '/consultation',
                    label: 'Consultation'
                },
                {
                    href: '/pharmacy',
                    label: 'Pharmacy'
                },
                {
                    href: '/billing',
                    label: 'Billing'
                },
                {
                    href: '/admin',
                    label: 'Admin'
                }
            ],
            doctor: [
                {
                    href: '/patients',
                    label: 'Patients'
                },
                {
                    href: '/consultation',
                    label: 'Consultation'
                },
                {
                    href: '/pharmacy',
                    label: 'Pharmacy'
                }
            ],
            receptionist: [
                {
                    href: '/patients',
                    label: 'Patients'
                }
            ],
            pharmacist: [
                {
                    href: '/pharmacy',
                    label: 'Pharmacy'
                }
            ],
            billing: [
                {
                    href: '/billing',
                    label: 'Billing'
                }
            ]
        };
        return base.concat(roleLinks[role] || []);
    };
    async function handleSignOut() {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            router.push('/login');
        } catch (err) {
            console.error('Sign out failed', err);
            alert('Sign out failed: ' + (err.message || err));
        }
    }
    const role = claims?.role ?? null;
    const links = role ? linksForRole(role) : linksForRole(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>setOpen(false)
    }["NavBar.useEffect"], [
        pathname
    ]);
    const displayedRole = role ? String(role).toLowerCase() : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white border-b border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-14 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-3",
                                    "aria-label": "Clinic Suite home",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "Clinic Suite Logo",
                                        width: 32,
                                        height: 32,
                                        className: "rounded-md",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/Navbar.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-slate-800",
                                            children: "Clinic Suite"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-400",
                                            children: "EMR & Clinic Management"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/clinic-suite/components/Navbar.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:space-x-4",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/Navbar.js",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                            href: link.href,
                                            active: pathname === link.href,
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-l border-slate-100 pl-3 ml-3",
                                        children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-slate-700",
                                                            children: user.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                                            lineNumber: 96,
                                                            columnNumber: 25
                                                        }, this),
                                                        displayedRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-400 lowercase",
                                                            children: displayedRole
                                                        }, void 0, false, {
                                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                                            lineNumber: 97,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                                    lineNumber: 95,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSignOut,
                                                    className: "text-sm px-3 py-1 rounded-md border",
                                                    children: "Sign out"
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                                    lineNumber: 99,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "text-sm px-3 py-1 rounded-md border",
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/Navbar.js",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/Navbar.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen((o)=>!o),
                                className: "p-2 rounded-md border",
                                "aria-label": "Toggle menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 text-slate-600",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/Navbar.js",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 6H3a1 1 0 000 2h14a1 1 0 000-2zm0 6H3a1 1 0 000 2h14a1 1 0 000-2z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/Navbar.js",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/Navbar.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/clinic-suite/components/Navbar.js",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/clinic-suite/components/Navbar.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/Navbar.js",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-white border-t border-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 space-y-2",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-400",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/clinic-suite/components/Navbar.js",
                        lineNumber: 129,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: `block px-3 py-2 rounded ${pathname === link.href ? 'bg-slate-100 font-medium' : 'text-slate-700'}`,
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/clinic-suite/components/Navbar.js",
                                        lineNumber: 134,
                                        columnNumber: 21
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                    lineNumber: 133,
                                    columnNumber: 19
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-slate-100",
                                children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-700",
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                                    lineNumber: 144,
                                                    columnNumber: 25
                                                }, this),
                                                displayedRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-400 lowercase",
                                                    children: displayedRole
                                                }, void 0, false, {
                                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                                    lineNumber: 145,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 143,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "text-sm px-3 py-1 rounded-md border",
                                            children: "Sign out"
                                        }, void 0, false, {
                                            fileName: "[project]/clinic-suite/components/Navbar.js",
                                            lineNumber: 147,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                    lineNumber: 142,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "block text-sm px-3 py-2 rounded border",
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/clinic-suite/components/Navbar.js",
                                    lineNumber: 150,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/clinic-suite/components/Navbar.js",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/clinic-suite/components/Navbar.js",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/clinic-suite/components/Navbar.js",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/clinic-suite/components/Navbar.js",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(NavBar, "Rw96ymwWDK4LrgHMH00kp36aitQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$components$2f$AuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NavBar;
function NavLink({ href, children, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinic$2d$suite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `px-3 py-2 rounded-md text-sm ${active ? 'bg-slate-100 font-medium' : 'text-slate-700 hover:bg-slate-50'}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/clinic-suite/components/Navbar.js",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c1 = NavLink;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavBar");
__turbopack_context__.k.register(_c1, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=clinic-suite_be30900b._.js.map