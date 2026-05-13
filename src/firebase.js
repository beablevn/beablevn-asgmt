import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6AsTi8cf7JpvZByapPyJ2pPOXfnKlaUQ",
  authDomain: "beablevn-asgmt.firebaseapp.com",
  projectId: "beablevn-asgmt",
  storageBucket: "beablevn-asgmt.firebasestorage.app",
  messagingSenderId: "16902127503",
  appId: "1:16902127503:web:576a8f8858327e14c395fa"
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo và export các dịch vụ (Khai báo db 1 lần duy nhất ở đây)
export const auth = getAuth(app);
export const db = getFirestore(app);

// THÊM ĐOẠN CODE NÀY ĐỂ BẬT OFFLINE PERSISTENCE
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.warn("Lỗi: Có nhiều tab đang mở ứng dụng. Chế độ offline chỉ hoạt động trên 1 tab.");
    } else if (err.code == 'unimplemented') {
      console.warn("Lỗi: Trình duyệt của bạn không hỗ trợ bộ nhớ offline.");
    }
  });