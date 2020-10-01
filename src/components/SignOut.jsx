import React from "react";
import "../App.css";
import { auth } from "../utils/FirebaseAuth";

export default function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
