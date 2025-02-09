const app = require("./app");
const chalk = require("chalk");
const port = 3001;

app.listen(port, () => {
  console.log(
    chalk.bgWhiteBright.green(`Server is running at http://localhost:${port}`)
  );
});
