
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAAx8y3gRUOI6L4F7TPvhApMS503M5Kzrk",
  authDomain: "newsai-b4525.firebaseapp.com",
  projectId: "newsai-b4525",
  storageBucket: "newsai-b4525.firebasestorage.app",
  messagingSenderId: "716085867117",
  appId: "1:716085867117:web:8bc8f35930ecabd5e2c564",
  measurementId: "G-DPZVHWY3HG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
