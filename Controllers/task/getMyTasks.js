const {Task} = require('../../models')


const getMyTasks = async (req,res) => {
    try {
        const tasks = await Task.find({}).where("creator", req.user.user);
        res.status(200).json({
          tasks: tasks,
          message: "This Are Your Tasks Fetched"
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = getMyTasks ;