const express = require('express');

const { controllerCreateTodo } = require('../src/controller/todoControllers');

const todoRoute = express.Router();

todoRoute.post('/todo', controllerCreateTodo);

module.exports = todoRoute;