import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKx0Kv2KmPHdDT0DLgqL5WykdSbyLHo5s",
  authDomain: "tiendajlz.firebaseapp.com",
  projectId: "tiendajlz",
  storageBucket: "tiendajlz.appspot.com",
  messagingSenderId: "784062451375",
  appId: "1:784062451375:web:9070fae298dc83abbb8e5a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
