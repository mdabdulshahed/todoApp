const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./dataBase.js");
const cors = require("cors");
const ToDo = require("./routes.js");

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

connectToDB();

app.listen(PORT, () => {
  console.log(
    `server listining on port ${PORT}, click here to start http://localhost:${PORT}`
  );
});

app.get("/", (req, res) => {
  res.send("success");
});

app.use("/todo", ToDo);
