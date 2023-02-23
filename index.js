import express from 'express';
import initPuppeteer from './puppeteer';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  res.send('Hello world');
});

app.use(express.static('public'));

app.listen(PORT, () => {
  initPuppeteer();
  console.log(`Server running at http://localhost:${PORT}\n\n`);
});

module.exports = app;
