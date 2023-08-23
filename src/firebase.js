import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB3dAhN0vzY3EEAbWOXcMUs5hdI0Hqg37A",
  authDomain: "practiceapp-18bd7.firebaseapp.com",
  projectId: "practiceapp-18bd7",
  storageBucket: "practiceapp-18bd7.appspot.com",
  messagingSenderId: "629015991551",
  appId: "1:629015991551:web:7dd31a706167858c24a8ca",
  measurementId: "G-DKD4BHR8D5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

