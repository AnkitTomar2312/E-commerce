import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProdcut();
  }, []);

  const getProdcut = async () => {
    let result = await fetch("http://localhost:5000/product-list");
    result = await result.json();
    setProducts(result);
  };
  return (
    <div>
      <h1>Product List</h1>
      <center>
        <table
          border="2"
          style={{
            color: "red",
            backgroundColor: "yellow",
            height: "400px",
            width: "600px",
            marginTop: "48px",
          }}
        >
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Category</th>
            <th>Company</th>
            <th>Price</th>
          </tr>
          {products.map((item, index) => {
            return (
              <tr>
                <td align="center">{index + 1}</td>
                <td align="center">{item.name}</td>
                <td align="center">{item.category}</td>
                <td align="center">{item.company}</td>
                <td align="center">${item.price}</td>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
};

export default ProductList;
