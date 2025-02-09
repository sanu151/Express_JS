const homeRoute = (req, res) => {
  res.send("<h2>Server-side validation using express-validator</h2>");
};

const userRegistration = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = {
      name,
      email,
      password,
      dob,
    };
    res.json({
      status: 200,
      message: "User is Created",
      newUser,
    });
  } catch (error) {
    res.json({
      status: 504,
      error: error,
    });
  }
};

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "das.supriyo07@gmail.com" && password === "123456") {
      res.json({
        status: 200,
        message: "User is Logged in",
      });
    } else {
      res.json({
        status: 400,
        message: "Wrong credential! try again",
      });
    }
  } catch (error) {
    res.json({
      status: 504,
      error: error,
    });
  }
};

module.exports = { homeRoute, userRegistration, userLogin };
