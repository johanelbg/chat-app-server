const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const RoomSchema = new mongoose.Schema({
  room_name: { type: String, required: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Room", RoomSchema);
