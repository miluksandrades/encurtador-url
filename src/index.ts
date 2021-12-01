import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.json({ message: true });
});

app.listen(3000, () => console.log('Iniciando...'));
