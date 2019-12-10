import readlineSync from 'readline-sync';
import { randNum, createGame } from '../logic';

export default () => {
  const task = 'Find the greatest common divisor of given numbers\n';
  const pickUpGcd = ([num1, num2]) => {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }

    if (num1 < 0 || num2 < 0) {
      return undefined;
    }

    const max = (num1 > num2) ? num1 : num2;
    for (let i = max; i > 0; i -= 1) {
      const isGcd = (num1 % i === 0) && (num2 % i === 0);
      if (isGcd) {
        return i;
      }
    }

    return undefined;
  };
  const askUser = ([num1, num2]) => Number(readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `));
  const genPairNum = () => [randNum(0, 20), randNum(0, 20)];

  const play = createGame(task, pickUpGcd, askUser, genPairNum);
  play();
};
