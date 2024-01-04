import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter valid details");
    }
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
