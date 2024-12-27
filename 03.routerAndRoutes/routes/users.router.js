const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("<h1>This is get request from about page</h1>");
});
router.get("/contact", (req, res) => {
  res.send("<h1>This is get request from contact page</h1>");
});
router.get("/services", (req, res) => {
  res.send("<h1>This is get request from services page</h1>");
});

module.exports = router;
