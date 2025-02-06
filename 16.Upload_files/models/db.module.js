const { default: mongoose } = require("mongoose");

const dbSchema = {
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  age: {
    type: Number,
    require: [true, "Age is required"],
  },
  image: {
    type: String,
    require: [true, "Image is required"],
  },
};

const dbModule = mongoose.model("users", dbSchema);

module.exports = dbModule;
