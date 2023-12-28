import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.warn(email, password);
  };
  return (
    <div>
      <h1>Log-In Form</h1>
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
          placeholder="Enter Your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          style={{ padding: "24px" }}
          type="email"
          placeholder="Enter Your password..."
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
          onClick={() => {
            handleLogin();
          }}
        />
      </div>
    </div>
  );
};

export default Login;
