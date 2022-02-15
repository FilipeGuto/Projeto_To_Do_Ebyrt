const { 
  modelCreateToDo,
  modelGetAllTodo,
  modelUpdateTodo,
} = require('../models/todoModels');

const serviceCreateTodo = async (todo) => {
  await modelCreateToDo(todo);

  return todo;
};

const serviceGetAllTodo = async () => {
  const allTodo = await modelGetAllTodo();

  return allTodo;
};

const serviceUpdateTodo = async (id, updateTodo) => {
  await modelUpdateTodo(id, updateTodo);

  return {
    _id: id,
    todo: updateTodo.todo,
  };
};

module.exports = {
  serviceCreateTodo,
  serviceGetAllTodo,
  serviceUpdateTodo,
};
