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
"[project]/src/app/admin/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/admin/page.js (หรือหน้าที่ต้องการ)
__turbopack_context__.s({
    "default": (()=>AdminPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"); // <<<--- 1. เพิ่ม Import นี้เข้ามา
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.js [app-client] (ecmascript)"); // *** ตรวจสอบ path นี้ให้ถูกต้อง ***
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminPage() {
    _s();
    const [songs, setSongs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bandName: '',
        albumTitle: '',
        songTitle: '',
        youtubeLink: '',
        albumId: '',
        trackNumber: ''
    });
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            fetchSongs(); // สั่งให้ไปดึงรายการเพลงมาแสดงทันที
        }
    }["AdminPage.useEffect"], []);
    const fetchSongs = async ()=>{
        try {
            setLoading(true); // 1. "กำลังโหลดเพลง..."
            const songsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "songs"); // 2.ไปที่collection "songs"
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(songsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc")); // 3. สร้างคำสั่ง: "ขอดูเพลงใน collectionsongs ทั้งหมด โดยเรียงตาม createdAt (เวลาที่สร้าง) จากใหม่สุดไปเก่าสุด"
            const songsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q); // 4. ส่งคำสั่งไป Firebase แล้วรอข้อมูลกลับมา
            // 5. แปลงข้อมูลที่ได้ (songsSnapshot) ให้อยู่ในรูปแบบที่เราใช้งานง่าย
            const songsList = songsSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data() // เอาข้อมูลอื่นๆ ทั้งหมดของเพลงนั้นมา
                }));
            setSongs(songsList); // 6. เอารายการเพลงที่ได้ไปใส่ใน "สมุดรายการเพลง" (State `songs`)
            setError(null); // 7. ถ้าเคยมี error ก็ล้างทิ้งไป
        } catch (err) {
            console.error("Error fetching songs:", err);
            setError("ไม่สามารถโหลดข้อมูลเพลงได้"); // 8. ถ้ามีปัญหา
        } finally{
            setLoading(false); // 9. "โหลดเสร็จแล้ว!" (ไม่ว่าจะสำเร็จหรือล้มเหลว)
        }
    };
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }; //ฟังก์ชันนี้จะทำงาน ทุกครั้งที่เราพิมพ์อะไรลงไปในช่องกรอกข้อมูล (input fields)
    const handleAdd = async ()=>{
        // 1. ตรวจสอบว่ากรอกข้อมูลครบไหม
        if (!form.bandName || !form.albumTitle || /* ... */ !form.trackNumber) {
            setError("กรุณากรอกข้อมูลให้ครบทุกช่อง...");
            return;
        }
        const trackNum = parseInt(form.trackNumber, 10); // แปลง Track Number เป็นตัวเลข
        if (isNaN(trackNum) || trackNum <= 0) {
            return;
        }
        try {
            setLoading(true); // 2. "กำลังเพิ่มเพลง..."
            // 3. เตรียมข้อมูลเพลงที่จะบันทึกลง Firebase
            const docData = {
                bandName: form.bandName.trim(),
                albumTitle: form.albumTitle.trim(),
                // ... (ข้อมูลอื่นๆ) ...
                trackNumber: trackNum,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])() // 4. ใส่ "ตราประทับเวลา" ตอนสร้าง
            };
            // 5. สั่ง Firebase ให้เพิ่มข้อมูลนี้เข้าไปในแฟ้ม "songs"
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "songs"), docData);
            // 6. อัปเดต "สมุดรายการเพลง" (State `songs`) บนหน้าเว็บทันที โดยไม่ต้องรอโหลดใหม่
            setSongs([
                {
                    id: docRef.id,
                    ...docData,
                    createdAt: new Date()
                },
                ...songs
            ]);
            //    - `id: docRef.id`: Firebase จะคืน ID ของเพลงที่เพิ่งสร้างมาให้
            //    - `createdAt: new Date()`: ใช้เวลาปัจจุบันของเครื่องเราไปก่อน (serverTimestamp จะอัปเดตทีหลัง)
            setForm({
                bandName: ''
            }); // 7. ล้างข้อมูลในฟอร์มให้ว่าง
            setError(null); // 8. เคลียร์ error
        } catch (err) {} finally{
            setLoading(false);
        } // 9. "เพิ่มเสร็จแล้ว!"
    };
    const handleDelete = async (id)=>{
        // 1. ถามยืนยันก่อนลบ
        if (!confirm(`ต้องการลบเพลง ID: ${id} ใช่หรือไม่?`)) return;
        try {
            setLoading(true); // 2. "กำลังลบ..."
            // 3. สั่ง Firebase ให้ลบเพลงที่มี ID นี้ออกจากแฟ้ม "songs"
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "songs", id));
            // 4. อัปเดต "สมุดรายการเพลง" (State `songs`) บนหน้าเว็บ โดยกรองเพลงที่ถูกลบออกไป
            setSongs(songs.filter((song)=>song.id !== id));
            setError(null);
        } catch (err) {} finally{
            setLoading(false);
        } // 5. "ลบเสร็จแล้ว!"
    };
    const handleUpdate = async ()=>{
        // 1. ตรวจสอบข้อมูลเหมือนตอน Add
        if (!form.bandName || /* ... */ !form.trackNumber) {
            return;
        }
        const trackNum = parseInt(form.trackNumber, 10);
        if (isNaN(trackNum) || trackNum <= 0) {
            return;
        }
        if (!editId) return; // ถ้าไม่มี editId (ไม่ได้อยู่ในโหมดแก้ไข) ก็ไม่ต้องทำอะไร
        try {
            setLoading(true); // 2. "กำลังอัปเดต..."
            const songRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "songs", editId); // 3. ชี้ไปยังเพลงที่เรากำลังจะแก้ไขใน Firebase
            // 4. เตรียมข้อมูลที่อัปเดต (เอามาจากฟอร์ม)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(songRef, {
                bandName: form.bandName.trim(),
                // ... (ข้อมูลอื่นๆ ที่อัปเดต) ...
                trackNumber: trackNum,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])() // 5. ใส่ "ตราประทับเวลา" ตอนอัปเดต
            });
            // 6. อัปเดต "สมุดรายการเพลง" (State `songs`) บนหน้าเว็บ
            setSongs(songs.map((song)=>song.id === editId ? {
                    ...song
                } : song));
            handleCancelEdit(); // 7. ออกจากโหมดแก้ไข (ล้างฟอร์ม, editId เป็น null)
        } catch (err) {} finally{
            setLoading(false);
        } // 8. "อัปเดตเสร็จแล้ว!"
    };
    const handleEdit = (song)=>{
        setEditId(song.id); // 1. จำ ID ของเพลงที่เราจะแก้ไข
        // 2. เอาข้อมูลของเพลงนั้นมาใส่ใน "แบบฟอร์ม"
        setForm({
            bandName: song.bandName || '',
            albumTitle: song.albumTitle || '',
            // ... (ข้อมูลอื่นๆ ของเพลง) ...
            trackNumber: song.trackNumber !== undefined ? String(song.trackNumber) : ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition duration-150 ease-in-out text-sm inline-flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-4 w-4 mr-1",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.js",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.js",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                "กลับหน้าหลัก "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.js",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/page.js",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: " แอดมินเองจ้า"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                role: "alert",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.js",
                    lineNumber: 152,
                    columnNumber: 118
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 152,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow p-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-3",
                        children: editId ? '✏️ แก้ไขข้อมูลเพลง' : '➕ เพิ่มเพลงใหม่'
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "bandName",
                                placeholder: "ชื่อวงดนตรี",
                                value: form.bandName,
                                onChange: handleChange,
                                className: "border p-2 rounded w-full",
                                required: true,
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.js",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "albumTitle",
                                placeholder: "ชื่ออัลบั้ม",
                                value: form.albumTitle,
                                onChange: handleChange,
                                className: "border p-2 rounded w-full",
                                required: true,
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "albumId",
                                placeholder: "Album ID",
                                value: form.albumId,
                                onChange: handleChange,
                                className: "border p-2 rounded w-full",
                                required: true,
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.js",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "songTitle",
                                placeholder: "ชื่อเพลง",
                                value: form.songTitle,
                                onChange: handleChange,
                                className: "border p-2 rounded w-full",
                                required: true,
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.js",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                name: "trackNumber",
                                placeholder: "Track Number",
                                value: form.trackNumber,
                                onChange: handleChange,
                                className: "border p-2 rounded w-full",
                                required: true,
                                min: "1",
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        name: "youtubeLink",
                        placeholder: "ลิงก์ YouTube (https://...)",
                        value: form.youtubeLink,
                        onChange: handleChange,
                        className: "border p-2 rounded w-full mb-4",
                        required: true,
                        disabled: loading
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2 justify-end",
                        children: editId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUpdate,
                                    className: "bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition",
                                    disabled: loading,
                                    children: [
                                        " ",
                                        loading ? 'กำลังอัปเดต...' : 'อัปเดต',
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.js",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCancelEdit,
                                    className: "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition",
                                    disabled: loading,
                                    children: " ยกเลิก "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.js",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAdd,
                            className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition",
                            disabled: loading,
                            children: [
                                " ",
                                loading ? 'กำลังเพิ่ม...' : 'เพิ่มเพลง',
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/page.js",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "📄 รายการเพลงทั้งหมด"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    loading && songs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "กำลังโหลดข้อมูล..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 182,
                        columnNumber: 44
                    }, this) : songs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "ยังไม่มีข้อมูลเพลงในระบบ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 183,
                        columnNumber: 35
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y divide-gray-200",
                        children: songs.map((song)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "py-4 flex flex-col md:flex-row justify-between md:items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 md:mb-0 md:flex-1 md:mr-4 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-lg truncate",
                                                title: song.songTitle,
                                                children: song.songTitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "วง:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.js",
                                                        lineNumber: 190,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    song.bandName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "อัลบั้ม:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.js",
                                                        lineNumber: 191,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    song.albumTitle
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Album ID:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.js",
                                                        lineNumber: 192,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    song.albumId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Track:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/page.js",
                                                        lineNumber: 193,
                                                        columnNumber: 56
                                                    }, this),
                                                    " ",
                                                    song.trackNumber
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            song.youtubeLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: song.youtubeLink,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-sm text-blue-600 hover:text-blue-800 hover:underline break-all block mt-1",
                                                children: " 🔗 ลิงก์ YouTube "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 194,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.js",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-3 self-start md:self-center mt-2 md:mt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(song),
                                                className: "text-yellow-600 hover:text-yellow-800 hover:underline text-sm",
                                                disabled: loading || !!editId,
                                                children: " แก้ไข "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(song.id),
                                                className: "text-red-600 hover:text-red-800 hover:underline text-sm",
                                                disabled: loading || !!editId,
                                                children: " ลบ "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.js",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.js",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, song.id, true, {
                                fileName: "[project]/src/app/admin/page.js",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.js",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "eCijpKHm7du2GsIaOZ8pSa8p3/U=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_65e03c30._.js.map