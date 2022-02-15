const { modelCreateToDo } = require('../models/todoModels');

const serviceCreateTodo = async (todo) => {
  await modelCreateToDo(todo);

  return todo;
};

module.exports = {
  serviceCreateTodo,
};
