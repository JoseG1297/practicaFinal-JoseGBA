import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaMqbL7G8mJ2wa8-O6vHbCosl0Q_NyZ7E",
  authDomain: "rc-practica7-auth.firebaseapp.com",
  databaseURL: "https://rc-practica7-auth-default-rtdb.firebaseio.com",
  projectId: "rc-practica7-auth",
  storageBucket: "rc-practica7-auth.appspot.com",
  messagingSenderId: "522575913642",
  appId: "1:522575913642:web:bbd248a0f8c858cb0a66d3"
};
  
  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);
  
  export  {appFirebase};