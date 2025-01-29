const notFoundPage = (req, res, next) => {
  res.status(404).send("<h1>404 - Page not found</h1>");
  res.end();
};

const homeRoute = (req, res) => {
  res.status(200).send("<h2>Rest API without Database</h2>");
  res.end();
};

module.exports = { notFoundPage, homeRoute };
