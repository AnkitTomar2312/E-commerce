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
  const deleteOne = (id) => {
    console.log("clicked");
    const result = fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });

    if (result) {
      getProdcut();
      window.location.reload();
    } else {
      alert("Some error occured");
    }
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
            height: "auto",
            width: "80vw",
            marginTop: "48px",
          }}
        >
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Category</th>
              <th>Company</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td align="center">{index + 1}</td>
                  <td align="center">{item.name}</td>
                  <td align="center">{item.category}</td>
                  <td align="center">{item.company}</td>
                  <td align="center">${item.price}</td>
                  <td>
                    <button
                      style={{
                        width: "100%",
                        backgroundColor: "red",
                        color: "white",
                        fontSize: "20px",
                      }}
                      onClick={() => {
                        deleteOne(item._id);
                      }}
                    >
                      Delete
                    </button>
                    <br />
                    <button
                      style={{
                        width: "100%",
                        backgroundColor: "green",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default ProductList;
