import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFMjTjXDXyOkegFG2MBX2Idazk2BnwiGU",
  authDomain: "mountain-hikes.firebaseapp.com",
  projectId: "mountain-hikes",
  storageBucket: "mountain-hikes.appspot.com",
  messagingSenderId: "471703357234",
  appId: "1:471703357234:web:82088916a3dee678ffb92b"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
