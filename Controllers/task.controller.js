//create
const Task = require("../models/task.model");
const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getall
const getAll = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

//getOne
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//updateOne

const updateTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
const {id} = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      res.status(404).json({ mesage: "Task Not Found" });
    }
    res.status(201).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  deleteTask,
  getAll,
  getTask,
  updateTask,
};
