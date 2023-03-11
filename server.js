import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { todosRouter } from './routes/api/todos.js';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', todosRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
