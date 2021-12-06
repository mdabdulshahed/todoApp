const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./dataBase.js");
const cors = require("cors");
const ToDo = require("./routes.js");
const path = require('path')

dotenv.config()

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,OPTIONS,PATCH',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  if (req.method === 'OPTIONS') {
    //  respond with 200
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(cors({ origin: '*', credentials: true }));
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
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use("/todo", ToDo);
