
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASn9rJI9t-jGvMB-Zw1X8wYrY7ifPm1lk",
  authDomain: "clone-afac1.firebaseapp.com",
  projectId: "clone-afac1",
  storageBucket: "clone-afac1.appspot.com",
  messagingSenderId: "878184641223",
  appId: "1:878184641223:web:f06d8c2ed6818f79a284e2",
  measurementId: "G-J8DJWM39K4",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const auth = getAuth();
export { auth };
