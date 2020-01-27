import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFlAImJXP2_dyFyOd-Ay8zCBvD9-A5x3Q",
  authDomain: "crwn-db-2c8c4.firebaseapp.com",
  databaseURL: "https://crwn-db-2c8c4.firebaseio.com",
  projectId: "crwn-db-2c8c4",
  storageBucket: "crwn-db-2c8c4.appspot.com",
  messagingSenderId: "567086134884",
  appId: "1:567086134884:web:56f54f2ed506c38c2ed171",
  measurementId: "G-5507KB2S13"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
