import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignInContainer from "../../components/sign-in/sign-in.container";
import SignUpContainer from "../../components/sign-up/sign-up.container";

const SignInAndSignUpPage = ({ startSigning }) => (
  <div className="sign-in-and-sign-up">
    <SignInContainer isLoading={startSigning} />
    <SignUpContainer isLoading={startSigning} />
  </div>
);

export default SignInAndSignUpPage;
