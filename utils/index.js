import { buttons } from '../constants/selectors';

export const click = async (document, button) => {
  await button.click();

  await document.waitForNavigation({
    waitUntil: 'networkidle2',
  });
};

export const attack = async (document) => {
  const [firstEnemyButton] = await document.$$(buttons.attack);
  await click(document, firstEnemyButton);
};
