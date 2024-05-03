const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const moment = require('moment');
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
      validate : {
        validator : function(value) {
          return moment(value).startOf('day') >= moment().startOf('day');

        },
        message : "Due date must in the future today"
      },
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a User model
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);

module.exports= Task;
