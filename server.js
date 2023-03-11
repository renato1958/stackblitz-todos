import express from 'express';
import cors from 'cors';
import logger from 'morgan';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("<h1>Ciao, sono Arturo, il server che ce l'ha duro!</h1>");
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
