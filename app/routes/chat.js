const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat.js");
const server = require("http").Server(express);
const io = require("socket.io")(server);

const port = 4000;

server.listen(port);

io.on("connection", function(socket) {
  socket.on("postMessage", msg => {
    console.log(msg);
    io.emit("postMessage", msg);
  });
});

router.get("/", function(req, res, next) {
  Chat.find((err, products) => {
    if (err) return next(err);
    res.json(products);
  });
});

router.get("/:room_id", function(req, res, next) {
  Chat.find({ room: req.params.room_id }, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.post("/", function(req, res, next) {
  Chat.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.put("/:id", function(req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete("/:id", function(req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
