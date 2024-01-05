import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProdcut();
  }, []);

  const getProdcut = async () => {
    let result = await fetch("http://localhost:5000/product-list", {
      method: "Get",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };
  const deleteOne = (id) => {
    console.log("clicked");
    const result = fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    if (result) {
      getProdcut();
      window.location.reload();
    } else {
      alert("Some error occured");
    }
  };

  const handleSearch = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        method: "Get",
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      setProducts(result);
    } else {
      getProdcut();
    }
  };
  return (
    <div>
      <h1>Product List</h1>
      <input
        style={{
          padding: " 20px 60px",
          marginTop: "48px",
          borderRadius: "15px",
          fontSize: "22px",
        }}
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <center>
        <table
          border="2"
          style={{
            color: "red",
            backgroundColor: "yellow",
            height: "auto",
            width: "80vw",
            marginTop: "48px",
            marginBottom: "68px",
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
            {products.length ? (
              products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td align="center">{index + 1}</td>
                    <td align="center">{item.name}</td>
                    <td align="center">{item.category}</td>
                    <td align="center">{item.company}</td>
                    <td align="center">${item.price}</td>
                    <td align="center">
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
                      <Link
                        to={"/update-product/" + item._id}
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan="6">
                  <h1>No Result Found..</h1>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default ProductList;
