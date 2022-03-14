const { ObjectId } = require('mongodb');

const connect = require('./connection');

const COLLECTION = 'to-do-collection';

const modelCreateToDo = async (todo) => {
  const conn = await connect();
  const { insertedId } = await conn.collection(COLLECTION).insertOne(todo);

  return ObjectId(insertedId);
};

const modelGetAllTodo = async () => {
  const conn = await connect();
  const result = await conn.collection(COLLECTION).find({}).toArray();

  return result;
};

const modelUpdateTodo = async (id, todo) => {
  const conn = await connect();
  const result = await conn.collection(COLLECTION).updateOne(
    { _id: ObjectId(id) },
    { $set: { tarefa: todo.tarefa, active: todo.active, edit: todo.edit } },
  );

  return result;
}

const modelDeleteTodo = async (id) => {
  const conn = await connect();
  const result = await conn.collection(COLLECTION).deleteOne({ _id: ObjectId(id) });

  return result;
};

module.exports = {
  modelCreateToDo,
  modelGetAllTodo,
  modelUpdateTodo,
  modelDeleteTodo,
};
