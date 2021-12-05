const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbURL = process.env.DATABASE_URL;

const connectToDB = async () => {
  console.log('starting connection with Database...')
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log("connection failed,", error);
  }
};

module.exports = connectToDB;
