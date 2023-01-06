import { getAuth } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB8SzdL7J09sYwlT_MUMsQbPtQCT38XRmY',
  authDomain: 'drivent7.firebaseapp.com',
  projectId: 'drivent7',
  storageBucket: 'drivent7.appspot.com',
  messagingSenderId: '100938677264',
  appId: '1:100938677264:web:8ebdaca0fb4fa8caff5e95',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  LOGIN GITHUB FIREBASE

export const provider = new GithubAuthProvider();

export const auth = getAuth(app);
