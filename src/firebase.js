import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAOW8PoLAr2XiCobNTjtEa0Ubi8To22v8A",
  authDomain: "final-project-v2-d6704.firebaseapp.com",
  databaseURL: "https://final-project-v2-d6704.firebaseio.com",
  projectId: "final-project-v2-d6704",
  storageBucket: "final-project-v2-d6704.appspot.com",
  messagingSenderId: "140557368472",
  appId: "1:140557368472:web:83defd1baea55761d5e4ed",
  measurementId: "G-RBXM2NETQ5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export function snapshotToArray(snapshot) {
  const updated_array = []
  snapshot.forEach((s)=>{
    const data = s.data()
    data.id = s.id
    updated_array.push(data)
  });
  return updated_array
}