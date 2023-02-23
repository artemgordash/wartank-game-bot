import { buttons, inputs } from '../../constants/selectors';

const login = async (page) => {
  await page.setViewport({ width: 1080, height: 1024 });
  await page.goto('https://ok.ru/');
  console.log('opening ok.ru');
  await page.type(inputs.login, 'VIRAJ2004');
  await page.type(inputs.password, '???ClEaR???');
  const loginBtn = await page.$(buttons.login);
  await loginBtn.click();
  await page.waitForNavigation({
    waitUntil: 'networkidle2',
  });
};

export default login;
