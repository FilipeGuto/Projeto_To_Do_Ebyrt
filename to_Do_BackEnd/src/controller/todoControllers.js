const { serviceCreateTodo } = require('../service/todoServices');
const { created } = require('../../utils/dictionary/statusCode');

const controllerCreateTodo = async (req, res, next) => {
  try {
    const newTodo = await serviceCreateTodo(req.body);


    return res.status(created).json(newTodo);
  } catch (error) {
    console.log(`CREATE TODO -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  controllerCreateTodo,
};
