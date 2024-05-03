const express = require("express");
const router = express.Router();



const { task } = require("../controllers");



 //Define
router.get("/getall", task.getAll);


router.post("/create",task.createTask);
router.get("/getall", task.getAll);
router.get("/single/:id", task.getTask);
router.put("/update/:id",task.updateTask);
router.delete("/delete/:id",task.deleteTask);
router.get("/mytasks", task.getMyTasks);


// Export the router
module.exports = router;
