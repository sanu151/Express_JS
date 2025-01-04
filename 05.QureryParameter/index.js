const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`<h1>Hi I am ${name}, My id is ${id}<h1>`);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
