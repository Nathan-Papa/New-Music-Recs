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

  return (
    <div className="flex flex-col items-center w-full h-full space-y-20">
      <h1>Terms of Service</h1>
    </div>
  );
}
