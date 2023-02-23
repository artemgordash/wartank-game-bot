import puppeteer from 'puppeteer';
import chromium from 'chrome-aws-lambda';
import login from './modules/login';
import fight from './modules/fight';

const initPuppeteer = async () => {
  console.log('start');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: await chromium.executablePath,
    args: [
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
    ],
  });
  const page = await browser.newPage();
  await login(page);
  await fight(page);
  setInterval(async () => {
    await fight(page);
  }, 1390000);
};

export default initPuppeteer;
