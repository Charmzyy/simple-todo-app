const {Task} = require("../../models");
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

module.exports = deleteTask;
