import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../random';
import play from '..';

const needToDo = 'Find the greatest common divisor of given numbers';

const pickUpGcd = (num1, num2) => {
  if (num1 < 1 || num2 < 1) {
    return null;
  }

  const max = (num1 > num2) ? num1 : num2;
  for (let i = max; i > 0; i -= 1) {
    const isGcd = (num1 % i === 0) && (num2 % i === 0);
    if (isGcd) {
      return i;
    }
  }

  return null;
};

const getTask = () => {
  const numbers = [getRandomNumber(1, 20), getRandomNumber(1, 20)];

  const description = numbers.join(' ');
  const result = `${pickUpGcd(...numbers)}`;

  const task = cons(description, result);
  return task;
};

export default () => play(needToDo, getTask);
