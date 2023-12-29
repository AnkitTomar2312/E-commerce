import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const naviagate = useNavigate();
  const logout = () => {
    localStorage.clear();
    naviagate("/register");
  };
  return (
    <>
      {auth ? (
        <ul
          type="none"
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "Center",
            backgroundColor: "cyan",
            height: "8vh",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "48px", borderRadius: "50%" }}
            src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"
            alt="logo"
          />
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/update-product">Update Product</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <Link to="/register" onClick={() => logout()}>
            Logout ({JSON.parse(auth).name})
          </Link>
        </ul>
      ) : (
        <ul
          type="none"
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "Center",
            backgroundColor: "cyan",
            height: "8vh",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "48px", borderRadius: "50%" }}
            src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"
            alt="logo"
          />
          <li>
            <Link to="/login">Log-In</Link>
          </li>

          <li>
            <Link to="/register">SignUp...</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
