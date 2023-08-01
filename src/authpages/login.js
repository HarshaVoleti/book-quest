import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassowrd] = useState(" ");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={login}>
        <div>
          <label>Enter Email here : </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Enter password here : </label>{" "}
          <input
            type="password"
            onChange={(e) => {
              setPassowrd(e.target.value);
            }}
          ></input>
        </div>
        <button className="btn btn-blue" type="submit" onClick={handlesubmit}>
          Fucking click me
        </button>
        <div>
          <label>Don't have an account</label>
          <Link to="/signup"> Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
