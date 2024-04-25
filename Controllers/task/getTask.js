const {Task} = require("../../models");
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

  module.exports =  getTask;
