const path = require("path");
const multer = require("multer");

const homeRoute = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

const uploadFile = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../views/upload.html"));
};

// Save Image to upload folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    const my_image = "IMG-" + Date.now();
    cb(null, my_image);
  },
});

const upload = multer({ storage: storage });

const saveFile = (req, res) => {
  res.status(200).send("Image uploaded successfully");
};

module.exports = { homeRoute, uploadFile, saveFile, upload };
