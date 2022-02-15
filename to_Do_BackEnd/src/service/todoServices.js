const { 
  modelCreateToDo,
  modelGetAllTodo,
} = require('../models/todoModels');

const serviceCreateTodo = async (todo) => {
  await modelCreateToDo(todo);

  return todo;
};

const serviceGetAllTodo = async () => {
  const allTodo = await modelGetAllTodo();

  return allTodo;
};

module.exports = {
  serviceCreateTodo,
  serviceGetAllTodo,
};
