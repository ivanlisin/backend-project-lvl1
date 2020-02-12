import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (num) => num % 2 === 0;

const getTask = () => {
  const number = getRandomNumber(0, 99);

  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';

  const task = cons(question, answer);
  return task;
};

export default () => play(description, getTask);
