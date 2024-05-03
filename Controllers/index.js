const createTask = require("./task/createTask");
const deleteTask = require("./task/deleteTask");
const getAll = require("./task/getTasks");
const getTask = require("./task/getTask");
const updateTask = require("./task/updateTask");
const getTrial = require("./task/getTrial");
const getMyTasks = require('./task/getMyTasks');

//auth
const login = require("./auth/login");
const register = require("./auth/register");
const deleteUser = require("./auth/delete.user");

module.exports = {
  task: {
    createTask,
    deleteTask,
    getAll,
    getTask,
    updateTask,
    getTrial,
    getMyTasks,
    
  },
  auth: {
    login,
    register,
    deleteUser,
  },
};
