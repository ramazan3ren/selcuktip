import React from "react";
import MainLayout from "../../Layout/MainLayout";
import SignIn from "./signin";

function SignUp() {
  return (
    <>
      <MainLayout />
      <div className="signInBody">
        <SignIn />
      </div>
    </>
  );
}

export default SignUp;
