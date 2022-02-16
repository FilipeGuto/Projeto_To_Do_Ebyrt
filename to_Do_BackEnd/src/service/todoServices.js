const {
  modelCreateToDo,
  modelGetAllTodo,
  modelUpdateTodo,
  modelDeleteTodo,
} = require('../models/todoModels');

const serviceCreateTodo = async (todo) => {
  await modelCreateToDo(todo);

  return todo;
};

const serviceGetAllTodo = async () => {
  const allTodo = await modelGetAllTodo();

  return allTodo;
};

const serviceUpdateTodo = async (id, todo) => {
  await modelUpdateTodo(id, todo);

  return {
    _id: id,
    tarefa: todo.tarefa,
  };
};

const serviceDeleteTodo = async (id) => {
  await modelDeleteTodo(id)

  return {
    sucesso: 'tarefa deletada',
  };
};

module.exports = {
  serviceCreateTodo,
  serviceGetAllTodo,
  serviceUpdateTodo,
  serviceDeleteTodo,
};
