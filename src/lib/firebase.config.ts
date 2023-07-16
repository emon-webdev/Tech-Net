// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgmDam6eUD2e75fBH1lBGOTe0tv5D_I5I",
    authDomain: "technet-45674.firebaseapp.com",
    projectId: "technet-45674",
    storageBucket: "technet-45674.appspot.com",
    messagingSenderId: "724929424144",
    appId: "1:724929424144:web:2f38f0e63cf08232d25395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);