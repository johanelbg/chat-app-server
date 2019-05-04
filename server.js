const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const room = require("./app/routes/room");
const chat = require("./app/routes/chat");

const port = process.env.PORT || 8000;
const mongo_url = process.env.MONGO_URL || getMongoUrl();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/room", room);
app.use("/chat", chat);

mongoose
  .connect(mongo_url, { useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => {
      console.log("We are live on " + port);
    })
  )
  .catch(err => console.log(`connection failed: ${err}`));

function getMongoUrl() {
  const { mongo_url } = require("./config/config");
  return mongo_url;
}
