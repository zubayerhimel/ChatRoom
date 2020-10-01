import React from "react";
import "../App.css";
import { auth } from "../utils/FirebaseAuth";

export default function ChatMessage(props) {
  const { uid, text, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"} alt="image" />
        <p>{text}</p>
      </div>
    </>
  );
}
