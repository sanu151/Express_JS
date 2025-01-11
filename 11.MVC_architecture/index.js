//MVC Architecture

const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT | 3001;

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
