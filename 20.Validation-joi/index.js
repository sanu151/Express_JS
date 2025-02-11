const chalk = require("chalk");
const app = require("./app");
const port = 3008;

app.listen(port, () => {
  console.log(
    chalk.bgWhite.green(`Server running at http://localhost:${port}`)
  );
});
