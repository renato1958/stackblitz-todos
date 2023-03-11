import express from 'express';
import * as todosControllers from '../../controllers/todos.js';

const todosRouter = express.Router();

todosRouter.get('/', todosControllers.getAllTodos);

todosRouter.get('/:id', todosControllers.getOneTodo);

todosRouter.post('/', todosControllers.createTodo);

export { todosRouter };
