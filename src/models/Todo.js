const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: { type: String, maxlength: 500 },
  completed: Boolean,
  dueDate: Date,
  type: String
});

module.exports = mongoose.model("Todo", TodoSchema);
