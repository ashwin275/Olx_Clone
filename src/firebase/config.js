import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp6PYjH18EtbXM4a23QU5CYzJDAOYwNso",
    authDomain: "olx-clone-bfd1a.firebaseapp.com",
    projectId: "olx-clone-bfd1a",
    storageBucket: "olx-clone-bfd1a.appspot.com",
    messagingSenderId: "868406539789",
    appId: "1:868406539789:web:f42114401b0f7fc0478744",
    measurementId: "G-B4713HBR2H"
  };


export default firebase.initializeApp(firebaseConfig)