import { getRandomNumber } from '../random';
import play from '..';

const task = 'Find the greatest common divisor of given numbers';

const getPair = () => [getRandomNumber(1, 20), getRandomNumber(1, 20)];

const toString = ([num1, num2]) => `${num1} ${num2}`;

const pickUpGcd = ([num1, num2]) => {
  if (num1 < 1 || num2 < 1) {
    return 'wrong pair';
  }

  const max = (num1 > num2) ? num1 : num2;
  for (let i = max; i > 0; i -= 1) {
    const isGcd = (num1 % i === 0) && (num2 % i === 0);
    if (isGcd) {
      return `${i}`;
    }
  }

  return 'wrong pair';
};

export default () => play(task, getPair, toString, pickUpGcd);
