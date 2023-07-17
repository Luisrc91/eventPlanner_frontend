import React from "react";
import UserLogin from "./User/UserLogin";
import SignUp from "./User/UserSignup";


export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <UserLogin />
      <SignUp />
      
    </>
  );
}
