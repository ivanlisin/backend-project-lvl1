import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const num = getRandomNumber(0, 29);

  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => play(description, getTask);
