
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQcWnNJ4cn8-kMqTQvi8oix89uhERliS8",
  authDomain: "nativedevdiary-273e3.firebaseapp.com",
  projectId: "nativedevdiary-273e3",
  storageBucket: "nativedevdiary-273e3.appspot.com",
  messagingSenderId: "610069027399",
  appId: "1:610069027399:web:799723bd41957d02e1ef62",
  measurementId: "G-TX6KW0PPC8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export const firestore = firebase.firestore();