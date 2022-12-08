import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD_g-FLVtvdUP0Znb-BtXvj5IDuDPIBqjc',
    authDomain: 'fir-6bed1.firebaseapp.com',
    projectId: 'fir-6bed1',
    storageBucket: 'fir-6bed1.appspot.com',
    messagingSenderId: '630900973455',
    appId: '1:630900973455:web:b8890d999783cdba5535fa',
    measurementId: 'G-SPXZGZ1Z61',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
