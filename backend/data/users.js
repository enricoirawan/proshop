// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Enrico Irawan",
    email: "enrico@gmail.com.com",
    password: bcrypt.hashSync("enrico0208", 10),
  },
  {
    name: "Ariel Irawan",
    email: "ariel@gmail.com",
    password: bcrypt.hashSync("enrico0208", 10),
  },
];

// export default users;
module.exports = users;
