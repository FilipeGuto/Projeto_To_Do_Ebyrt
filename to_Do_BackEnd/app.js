const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

const todoRouter = require('./routes/todoRoute');

const errorMiddleware = require('./src/middlewares/errorHandler');

app.use(bodyParser.json());

app.use(cors());

app.use(todoRouter);

app.use(errorMiddleware);

module.exports = app;
