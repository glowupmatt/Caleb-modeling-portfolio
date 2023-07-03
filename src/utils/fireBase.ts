// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPpLGTpHSEgf-1r9H2E8pXt69jkcUxyjo",
  authDomain: "calebprotfolio.firebaseapp.com",
  projectId: "calebprotfolio",
  storageBucket: "calebprotfolio.appspot.com",
  messagingSenderId: "1073204073959",
  appId: "1:1073204073959:web:75ffb5163428a57f86d942",
  databaseURL: "https://calebprotfolio-default-rtdb.firebaseio.com/:",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
