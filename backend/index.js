const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./db/config");
const User = require("./db/Users");
const Product = require("./db/Product");
const app = express();
const Jwt = require("jsonwebtoken");
const JwtKey = "e-comm";
//using middleware
app.use(express.json());
app.use(cors());
//register API
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  // deleting password from the response
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, JwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({
        result: "Something went wrong please try after some time",
      });
    }
    res.send({ result, auth: token });
  });
});
//login API
app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, JwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({
            result: "Something went wrong please try after some time",
          });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "require password" });
  }
});
//products api
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

//ProductLIst API:-
app.get("/product-list", async (req, res) => {
  let ProductList = await Product.find();
  if (ProductList.length > 0) {
    res.send(ProductList);
  } else {
    res.send({ result: "No product yet to show" });
  }
});
// One preoduct delete API:-
app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

//To Update Find one Product API:-
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("result not found");
  }
});
//updating main Api
app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

//Search Api
app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

//creating a middle-ware for verifying token

app.listen(5000);
