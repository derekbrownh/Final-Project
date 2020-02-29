import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDdvb8rt3ZjjHKE0UoC9CTymTo3Btty-u0",
  authDomain: "final-project-f90b1.firebaseapp.com",
  databaseURL: "https://final-project-f90b1.firebaseio.com",
  projectId: "final-project-f90b1",
  storageBucket: "final-project-f90b1.appspot.com",
  messagingSenderId: "907142284295",
  appId: "1:907142284295:web:6f6120ff815feae0a896a2",
  measurementId: "G-2HNV7V5BMB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
