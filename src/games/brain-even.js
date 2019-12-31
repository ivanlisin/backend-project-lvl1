import { randNum, play } from '..';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const genNum = () => randNum(0, 99);
  const checkParity = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  play(rules, genNum, checkParity);
};
