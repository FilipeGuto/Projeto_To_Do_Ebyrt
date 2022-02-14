const { modelCreateToDo } = require('../models/todoModels');

const serviceCreateTodo = async (todo) => {
  const newTodo = await modelCreateToDo(todo);

  return { newTodo }
};

module.exports = {
  serviceCreateTodo,
};
