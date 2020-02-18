import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'Find the greatest common divisor of given numbers';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const getTask = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return cons(question, answer);
};

export default () => play(description, getTask);
