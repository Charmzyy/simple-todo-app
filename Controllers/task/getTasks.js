const {Task} = require("../../models");

const getAll = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

    module.exports =   getAll;
  