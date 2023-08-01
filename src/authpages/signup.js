import React from "react";
import { useState } from "react";

function SignupForm() {
  const [phone, setEmail] = useState(" ");
  const [otp, setPassowrd] = useState(" ");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(phone);
    console.log(otp);
  };
  return (
    <div>
      <form>
        <h1>SignupForm</h1>
        <div></div>
      </form>
    </div>
  );
}

export default SignupForm;
