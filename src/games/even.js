import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const [min, max] = [0, 99];

const isEven = (num) => num % 2 === 0;

const getTask = () => {
  const number = getRandomNumber(min, max);

  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  const task = cons(question, answer);
  return task;
};

export default () => play(description, getTask);
