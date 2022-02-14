const express = require('express');

const todoRoute = express.Router();

todoRoute.get('/', () => {
  console.log('Funcionou');
});

module.exports = todoRoute;