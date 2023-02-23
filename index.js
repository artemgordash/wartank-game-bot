import express from 'express';
import initPuppeteer from './puppeteer/index';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  // initPuppeteer();
  console.log(`Server running at http://localhost:${port}\n\n`);
});

export default app;
