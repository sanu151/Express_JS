const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "Supriyo Das",
    age: 37,
    gender: "Male",
    email: "das.supriyo07@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Rupa Das",
    age: 27,
    gender: "Female",
    email: "das.rupa2608@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Rishika Das",
    age: 6,
    gender: "Female",
    email: "das.rishika2207@gmailcom",
  },
];

module.exports = users;
