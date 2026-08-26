import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvoL60ydMqBPiZKAGQ4vead0fGHUtijhk",
  authDomain: "dokan-592fd.firebaseapp.com",
  projectId: "dokan-592fd",
  storageBucket: "dokan-592fd.firebasestorage.app",
  messagingSenderId: "758318273886",
  appId: "1:758318273886:web:8eb0295676da2ff8b96bcf",
  measurementId: "G-NSZ9JYFDZX"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
