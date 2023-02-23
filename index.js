import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Hello world');
});

app.use(express.static('public'));

app.listen(port, () => {
  initPuppeteer();
  console.log(`Server running at http://localhost:${port}\n\n`);
});

module.exports = app;
