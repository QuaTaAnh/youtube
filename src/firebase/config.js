import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBEIlDbON14cS4yA1-_1ylc22rgXvSS5JI',
    authDomain: 'app-1c103.firebaseapp.com',
    projectId: 'app-1c103',
    storageBucket: 'app-1c103.appspot.com',
    messagingSenderId: '984916715422',
    appId: '1:984916715422:web:ef0e5702291ea8db02588f',
    measurementId: 'G-G72LL970GN',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
