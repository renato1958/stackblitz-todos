import express from 'express';

const todosRouter = express.Router();

todosRouter.get('/', (req, res) => {
  res.status(200).send('<h1>Recuperati tutti i promemoria</h1>');
});

todosRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`<h1>Recuperato il promemoria con id = ${id}</h1>`);
});

export { todosRouter };
