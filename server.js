import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Ciao, sono Arturo, il server che ce l'ha duro!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
