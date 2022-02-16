const express = require('express');

const { 
  controllerCreateTodo,
  controllerGetAllTodo,
  controllerUpdateTodo,
  controllerDeleteTodo,
} = require('../src/controller/todoControllers');

const todoRoute = express.Router();

todoRoute.post('/todo', controllerCreateTodo);
todoRoute.get('/todo', controllerGetAllTodo);
todoRoute.put('/todo/:id', controllerUpdateTodo);
todoRoute.delete('/todo/:id', controllerDeleteTodo)

module.exports = todoRoute;