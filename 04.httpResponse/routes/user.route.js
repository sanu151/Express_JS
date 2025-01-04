const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  //   res.send("This is User Page");
  res.status = 200;
  res.sendFile(path.join(__dirname, "../views/user.html"));
});

router.get("/register", (req, res) => {
  res.cookie("name", "Supriyo Das");
  res.cookie("age", 37);
  res.append("id", "24914120084");
  res.status(200).json({
    message: "This is User Register Page",
    statusCode: 200,
  });
  res.end();
});

router.get("/login", (req, res) => {
  res.redirect("/user/register");
});

module.exports = router;
