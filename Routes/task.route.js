const express = require("express");
const router = express.Router();

const {
  getAll,
  updateTask,
  createTask,
  getTask,
  deleteTask,
} = require("../Controllers/task.controller");

module.exports= router;

router.get("/getall", getAll);
router.post("/create", createTask);
router.get("/single/:id", getTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
