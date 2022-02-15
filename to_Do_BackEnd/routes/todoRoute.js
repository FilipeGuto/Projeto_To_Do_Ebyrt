const express = require('express');

const { 
  controllerCreateTodo,
  controllerGetAllTodo,
  controllerUpdateTodo,
} = require('../src/controller/todoControllers');

const todoRoute = express.Router();

todoRoute.post('/todo', controllerCreateTodo);
todoRoute.get('/todo', controllerGetAllTodo);
todoRoute.put('/todo/:id', controllerUpdateTodo);

module.exports = todoRoute;