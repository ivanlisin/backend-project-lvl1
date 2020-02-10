import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (num) => num % 2 === 0;

const getTask = () => {
  const number = getRandomNumber(0, 99);

  const description = `${number}`;
  const result = isPrime(number) ? 'yes' : 'no';

  const task = cons(description, result);
  return task;
};

export default () => play(rule, getTask);
