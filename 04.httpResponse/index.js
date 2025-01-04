const app = require("./app");
const hostName = "localhost";
const port = 3000;

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
