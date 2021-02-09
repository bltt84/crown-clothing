import firebase from 'firebase/app';
import 'firebase/firestore'; // Import database
import 'firebase/auth'; // Import Authenticate

const config = {
    apiKey: "AIzaSyC2cOBbsk3DnwOInv8clxtU5IQXkbhm1i0",
    authDomain: "crown-db-4e332.firebaseapp.com",
    projectId: "crown-db-4e332",
    storageBucket: "crown-db-4e332.appspot.com",
    messagingSenderId: "27334121855",
    appId: "1:27334121855:web:7baa3417cca0cbcce8624a",
    measurementId: "G-NN4VFSZFRY"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth(); // export Authenticate
  export const firestore = firebase.firestore(); // export database;

  const provider = new firebase.auth.GoogleAuthProvider(); // give Access to this new Google auth provider class from the authentication library.
  provider.setCustomParameters({ prompt: ' ' }); // Trigger google pop-up when ever we use this Google auth
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;