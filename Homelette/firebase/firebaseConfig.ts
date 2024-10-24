// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace the below config with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ_DV2YTIJm_oA-ITdy1I4kQAHRaB5fsk",
  authDomain: "team14-sublet-1034a.firebaseapp.com",
  projectId: "team14-sublet-1034a",
  storageBucket: "team14-sublet-1034a.appspot.com",
  messagingSenderId: "227281162992",
  appId: "1:227281162992:web:ad7bc4f3a19de5f557a835",
  measurementId: "G-NN10YB68DC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
