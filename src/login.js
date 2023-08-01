import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const getNames = () => {
    console.log(email);
  };
  return (
    <div>
      <h1>Login here</h1>
      <input
        value={email}
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={getNames} placeholder="click this fucking button">
        lick this fucking button{" "}
      </button>
    </div>
  );
}

export default LoginForm;
