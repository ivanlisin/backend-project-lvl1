import readlineSync from 'readline-sync';
import { randNum, createGame } from '../logic';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const checkParity = (num) => ((num % 2 === 0) ? 'yes' : 'no');
  const askUser = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);
  const genNum = () => randNum(0, 100);

  const play = createGame(rules, checkParity, askUser, genNum);
  play();
};
