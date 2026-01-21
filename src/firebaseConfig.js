import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACENcr_mz6lg1J1paJJfT-1jiEcNbSV98",
  authDomain: "studymate-399.firebaseapp.com",
  projectId: "studymate-399",
  storageBucket: "studymate-399.appspot.com",
  messagingSenderId: "90333542039",
  appId: "1:90333542039:web:ac428b2b9aa7f709545bd2",
  measurementId: "G-KPYXKRCS36",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
