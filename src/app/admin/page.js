// app/admin/page.js (หรือหน้าที่ต้องการ)
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // <<<--- 1. เพิ่ม Import นี้เข้ามา
import {
  getFirestore, collection, addDoc, getDocs, doc, deleteDoc,
  updateDoc, serverTimestamp, query, orderBy
} from "firebase/firestore";
import { db } from '@/lib/firebase'; // *** ตรวจสอบ path นี้ให้ถูกต้อง ***

export default function AdminPage() {
  const [songs, setSongs] = useState([]);
  const [form, setForm] = useState({
    bandName: '', albumTitle: '', songTitle: '', youtubeLink: '',
    albumId: '', trackNumber: ''
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSongs();// สั่งให้ไปดึงรายการเพลงมาแสดงทันที
  }, []);

  const fetchSongs = async () => {
    try {
      setLoading(true); // 1. "กำลังโหลดเพลง..."
      const songsCollection = collection(db, "songs"); // 2.ไปที่collection "songs"
      const q = query(songsCollection, orderBy("createdAt", "desc"));// 3. สร้างคำสั่ง: "ขอดูเพลงใน collectionsongs ทั้งหมด โดยเรียงตาม createdAt (เวลาที่สร้าง) จากใหม่สุดไปเก่าสุด"
      const songsSnapshot = await getDocs(q); // 4. ส่งคำสั่งไป Firebase แล้วรอข้อมูลกลับมา
      // 5. แปลงข้อมูลที่ได้ (songsSnapshot) ให้อยู่ในรูปแบบที่เราใช้งานง่าย
      const songsList = songsSnapshot.docs.map(doc => ({
        id: doc.id,    // เอา ID ของเพลงมาด้วย
        ...doc.data() // เอาข้อมูลอื่นๆ ทั้งหมดของเพลงนั้นมา
      }));
      setSongs(songsList); // 6. เอารายการเพลงที่ได้ไปใส่ใน "สมุดรายการเพลง" (State `songs`)
      setError(null);      // 7. ถ้าเคยมี error ก็ล้างทิ้งไป
    } catch (err) {
      console.error("Error fetching songs:", err);
      setError("ไม่สามารถโหลดข้อมูลเพลงได้"); // 8. ถ้ามีปัญหา
    } finally {
      setLoading(false); // 9. "โหลดเสร็จแล้ว!" (ไม่ว่าจะสำเร็จหรือล้มเหลว)
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };//ฟังก์ชันนี้จะทำงาน ทุกครั้งที่เราพิมพ์อะไรลงไปในช่องกรอกข้อมูล (input fields)

  const handleAdd = async () => {
    // 1. ตรวจสอบว่ากรอกข้อมูลครบไหม
    if (!form.bandName || !form.albumTitle || /* ... */ !form.trackNumber) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง..."); return;
    }
    const trackNum = parseInt(form.trackNumber, 10); // แปลง Track Number เป็นตัวเลข
    if (isNaN(trackNum) || trackNum <= 0) { /* ... แจ้ง error ... */ return; }
  
    try {
      setLoading(true); // 2. "กำลังเพิ่มเพลง..."
      // 3. เตรียมข้อมูลเพลงที่จะบันทึกลง Firebase
      const docData = {
        bandName: form.bandName.trim(), // .trim() คือตัดช่องว่างหน้า-หลัง
        albumTitle: form.albumTitle.trim(),
        // ... (ข้อมูลอื่นๆ) ...
        trackNumber: trackNum,
        createdAt: serverTimestamp() // 4. ใส่ "ตราประทับเวลา" ตอนสร้าง
      };
      // 5. สั่ง Firebase ให้เพิ่มข้อมูลนี้เข้าไปในแฟ้ม "songs"
      const docRef = await addDoc(collection(db, "songs"), docData);
  
      // 6. อัปเดต "สมุดรายการเพลง" (State `songs`) บนหน้าเว็บทันที โดยไม่ต้องรอโหลดใหม่
      setSongs([{ id: docRef.id, ...docData, createdAt: new Date() }, ...songs ]);
      //    - `id: docRef.id`: Firebase จะคืน ID ของเพลงที่เพิ่งสร้างมาให้
      //    - `createdAt: new Date()`: ใช้เวลาปัจจุบันของเครื่องเราไปก่อน (serverTimestamp จะอัปเดตทีหลัง)
  
      setForm({ bandName: '', /* ... ล้างฟอร์ม ... */ }); // 7. ล้างข้อมูลในฟอร์มให้ว่าง
      setError(null); // 8. เคลียร์ error
    } catch (err) { /* ... จัดการ error ... */ }
    finally { setLoading(false); } // 9. "เพิ่มเสร็จแล้ว!"
  };

  const handleDelete = async (id) => {
    // 1. ถามยืนยันก่อนลบ
    if (!confirm(`ต้องการลบเพลง ID: ${id} ใช่หรือไม่?`)) return;
    try {
      setLoading(true); // 2. "กำลังลบ..."
      // 3. สั่ง Firebase ให้ลบเพลงที่มี ID นี้ออกจากแฟ้ม "songs"
      await deleteDoc(doc(db, "songs", id));
      // 4. อัปเดต "สมุดรายการเพลง" (State `songs`) บนหน้าเว็บ โดยกรองเพลงที่ถูกลบออกไป
      setSongs(songs.filter((song) => song.id !== id));
      setError(null);
    } catch (err) { /* ... จัดการ error ... */ }
    finally { setLoading(false); } // 5. "ลบเสร็จแล้ว!"
  };
  const handleUpdate = async () => {
    // 1. ตรวจสอบข้อมูลเหมือนตอน Add
    if (!form.bandName || /* ... */ !form.trackNumber) { /* ... */ return; }
    const trackNum = parseInt(form.trackNumber, 10);
    if (isNaN(trackNum) || trackNum <= 0) { /* ... */ return; }
    if (!editId) return; // ถ้าไม่มี editId (ไม่ได้อยู่ในโหมดแก้ไข) ก็ไม่ต้องทำอะไร
  
    try {
      setLoading(true); // 2. "กำลังอัปเดต..."
      const songRef = doc(db, "songs", editId); // 3. ชี้ไปยังเพลงที่เรากำลังจะแก้ไขใน Firebase
      // 4. เตรียมข้อมูลที่อัปเดต (เอามาจากฟอร์ม)
      await updateDoc(songRef, {
        bandName: form.bandName.trim(),
        // ... (ข้อมูลอื่นๆ ที่อัปเดต) ...
        trackNumber: trackNum,
        updatedAt: serverTimestamp() // 5. ใส่ "ตราประทับเวลา" ตอนอัปเดต
      });
      // 6. อัปเดต "สมุดรายการเพลง" (State `songs`) บนหน้าเว็บ
      setSongs(
        songs.map((song) =>
          song.id === editId ? { ...song, /* ... ใส่ข้อมูลใหม่ที่อัปเดต ... */ } : song
        )
      );
      handleCancelEdit(); // 7. ออกจากโหมดแก้ไข (ล้างฟอร์ม, editId เป็น null)
    } catch (err) { /* ... จัดการ error ... */ }
    finally { setLoading(false); } // 8. "อัปเดตเสร็จแล้ว!"
  };
  const handleEdit = (song) => {
    setEditId(song.id); // 1. จำ ID ของเพลงที่เราจะแก้ไข
    // 2. เอาข้อมูลของเพลงนั้นมาใส่ใน "แบบฟอร์ม"
    setForm({
      bandName: song.bandName || '',
      albumTitle: song.albumTitle || '',
      // ... (ข้อมูลอื่นๆ ของเพลง) ...
      trackNumber: song.trackNumber !== undefined ? String(song.trackNumber) : '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">

      {/* --- 2. เพิ่มปุ่ม Link กลับ ตรงนี้ --- */}
      <div className="mb-4">
        <Link href="/"> {/* <<<===== แก้ Path ตรงนี้ เป็นหน้าที่ต้องการกลับไป ===== */}
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition duration-150 ease-in-out text-sm inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            กลับหน้าหลัก {/* <<<--- แก้ข้อความได้ */}
          </button>
        </Link>
      </div>
      {/* --- สิ้นสุดส่วนปุ่มกลับ --- */}


      <h1 className="text-2xl font-bold mb-4"> แอดมินเองจ้า</h1>

      {error && ( <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert"><p>{error}</p></div> )}

      {/* Form Inputs */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">{editId ? '✏️ แก้ไขข้อมูลเพลง' : '➕ เพิ่มเพลงใหม่'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <input type="text" name="bandName" placeholder="ชื่อวงดนตรี" value={form.bandName} onChange={handleChange} className="border p-2 rounded w-full" required disabled={loading} />
          <input type="text" name="albumTitle" placeholder="ชื่ออัลบั้ม" value={form.albumTitle} onChange={handleChange} className="border p-2 rounded w-full" required disabled={loading} />
          <input type="text" name="albumId" placeholder="Album ID" value={form.albumId} onChange={handleChange} className="border p-2 rounded w-full" required disabled={loading} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <input type="text" name="songTitle" placeholder="ชื่อเพลง" value={form.songTitle} onChange={handleChange} className="border p-2 rounded w-full" required disabled={loading} />
          <input type="number" name="trackNumber" placeholder="Track Number" value={form.trackNumber} onChange={handleChange} className="border p-2 rounded w-full" required min="1" disabled={loading} />
        </div>
        <input type="url" name="youtubeLink" placeholder="ลิงก์ YouTube (https://...)" value={form.youtubeLink} onChange={handleChange} className="border p-2 rounded w-full mb-4" required disabled={loading} />
        <div className="flex space-x-2 justify-end">
          {editId ? (
            <>
              <button onClick={handleUpdate} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition" disabled={loading}> {loading ? 'กำลังอัปเดต...' : 'อัปเดต'} </button>
              <button onClick={handleCancelEdit} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition" disabled={loading}> ยกเลิก </button>
            </>
          ) : (
            <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition" disabled={loading}> {loading ? 'กำลังเพิ่ม...' : 'เพิ่มเพลง'} </button>
          )}
        </div>
      </div>

      {/* Song List */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">📄 รายการเพลงทั้งหมด</h2>
        {loading && songs.length === 0 ? ( <p className="text-gray-500">กำลังโหลดข้อมูล...</p> )
         : songs.length === 0 ? ( <p className="text-gray-500">ยังไม่มีข้อมูลเพลงในระบบ</p> )
         : (
          <ul className="divide-y divide-gray-200">
            {songs.map((song) => (
              <li key={song.id} className="py-4 flex flex-col md:flex-row justify-between md:items-start">
                <div className="mb-2 md:mb-0 md:flex-1 md:mr-4 overflow-hidden">
                  <p className="font-semibold text-lg truncate" title={song.songTitle}>{song.songTitle}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">วง:</span> {song.bandName}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">อัลบั้ม:</span> {song.albumTitle}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Album ID:</span> {song.albumId}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Track:</span> {song.trackNumber}</p>
                  {song.youtubeLink && ( <a href={song.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline break-all block mt-1"> 🔗 ลิงก์ YouTube </a> )}
                </div>
                <div className="flex space-x-3 self-start md:self-center mt-2 md:mt-0">
                  <button onClick={() => handleEdit(song)} className="text-yellow-600 hover:text-yellow-800 hover:underline text-sm" disabled={loading || !!editId}> แก้ไข </button>
                  <button onClick={() => handleDelete(song.id)} className="text-red-600 hover:text-red-800 hover:underline text-sm" disabled={loading || !!editId}> ลบ </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}