export const getAllTodos = (req, res) => {
  res.status(200).send('<h1>Recuperati tutti i promemoria</h1>');
};

export const getOneTodo = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`<h1>Recuperato promemoria con id ${id}</h1>`);
};

export const createTodo = (req, res) => {
  res.status(201).send('<h1>Creato promemoria</h1>');
};
