const {
  modelCreateToDo,
  modelGetAllTodo,
  modelUpdateTodo,
  modelDeleteTodo,
} = require('../models/todoModels');

const serviceCreateTodo = async (todo) => {
  await modelCreateToDo(todo);

  return { 
    sucesso: 'tarefa criada',
  };
};

const serviceGetAllTodo = async () => {
  const allTodo = await modelGetAllTodo();

  return allTodo;
};

const serviceUpdateTodo = async (id, updateTodo) => {
  await modelUpdateTodo(id, updateTodo);

  return {
    _id: id,
    tarefa: updateTodo.tarefa,
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
