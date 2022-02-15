const connect = require('./connection');
const { ObjectId } = require('mongodb');
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

module.exports = {
  modelCreateToDo,
  modelGetAllTodo,
};
