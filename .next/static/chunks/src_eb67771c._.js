(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/firebase.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// lib/firebase.js (หรือ src/lib/firebase.js)
__turbopack_context__.s({
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjKfFO7maPIOF8BspiU1wkLNgV9ipffNs",
    authDomain: "testmusic-79383.firebaseapp.com",
    projectId: "testmusic-79383",
    storageBucket: "testmusic-79383.firebasestorage.app",
    messagingSenderId: "198991673510",
    appId: "1:198991673510:web:0a16a620d9b5d1805adc67",
    measurementId: "G-5EW3XYPVR5"
};
// Initialize Firebase App (ป้องกันการ init ซ้ำ)
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
// Initialize Firebase Services
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
 // -------------------------------------
}}),
"[project]/src/app/login/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/login/page.js
__turbopack_context__.s({
    "default": (()=>LoginPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
// --- 1. Import Firebase Auth และ auth instance ---
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.js [app-client] (ecmascript)"); // <-- ปรับ path ถ้า firebase.js ไม่ได้อยู่ใน lib
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginPage() {
    _s();
    // --- !! เปลี่ยน username เป็น email เพื่อให้ตรงกับ Firebase Auth !! ---
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // ใช้ email state
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (event)=>{
        event.preventDefault(); //ไม่ให้หน้าเว็บรีโหลดตัวเองแบบปกติเมื่อกดปุ่ม
        setError('');
        setIsLoading(true);
        try {
            // --- 2. แทนที่ Fetch ด้วย Firebase Sign In ---
            // ใช้ email และ password จาก state
            const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
            //ขอเข้าสู่ระบบจริง:่ email และ password ที่ผู้ใช้กรอกไปให้ Firebase ตรวจสอบถ้าข้อมูลถูกต้อง Firebase จะตอบกลับมาว่า “ล็อกอินได้แล้ว”เราใช้ await เพราะต้องรอ Firebase ตอบก่อนถึงจะไปขั้นตอนต่อไป
            // --- 3. Login สำเร็จ ---
            console.log('Firebase Login successful:', userCredential.user);
            // สามารถเข้าถึง user data ผ่าน userCredential.user
            // Redirect ไปหน้า Admin
            router.push('/admin');
        } catch (err) {
            // --- 4. จัดการ Error จาก Firebase ---
            console.error('Firebase Login Error:', err.code, err.message);
            let friendlyErrorMessage = 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ';
            // แปลง Firebase error codes เป็นข้อความที่ผู้ใช้เข้าใจง่าย
            switch(err.code){
                case 'auth/invalid-email':
                    friendlyErrorMessage = 'รูปแบบอีเมลไม่ถูกต้อง';
                    break;
                case 'auth/user-disabled':
                    friendlyErrorMessage = 'บัญชีผู้ใช้นี้ถูกปิดใช้งาน';
                    break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                case 'auth/invalid-credential':
                    friendlyErrorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
                    break;
                default:
                    friendlyErrorMessage = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';
            }
            setError(friendlyErrorMessage);
        } finally{
            setIsLoading(false); // หยุด loading เสมอ
        }
    }; //ถ้ามีอะไรผิดพลาด เช่น:กรอกอีเมลผิดรหัสผ่านไม่ถูกหรือบัญชีไม่มีอยู่ เราก็จะ แสดงข้อความ error แบบที่ผู้ใช้เข้าใจง่าย เช่น:“อีเมลหรือรหัสผ่านไม่ถูกต้อง”“รูปแบบอีเมลไม่ถูกต้อง” ฯลฯ
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.loginBox,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: styles.title,
                    children: "เข้าสู่ระบบแอดมิน"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    style: styles.label,
                                    children: "อีเมล:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email" // ใช้ type="email"
                                    ,
                                    id: "email",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    style: styles.input,
                                    required: true,
                                    disabled: isLoading,
                                    placeholder: "กรอกอีเมล"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/login/page.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    style: styles.label,
                                    children: "รหัสผ่าน:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    id: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    style: styles.input,
                                    required: true,
                                    disabled: isLoading,
                                    placeholder: "กรอกรหัสผ่าน"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/login/page.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: styles.error,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.js",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            style: styles.button,
                            disabled: isLoading,
                            children: isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.js",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/login/page.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/login/page.js",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/login/page.js",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "BHcoUEOcxWwspAMtHX6MXrF352w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
// --- Styles (เหมือนเดิม) ---
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: "'Kanit', sans-serif"
    },
    loginBox: {
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px'
    },
    title: {
        marginBottom: '30px',
        color: '#333',
        fontSize: '1.8rem'
    },
    inputGroup: {
        marginBottom: '20px',
        textAlign: 'left'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: '#555',
        fontWeight: '500'
    },
    input: {
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        boxSizing: 'border-box'
    },
    button: {
        width: '100%',
        padding: '12px 20px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, opacity 0.3s ease',
        marginTop: '10px'
    },
    'button:disabled': {
        backgroundColor: '#a0cfff',
        cursor: 'not-allowed'
    },
    error: {
        color: 'red',
        marginTop: '-10px',
        marginBottom: '15px',
        fontSize: '0.9rem'
    }
};
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_eb67771c._.js.map