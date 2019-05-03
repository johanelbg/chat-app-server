const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/db");
const app = express();
const dotenv = require("dotenv");

const room = require("./app/routes/room");
const chat = require("./app/routes/chat");

const port = 8000;

dotenv.config();
console.log(`ENV ${process.env.NODE_ENV}`); // 8626

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/room", room);
app.use("/chat", chat);

mongoose
  .connect(db.url, { useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => {
      console.log("We are live on " + port);
    })
  )
  .catch(err => console.log(`connection failed: ${err}`));
