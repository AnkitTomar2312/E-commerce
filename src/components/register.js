import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const naviagte = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      naviagte("/");
    }
  };
  return (
    <>
      <h1>Registration Form</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          marginTop: "50px",
        }}
      >
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Your Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          style={{ padding: "24px" }}
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          style={{ padding: "24px" }}
          type="password"
          placeholder="Enter Your Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input
          style={{
            padding: "18px 48px",
            backgroundColor: "yellow",
            border: "none",
          }}
          type="submit"
          value="save"
          onClick={() => collectData()}
        />
      </div>
    </>
  );
};

export default Register;
