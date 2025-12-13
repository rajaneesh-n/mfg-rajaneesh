var firebaseConfig = {
  apiKey: "AIzaSyA5E-S8AE_bJ6nnKroedrteY5I8Y9yzgI0",
  authDomain: "mfg-rajaneesh.firebaseapp.com",
  databaseURL: "https://mfg-rajaneesh-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mfg-rajaneesh",
  storageBucket: "mfg-rajaneesh.appspot.com",
  messagingSenderId: "796044019068",
  appId: "1:796044019068:web:2cff28d63c93e6a6510f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* =========================
   SCANNER CONFIG (ADD THIS)
   ========================= */

const SCANNERS = {
  WMS: [
    "3245",
    "2699",
    "3669",
    "3456"
  ],
  MUSHINY: [
    "M101",
    "M102",
    "M103"
  ]
};
