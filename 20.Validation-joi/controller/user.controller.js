const homeRoute = (req, res) => {
  res.send("<h2>server-side data validation using joi</h2>");
};

const userRegistration = (req, res) => {
  try {
    console.log(req.body);
    const { name, age, gender, email, dob, password, confPassword } = req.body;
    const newUser = {
      name,
      age,
      gender,
      email,
      dob,
      password,
      confPassword,
    };
    res.json({
      status: 201,
      message: "User is Created",
      newUser,
    });
  } catch (error) {
    res.status(501).json({
      message: error.message,
    });
  }
};

const userLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "das.supriyo07@gmail.com" && password === "123456") {
      res.status(200).json({
        message: "User is Loggedin",
      });
    } else {
      res.status(400).json({
        message: "email / Password not matched",
      });
    }
  } catch (error) {
    res.status(501).json({
      message: error.message,
    });
  }
};

module.exports = { homeRoute, userRegistration, userLogin };
