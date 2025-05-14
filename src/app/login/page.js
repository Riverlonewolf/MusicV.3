// app/login/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// --- 1. Import Firebase Auth และ auth instance ---
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // <-- ปรับ path ถ้า firebase.js ไม่ได้อยู่ใน lib

export default function LoginPage() {
  // --- !! เปลี่ยน username เป็น email เพื่อให้ตรงกับ Firebase Auth !! ---
  const [email, setEmail] = useState(''); // ใช้ email state
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();//ไม่ให้หน้าเว็บรีโหลดตัวเองแบบปกติเมื่อกดปุ่ม
    setError('');
    setIsLoading(true);

    try {
      // --- 2. แทนที่ Fetch ด้วย Firebase Sign In ---
      // ใช้ email และ password จาก state
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
      switch (err.code) {
        case 'auth/invalid-email':
          friendlyErrorMessage = 'รูปแบบอีเมลไม่ถูกต้อง';
          break;
        case 'auth/user-disabled':
          friendlyErrorMessage = 'บัญชีผู้ใช้นี้ถูกปิดใช้งาน';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential': // สำหรับ SDK เวอร์ชั่นใหม่ๆ
          friendlyErrorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
          break;
        default:
          friendlyErrorMessage = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';
      }
      setError(friendlyErrorMessage);

    } finally {
      setIsLoading(false); // หยุด loading เสมอ
    }
  };//ถ้ามีอะไรผิดพลาด เช่น:กรอกอีเมลผิดรหัสผ่านไม่ถูกหรือบัญชีไม่มีอยู่ เราก็จะ แสดงข้อความ error แบบที่ผู้ใช้เข้าใจง่าย เช่น:“อีเมลหรือรหัสผ่านไม่ถูกต้อง”“รูปแบบอีเมลไม่ถูกต้อง” ฯลฯ

  return (
    
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>เข้าสู่ระบบแอดมิน</h1>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            {/* --- เปลี่ยนเป็น Input สำหรับ Email --- */}
            <label htmlFor="email" style={styles.label}>อีเมล:</label>
            <input
              type="email" // ใช้ type="email"
              id="email"
              value={email} // ผูกกับ email state
              onChange={(e) => setEmail(e.target.value)} // อัปเดต email state
              style={styles.input}
              required
              disabled={isLoading}
              placeholder="กรอกอีเมล"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>รหัสผ่าน:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
              disabled={isLoading}
              placeholder="กรอกรหัสผ่าน"
            />
          </div>
          
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>
      </div>
    </div>
  );
  
}

// --- Styles (เหมือนเดิม) ---
const styles = {
   
        container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: "'Kanit', sans-serif",
        },
        loginBox: {
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
        },
        title: {
        marginBottom: '30px',
        color: '#333',
        fontSize: '1.8rem',
        },
        inputGroup: {
        marginBottom: '20px',
        textAlign: 'left',
        },
        label: {
        display: 'block',
        marginBottom: '5px',
        color: '#555',
        fontWeight: '500',
        },
        input: {
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        boxSizing: 'border-box',
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
        marginTop: '10px',
        },
        'button:disabled': { // เพิ่ม style สำหรับปุ่ม disabled
        backgroundColor: '#a0cfff',
        cursor: 'not-allowed',
        },
        error: {
        color: 'red',
        marginTop: '-10px',
        marginBottom: '15px',
        fontSize: '0.9rem',
        }
};