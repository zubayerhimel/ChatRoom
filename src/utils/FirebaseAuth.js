import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyChVV1k1aPICH9lmErXIU6ynV7-cbvMKa4",
  authDomain: "chat-room-c7a6b.firebaseapp.com",
  databaseURL: "https://chat-room-c7a6b.firebaseio.com",
  projectId: "chat-room-c7a6b",
  storageBucket: "chat-room-c7a6b.appspot.com",
  messagingSenderId: "51725620081",
  appId: "1:51725620081:web:eea32405a6d203e808dcd0",
  measurementId: "G-23LJRCQH9J",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
