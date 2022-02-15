const express = require('express');

const { 
  controllerCreateTodo,
  controllerGetAllTodo,
} = require('../src/controller/todoControllers');

const todoRoute = express.Router();

todoRoute.post('/todo', controllerCreateTodo);
todoRoute.get('/todo', controllerGetAllTodo);

module.exports = todoRoute;