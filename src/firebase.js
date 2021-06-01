import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCih_yEK14reM2w8P8FSPE7rMnXmyb_x5o",
    authDomain: "netflix-clone-0015.firebaseapp.com",
    projectId: "netflix-clone-0015",
    storageBucket: "netflix-clone-0015.appspot.com",
    messagingSenderId: "835255447733",
    appId: "1:835255447733:web:dc34348d10768adcc60efc"
  };

export const Firebase = firebase.initializeApp(firebaseConfig)
export var provider = new firebase.auth.GoogleAuthProvider();