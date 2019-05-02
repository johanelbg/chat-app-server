const express = require("express");
const router = express.Router();
const Room = require("../models/Room.js");

router.get("/", function(req, res, next) {
  Room.find((err, products) => {
    if (err) return next(err);
    res.json(products);
  });
});

router.get("/:id", function(req, res, next) {
  Room.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.post("/", function(req, res, next) {
  Room.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.put("/:id", function(req, res, next) {
  Room.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete("/:id", function(req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
