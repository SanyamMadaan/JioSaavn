const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_URI =process.env.DATABASE_URL;


mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });
