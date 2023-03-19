import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4PTDtAeG_9jBFGCYSC3Zd5GMfcTEqyQ",
  authDomain: "panaderia-los-sabores.firebaseapp.com",
  projectId: "panaderia-los-sabores",
  storageBucket: "panaderia-los-sabores.appspot.com",
  messagingSenderId: "1037886081983",
  appId: "1:1037886081983:web:657a7ece8c8da0ae226f0a"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

