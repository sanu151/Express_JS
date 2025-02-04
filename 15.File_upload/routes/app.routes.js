const express = require("express");
const {
  homeRoute,
  uploadFile,
  saveFile,
  upload,
} = require("../controller/route.controller");
const router = express.Router();

router.get("/", homeRoute);
router.get("/register", uploadFile);
router.post("/register", upload.single("my_image"), saveFile);

module.exports = router;
