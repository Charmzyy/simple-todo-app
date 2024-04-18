const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    description: {
      type: String,
      required: [true, "Please fill the description"],
    },
    priority: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);

module.exports= Task;
