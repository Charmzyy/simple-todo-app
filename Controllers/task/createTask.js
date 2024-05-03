const {Task} = require("../../models");


const createTask = async (req, res) => {
  const User = req.user.user;
  try {
    const newTask = await Task.create({
      name : req.body.name,
      description :req.body.description,
      priority : req.body.priority,
      status : req.body.status,
      dueDate : req.body.dueDate,
      creator : User
    });
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = createTask;
