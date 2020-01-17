import { getRandomNumber } from '../random';
import play from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumber = () => getRandomNumber(0, 29);

const toString = (num) => `${num}`;

const checkPrime = (num) => {
  if (num < 2) {
    return 'no';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => play(rule, getNumber, toString, checkPrime);
