// app/login/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // --- 1. State ใหม่สำหรับแสดง/ซ่อนรหัสผ่าน ---
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Firebase Login successful:', userCredential.user);
      router.push('/admin');
    } catch (err) {
      console.error('Firebase Login Error:', err.code, err.message);
      let friendlyErrorMessage = 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ';
      switch (err.code) {
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
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => { // --- 2. ฟังก์ชันสำหรับสลับการแสดงรหัสผ่าน ---
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>เข้าสู่ระบบแอดมิน</h1>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>อีเมล:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
              disabled={isLoading}
              placeholder="กรอกอีเมล"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>รหัสผ่าน:</label>
            {/* --- 3. Wrapper สำหรับ input รหัสผ่านและปุ่มสลับ --- */}
            <div style={styles.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'} // --- เปลี่ยน type ตาม state ---
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.inputPassword} // --- ใช้ style ใหม่สำหรับ input ที่มีปุ่ม ---
                required
                disabled={isLoading}
                placeholder="กรอกรหัสผ่าน"
              />
              <button
                type="button" // --- สำคัญ: type="button" เพื่อไม่ให้ submit form ---
                onClick={togglePasswordVisibility}
                style={styles.togglePasswordButton}
                disabled={isLoading}
                aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"} // Accessibility
              >
                {/* คุณสามารถใช้ Icon แทนข้อความได้ */}
                {showPassword ? 'ซ่อน' : 'แสดง'}
              </button>
            </div>
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

// --- Styles (มีการเพิ่มและปรับปรุง) ---
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: "'Kanit', sans-serif", // แนะนำให้ใส่ font ใน global CSS หรือ layout
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
  input: { // Style สำหรับ input ทั่วไป (เช่น email)
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  // --- 4. Styles ใหม่สำหรับ Password Input และ Toggle Button ---
  passwordInputContainer: {
    position: 'relative', // เพื่อให้ปุ่ม toggle สามารถจัดตำแหน่ง absolute ภายในได้
    width: '100%',
  },
  inputPassword: { // Style สำหรับ input password โดยเฉพาะ
    width: '100%',
    padding: '12px 45px 12px 15px', // เพิ่ม padding ด้านขวาสำหรับปุ่ม
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  togglePasswordButton: {
    position: 'absolute',
    right: '1px', // ชิดขอบขวาของ input container
    top: '1px',   // ชิดขอบบนของ input container
    bottom: '1px',// ชิดขอบล่างของ input container
    width: 'auto', //ปรับขนาดตาม content
    minWidth: '50px', //กำหนดความกว้างขั้นต่ำ
    padding: '0 10px',
    border: 'none',
    borderLeft: '1px solid #eee', // เส้นแบ่งบางๆ (optional)
    background: 'transparent',
    cursor: 'pointer',
    color: '#007bff', // สีให้เข้ากับปุ่มหลัก
    fontSize: '0.85em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 3px 3px 0', // ทำให้มุมขวาของปุ่มโค้งมนเข้ากับ input
  },
  // --- สิ้นสุด Styles ใหม่ ---
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
  'button:disabled': {
    backgroundColor: '#a0cfff', // ควรใช้ pseudo-class :disabled ใน CSS จริง
    cursor: 'not-allowed',
  },
  error: {
    color: 'red',
    marginTop: '-10px',
    marginBottom: '15px',
    fontSize: '0.9rem',
  }
};