import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getTask = () => {
  const number = getRandomNumber(0, 29);

  const description = `${number}`;
  const result = isPrime(number) ? 'yes' : 'no';

  const task = cons(description, result);
  return task;
};

export default () => play(rule, getTask);
