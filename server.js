import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("<h1>Ciao, sono Arturo, il server che ce l'ha duro!</h1>");
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
