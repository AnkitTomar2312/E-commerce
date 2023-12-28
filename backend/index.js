const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/Users");
const app = express();
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
  res.send(result);
});
//login API
app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "require password" });
  }
});

app.listen(5000);
