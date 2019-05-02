const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/db");
const app = express();

const room = require("./app/routes/room");
const router = express.Router();

const port = 8000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/room", room);

mongoose
  .connect(db.url, { useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => {
      console.log("We are live on " + port);
    })
  )
  .catch(err => console.log(`connection failed: ${err}`));
