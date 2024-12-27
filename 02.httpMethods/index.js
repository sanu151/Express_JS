const app = require("./app");

const hostName = "localhost";
const PORT = 3000;

app.listen(PORT, hostName, () => {
  console.log(`Server : http://${hostName}:${PORT}`);
});
