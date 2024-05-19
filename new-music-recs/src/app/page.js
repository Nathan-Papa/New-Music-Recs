'use client';
import Image from "next/image";
import { app, auth } from "../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';
import { uiConfig } from '../../firebase/firebaseAuth';
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";


export default function Home() {
  
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full h-full space-y-20">
      <div className="flex justify-between w-[90%]">
        <div className="flex m-auto">
          <img onClick={() => router.push("/")} id="note" src="/white.jpg" className=" w-20 h-auto hover:cursor-pointer" alt="hello"/>
          <button onClick={() => router.push("/")} id="header" className="poetsen-one-regular mt-4" >New Music Recs</button>
        </div>
      </div>
      <div className=" w-[80rem] h-full text-center text-violet-100 text-4xl font-[500] leading-[3rem] whitespace-pre font-['DM Sans']">
        A new way to keep up with new releases {"\n"} 
        from your favorite artist and genres.
      </div>
      <div className="flex justify-evenly h-fit items-center w-80 ml-4">
        <img id="spotify" className="w-16 h-16" src="/white.jpg" alt="music"></img>
        <img id="apple" className="w-24 h-24 mt-1" src="/white.jpg" alt="apple"></img>
        <img id="tidal" className="w-20 h-20" src="/white.jpg" alt="tidal"></img>
      </div>
      <div className="w-36 h-12 bg-gray-900 rounded-md shadow-lg text-center flex justify-center items-center">
        <button onClick={() => router.push("/login")}  className=" text-violet-100 text-[1.1rem] font-semibold font-['DM Sans']">Get Started</button>
      </div>
    </div>
  );
}
