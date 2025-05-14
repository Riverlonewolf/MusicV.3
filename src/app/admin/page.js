// app/admin/page.js (หรือหน้าที่ต้องการ)
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getFirestore, collection, addDoc, getDocs, doc, deleteDoc,
  updateDoc, serverTimestamp, query, orderBy
} from "firebase/firestore";
import { db } from '@/lib/firebase';

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
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      setLoading(true);
      const songsCollection = collection(db, "songs");
      const q = query(songsCollection, orderBy("createdAt", "desc"));
      const songsSnapshot = await getDocs(q);
      const songsList = songsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSongs(songsList);
      setError(null);
    } catch (err) {
      console.error("Error fetching songs:", err);
      setError("ไม่สามารถโหลดข้อมูลเพลงได้");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // =================================================================
  // START: สร้างฟังก์ชัน handleCancelEdit ตรงนี้
  // =================================================================
  const handleCancelEdit = () => {
    setEditId(null); // 1. ยกเลิกการแก้ไข (เคลียร์ ID ที่กำลังแก้ไข)
    setForm({        // 2. ล้างข้อมูลในฟอร์มให้ว่าง
      bandName: '',
      albumTitle: '',
      songTitle: '',
      youtubeLink: '',
      albumId: '',
      trackNumber: ''
    });
    setError(null); // 3. (ถ้ามี) เคลียร์ error message
  };
  // =================================================================
  // END: สร้างฟังก์ชัน handleCancelEdit
  // =================================================================

  const handleAdd = async () => {
    // 1. ตรวจสอบว่ากรอกข้อมูลครบไหม
    if (!form.bandName || !form.albumTitle || !form.songTitle || !form.albumId || !form.trackNumber /* || !form.youtubeLink  // youtubeLink อาจจะไม่บังคับ */) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }
    const trackNum = parseInt(form.trackNumber, 10);
    if (isNaN(trackNum) || trackNum <= 0) {
      setError("Track Number ต้องเป็นตัวเลขมากกว่า 0");
      return;
    }

    try {
      setLoading(true);
      const docData = {
        bandName: form.bandName.trim(),
        albumTitle: form.albumTitle.trim(),
        songTitle: form.songTitle.trim(), // เพิ่ม songTitle
        youtubeLink: form.youtubeLink.trim(), // เพิ่ม youtubeLink
        albumId: form.albumId.trim(),       // เพิ่ม albumId
        trackNumber: trackNum,
        createdAt: serverTimestamp()
      };
      const docRef = await addDoc(collection(db, "songs"), docData);

      // createdAt ที่ได้จาก serverTimestamp จะเป็น null ทันทีหลัง addDoc
      // แต่จะถูก populate โดย Firestore ทีหลัง
      // เพื่อให้ UI อัปเดตทันที เราสามารถใช้ new Date() ไปก่อนได้
      // หรือจะ fetchSongs() ใหม่ก็ได้ แต่จะช้ากว่า
      const newSongForState = {
        id: docRef.id,
        ...docData,
        createdAt: { seconds: Math.floor(new Date().getTime() / 1000), nanoseconds: 0 } // จำลอง Timestamp object
      };
      // setSongs([{ id: docRef.id, ...docData, createdAt: new Date() }, ...songs ]); // แบบเดิมก็ได้
      setSongs([newSongForState, ...songs]);


      setForm({ bandName: '', albumTitle: '', songTitle: '', youtubeLink: '', albumId: '', trackNumber: '' });
      setError(null);
    } catch (err) {
      console.error("Error adding song:", err);
      setError("เกิดข้อผิดพลาดในการเพิ่มเพลง: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm(`ต้องการลบเพลง ID: ${id} ใช่หรือไม่?`)) return;
    try {
      setLoading(true);
      await deleteDoc(doc(db, "songs", id));
      setSongs(songs.filter((song) => song.id !== id));
      setError(null);
    } catch (err) {
      console.error("Error deleting song:", err);
      setError("เกิดข้อผิดพลาดในการลบเพลง: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!form.bandName || !form.albumTitle || !form.songTitle || !form.albumId || !form.trackNumber /* || !form.youtubeLink */) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่องสำหรับการแก้ไข");
      return;
    }
    const trackNum = parseInt(form.trackNumber, 10);
    if (isNaN(trackNum) || trackNum <= 0) {
      setError("Track Number ต้องเป็นตัวเลขมากกว่า 0");
      return;
    }
    if (!editId) return;

    try {
      setLoading(true);
      const songRef = doc(db, "songs", editId);
      const updatedData = {
        bandName: form.bandName.trim(),
        albumTitle: form.albumTitle.trim(),
        songTitle: form.songTitle.trim(),     // เพิ่ม songTitle
        youtubeLink: form.youtubeLink.trim(), // เพิ่ม youtubeLink
        albumId: form.albumId.trim(),         // เพิ่ม albumId
        trackNumber: trackNum,
        updatedAt: serverTimestamp()
      };
      await updateDoc(songRef, updatedData);

      setSongs(
        songs.map((song) =>
          song.id === editId ? {
            ...song, // เก็บค่าเดิมไว้ เช่น createdAt
            ...updatedData, // เอาค่าใหม่มาทับ
            // updatedAt: new Date() // ถ้าอยากให้ UI เห็นทันที (serverTimestamp จะอัปเดตทีหลัง)
            updatedAt: { seconds: Math.floor(new Date().getTime() / 1000), nanoseconds: 0 } // จำลอง Timestamp object
          } : song
        )
      );
      handleCancelEdit(); // <<<< เรียกใช้ฟังก์ชันที่สร้างขึ้น
    } catch (err) {
      console.error("Error updating song:", err);
      setError("เกิดข้อผิดพลาดในการอัปเดตเพลง: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (song) => {
    setEditId(song.id);
    setForm({
      bandName: song.bandName || '',
      albumTitle: song.albumTitle || '',
      songTitle: song.songTitle || '',       // เพิ่ม songTitle
      youtubeLink: song.youtubeLink || '',   // เพิ่ม youtubeLink
      albumId: song.albumId || '',           // เพิ่ม albumId
      trackNumber: song.trackNumber !== undefined ? String(song.trackNumber) : '',
    });
    setError(null); // เคลียร์ error เก่าเมื่อเริ่มแก้ไข
  };


  // ... (ส่วน JSX ไม่เปลี่ยนแปลงจากโค้ดเดิมของคุณ ยกเว้นส่วน error handling หรือ UI อื่นๆ ที่คุณอาจจะปรับปรุง)
  // ... (โค้ด JSX ที่เหลือเหมือนเดิม) ...
  return (
    <div className="max-w-4xl mx-auto p-4">

      <div className="mb-4">
        <Link href="/">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition duration-150 ease-in-out text-sm inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            กลับหน้าหลัก
          </button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4"> แอดมินเองจ้า</h1>

      {error && ( <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert"><p>{error}</p></div> )}

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
        <input type="url" name="youtubeLink" placeholder="ลิงก์ YouTube (https://...)" value={form.youtubeLink} onChange={handleChange} className="border p-2 rounded w-full mb-4" /* required  อาจจะไม่บังคับ */ disabled={loading} />
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
                   {/* แสดงเวลา createdAt และ updatedAt (ถ้ามี) */}
                   {song.createdAt && <p className="text-xs text-gray-500">สร้าง: {new Date(song.createdAt.seconds * 1000).toLocaleString()}</p>}
                   {song.updatedAt && <p className="text-xs text-gray-500">แก้ไขล่าสุด: {new Date(song.updatedAt.seconds * 1000).toLocaleString()}</p>}
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