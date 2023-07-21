import React from "react";
import UserLogin from "./User/UserLogin";
import SignUp from "./User/UserSignup";

export default function Home() {
  return (
    <div>
      <h1>Events & Feasts</h1>
     
      <div>
        <SignUp />
      </div>
    </div>
  );
}
