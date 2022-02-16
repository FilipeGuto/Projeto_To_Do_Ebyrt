const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const todoRouter = require('./routes/todoRoute');

const errorMiddleware = require('./src/middlewares/errorHandler');

app.use(bodyParser.json());

app.use(todoRouter);

app.use(errorMiddleware);

module.exports = app;
