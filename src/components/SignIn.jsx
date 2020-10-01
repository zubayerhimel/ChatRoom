import React from "react";
import "../App.css";
import { signInWithGoogle } from "../utils/FirebaseAuth";

export default function SignIn() {
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}
