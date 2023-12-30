import React, { useState } from "react";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const AddProduct = async () => {
    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"));
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div>
      <h1>Add-Prodcut</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          paddingBottom: "80px",
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
          type="text"
          placeholder="Enter Price..."
          onChange={(e) => {
            setprice(e.target.value);
          }}
          value={price}
        />
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Your Category..."
          onChange={(e) => {
            setcategory(e.target.value);
          }}
          value={category}
        />
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Your Company..."
          onChange={(e) => {
            setcompany(e.target.value);
          }}
          value={company}
        />
        <input
          style={{
            padding: "18px 48px",
            backgroundColor: "yellow",
            border: "none",
          }}
          type="submit"
          value="Add Product"
          onClick={() => AddProduct()}
        />
      </div>
    </div>
  );
};

export default AddProduct;
