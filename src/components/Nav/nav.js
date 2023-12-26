import React from "react";
import { Link } from "react-router-dom";
const nav = () => {
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
        <Link to="/logout">Logout</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/register">SignUp</Link>
      </li>
    </ul>
  );
};

export default nav;
