import dayjs from 'dayjs';
import { buttons } from '../../constants/selectors';
import { attack, click } from '../../utils';

const fight = async (page) => {
  console.log(`Start attack ${dayjs().format('DD.MM.YYYY hh:mm:ss')}`);
  await page.goto('https://m.ok.ru/game/wartank');
  const frameHTML = await page.$('iframe');
  const frame = await frameHTML.contentFrame();
  const location = await frame.title();
  const fightButton = await frame.$(buttons.fight);
  if (location !== 'Бой') await click(frame, fightButton);
  await attack(frame);
  await attack(frame);
  await attack(frame);
  console.log(`End attack ${dayjs().format('DD.MM.YYYY hh:mm:ss')}`);
};

export default fight;
