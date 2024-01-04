import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBDWjnnGBqc-AWhp5hAO3GuAo6ypQ26nOM",
  authDomain: "money-counter-a9a62.firebaseapp.com",
  projectId: "money-counter-a9a62",
  storageBucket: "money-counter-a9a62.appspot.com",
  messagingSenderId: "908790000839",
  appId: "1:908790000839:web:a60b83abbe4859b87422e2",
  measurementId: "G-MRDDR35R6F",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
