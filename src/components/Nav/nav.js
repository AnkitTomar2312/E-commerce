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
      <li>
        {auth ? (
          <Link to="/register" onClick={() => logout()}>
            Logout
          </Link>
        ) : (
          <Link to="/register">SignUp</Link>
        )}
      </li>
    </ul>
  );
};

export default Nav;
