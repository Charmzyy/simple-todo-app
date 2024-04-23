const Task = require("../../models");
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