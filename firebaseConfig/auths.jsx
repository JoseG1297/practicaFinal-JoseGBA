
import {appFirebase} from "./initialize";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
  } from "firebase/auth";
  
  const auth = getAuth(appFirebase);
  
  const createAt = async (email, password) => {
    return  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("crate", userCredential);
        return userCredential;
      })
      .catch((error) => {
        console.log(error)
        return error;
      });
  };
  
  const signIn = async (email, password) => {
    return  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("sign/in", userCredential);
        return userCredential;
      })
      .catch((error) => {
        console.log(error)
        return error;
      });
  };
  

  const resetPassword = async (email) => {
    return  sendPasswordResetEmail(auth, email)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
  };
  
  export { createAt, signIn, resetPassword };