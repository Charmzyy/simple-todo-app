const createTask = require('./task/createTask');
const deleteTask = require('./task/deleteTask');
const getAll = require('./task/getTasks');
const getTask = require('./task/getTask');
const updateTask = require('./task/updateTask');


module.exports = {
  task : {
  createTask,
  deleteTask,
  getAll,
  getTask,
  updateTask,}

};
