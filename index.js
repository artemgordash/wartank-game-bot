import express from 'express';
import path from 'path';
import initPuppeteer from './puppeteer/index';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.use(express.static('public'));

app.listen(port, () => {
  // initPuppeteer();
  console.log(`Server running at http://localhost:${port}\n\n`);
});

export default app;
