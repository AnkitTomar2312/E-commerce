import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };
  const UpdateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      alert("product updated");
      navigate("/");
    } else {
      alert("prodcut updation failed");
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          paddingBottom: "80px",
          marginTop: "48px",
        }}
      >
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Product Name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Price..."
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Your Category..."
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          style={{ padding: "24px" }}
          type="text"
          placeholder="Enter Your Company..."
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <input
          style={{
            padding: "18px 48px",
            backgroundColor: "green",
            border: "none",
          }}
          type="submit"
          value="Update Product"
          onClick={() => {
            UpdateProduct();
          }}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
