import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'Find the greatest common divisor of given numbers';

const [min, max] = [1, 50];

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const getTask = () => {
  const [num1, num2] = [getRandomNumber(min, max), getRandomNumber(min, max)];

  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  const task = cons(question, answer);
  return task;
};

export default () => play(description, getTask);
