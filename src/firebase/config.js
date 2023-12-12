// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK0YlUzEUMBwJiSHBYJyETuKXQtgwj78Q",
  authDomain: "miniblog-4371e.firebaseapp.com",
  projectId: "miniblog-4371e",
  storageBucket: "miniblog-4371e.appspot.com",
  messagingSenderId: "1035593906810",
  appId: "1:1035593906810:web:51cbcc122aaf47147759c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
