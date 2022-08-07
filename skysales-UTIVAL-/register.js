
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";






const firebaseConfig = {
  apiKey: "AIzaSyC9sR999yhECSE9b5brUdwwGC35g8B9X0M",
  authDomain: "skyesales-82b8a.firebaseapp.com",
  projectId: "skyesales-82b8a",
  storageBucket: "skyesales-82b8a.appspot.com",
  messagingSenderId: "695150330364",
  appId: "1:695150330364:web:303cb75463ffa8a555b279",
  measurementId: "G-3WEL5DNCWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, ref, set, child, get }
       from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";


const db = getDatabase();

const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")


   