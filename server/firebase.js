// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8NnBm3AzBCDYwNE60faxNQewix0ZGzqc",
    authDomain: "thienproject-2a65d.firebaseapp.com",
    databaseURL: "https://thienproject-2a65d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thienproject-2a65d",
    storageBucket: "thienproject-2a65d.appspot.com",
    messagingSenderId: "640479499135",
    appId: "1:640479499135:web:b2213ed3b79a2311edc04a",
    measurementId: "G-MSLRVZL4KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);