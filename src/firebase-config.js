import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
    authDomain: "workouts-b6027.firebaseapp.com",
    projectId: "workouts-b6027",
    storageBucket: "workouts-b6027.appspot.com",
    messagingSenderId: "353500622525",
    appId: "1:353500622525:web:2ca8fb5bbd04504f5551d4"
};

let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp(); 
}

export const db = getFirestore(app);