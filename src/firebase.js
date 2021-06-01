import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",         // Your Firebase API KEYS
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

export const Firebase = firebase.initializeApp(firebaseConfig)
export var provider = new firebase.auth.GoogleAuthProvider();
