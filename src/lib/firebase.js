// lib/firebase.js (หรือ src/lib/firebase.js)

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

// -------- นี่คือบรรทัดที่สำคัญ --------
// Export สิ่งที่ต้องการให้ไฟล์อื่นนำไปใช้
export { app, auth, db };
// -------------------------------------