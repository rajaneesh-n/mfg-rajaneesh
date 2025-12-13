// Firebase v8 (compat) configuration
var firebaseConfig = {
  apiKey: "AIzaSyA5E-S8AE_bJ6nnKr6edrteY5i8Y9yzgT0",
  authDomain: "mfg-rajaneesh.firebaseapp.com",
  databaseURL: "https://mfg-rajaneesh-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mfg-rajaneesh",
  storageBucket: "mfg-rajaneesh.appspot.com",
  messagingSenderId: "796044019068",
  appId: "1:796044019068:web:2cff2d8636c93e6a6510f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database reference
var db = firebase.database();
