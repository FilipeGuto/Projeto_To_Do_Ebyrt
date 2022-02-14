const express = require('express');

const app = express();

require('dotenv').config();

const { PORT } = process.env;

const todoRouter = require('./routes/todoRoute');

const errorMiddleware = require('./src/middlewares/errorHandler');

app.use(todoRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Conectado na porta: ${PORT}`);
});
