const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ChatSchema = new Schema({
  room: { type: Schema.Types.ObjectId, ref: "Room" },
  nickname: { type: String, required: true },
  message: { type: String, required: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", ChatSchema);
