'use client'
import Image from "next/image";
import { app, auth, ui } from "../../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';
import { uiConfig } from '../../../firebase/firebaseAuth';
import firebase from "firebase/compat/app";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function page() {

  const router = useRouter();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, user);

  return (
    <div className="flex flex-col items-center w-full h-full space-y-20">
      <h1>Home Page</h1>
      <p>(This is where users can see their recommendations and stuff)</p>
      <button onClick={() => {signOut(auth); setUser(null)}}>Sign Out</button>
    </div>
  );
}
