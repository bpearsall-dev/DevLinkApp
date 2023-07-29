import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore module if you are using it
import 'firebase/auth'; // Import Authentication module if you are using it

const firebaseConfig = {
  apiKey: "AIzaSyDJAbwJa4IHTfSKTCXnkrlC8TMHhajtnMM",
  authDomain: "devlink-8eb2e.firebaseapp.com",
  projectId: "devlink-8eb2e",
  storageBucket: "devlink-8eb2e.appspot.com",
  messagingSenderId: "1055542916079",
  appId: "1:1055542916079:web:565dbb7938081c24f13c1a",
  measurementId: "G-7CYWJW7LFR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
