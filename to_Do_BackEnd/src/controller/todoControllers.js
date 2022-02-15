const { 
  serviceCreateTodo,
  serviceGetAllTodo,
  serviceUpdateTodo,
} = require('../service/todoServices');
const { created, sucess } = require('../../utils/dictionary/statusCode');

const controllerCreateTodo = async (req, res, next) => {
  try {
    const newTodo = await serviceCreateTodo(req.body);

    return res.status(created).json(newTodo);
  } catch (error) {
    console.log(`CREATE TODO -> ${error.message}`);
    return next(error);
  }
};

const controllerGetAllTodo = async (req, res, next) => {
  try {
    const allTodo = await serviceGetAllTodo();

    res.status(sucess).json(allTodo);
  } catch (error) {
    console.log(`GET ALL TODO -> ${error.message}`);
    return next(error);
  }
};

const controllerUpdateTodo = async (req, res, next) => {
try {
    const { id } = req.params;
    const updateTodo = await serviceUpdateTodo(id, req.body);

    return res.status(sucess).json(updateTodo);
} catch (error) {
  console.log(`UPDATE TODO -> ${error.message}`);
    return next(error);
}
};

module.exports = {
  controllerCreateTodo,
  controllerGetAllTodo,
  controllerUpdateTodo,
};
