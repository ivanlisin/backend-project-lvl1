import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getTask = () => {
  const num = getRandomNumber(0, 99);

  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => play(description, getTask);
