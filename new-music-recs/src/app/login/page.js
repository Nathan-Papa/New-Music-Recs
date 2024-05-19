'use client'
import Image from "next/image";
import { app, auth } from "../../../firebase/clientApp";
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

  let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

  useEffect(() => {
    ui.start("#firebaseui-auth-container", uiConfig);
  });

  useEffect(() => {
    if (auth.currentUser) {
      router.push("/");
    }
  }, auth.currentUser);

  return (
    <div className="flex flex-col items-center w-full h-full space-y-20">
      <div className="flex justify-between w-[90%]">
        <div className="flex">
          <img id="note" src="/white.jpg" className=" w-20 h-auto" alt="hello"/>
          <button onClick={() => router.push("/")} id="header" className="poetsen-one-regular mt-4" >New Music Recs</button>
        </div>
        <div className="w-fit px-5 py-2 h-9 mt-3 rounded-md shadow bg-gray-900 text-center flex justify-center items-center">
        <button onClick={() => router.push("/login")} className="w-fit h-7 text-center text-violet-100 text-base font-semibold font-['DM_Sans']">Sign in with Google</button>
        </div>
        <div id="firebaseui-auth-container" className="border-2 border-white rounded"></div>
      </div>
    </div>
  )
}
