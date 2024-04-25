const express = require("express");
const router = express.Router();

const { task } = require("../Controllers");

 //Define
router.get("/getall", task.getAll);
router.post("/create", task.createTask);
router.get("/single/:id", task.getTask);
router.put("/update/:id", task.updateTask);
router.delete("/delete/:id", task.deleteTask);

// Export the router
module.exports = router;
