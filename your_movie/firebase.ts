// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRwzHRLKaazg7JKamQjyCHRDNsOS94eyE",
    authDomain: "your-movie-24ecc.firebaseapp.com",
    projectId: "your-movie-24ecc",
    storageBucket: "your-movie-24ecc.appspot.com",
    messagingSenderId: "892513166727",
    appId: "1:892513166727:web:3d841f30999c56b8405f22"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }