import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/firestore";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

let app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let auth = getAuth(app);

let ui = new firebaseui.auth.AuthUI(auth);

export { app, auth, ui };