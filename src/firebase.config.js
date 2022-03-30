import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHD0dut6LKRhSC7EuiOw1kvP5Gu2Waluo",
  authDomain: "house-marketplace-app-27d30.firebaseapp.com",
  projectId: "house-marketplace-app-27d30",
  storageBucket: "house-marketplace-app-27d30.appspot.com",
  messagingSenderId: "904143966333",
  appId: "1:904143966333:web:0a29f51d072a29e32ca114",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
