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
import { onAuthStateChanged } from "firebase/auth";

export default function page() {

  const router = useRouter();
  console.log(auth);

  useEffect(() => {
    ui.start("#firebaseui-auth-container", uiConfig);
  });

  useEffect(() => {
    if (auth.currentUser) {
      router.push("/home");
    }
  }, auth.currentUser);

  return (
      <div className="flex flex-col justify-between m-auto w-[90%] h-[70vh]">
        <div className="flex mx-auto my-0 h-[15%] items-center">
          <img id="note" src="/white.jpg" className=" w-20 h-auto" alt="hello"/>
          <button onClick={() => router.push("/")} id="header" className="poetsen-one-regular mt-4" >New Music Recs</button>
        </div>
        <div id="firebaseui-auth-container" className="border-2 border-white rounded w-auto mx-auto"></div>
        <div />
      </div>
  )
}
