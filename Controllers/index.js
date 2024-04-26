const createTask = require("./task/createTask");
const deleteTask = require("./task/deleteTask");
const getAll = require("./task/getTasks");
const getTask = require("./task/getTask");
const updateTask = require("./task/updateTask");

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
  },
  auth: {
    login,
    register,
    deleteUser,
  },
};
