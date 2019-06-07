const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: { type: String, maxlength: 500 },
  completed: Boolean,
  dueDate: String,
  type: String
});

module.exports = mongoose.model("Todo", TodoSchema);
