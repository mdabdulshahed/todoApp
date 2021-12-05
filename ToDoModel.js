const mongoose = require("mongoose");

const ToDoListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "-",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", ToDoListSchema);

module.exports = Todo;
