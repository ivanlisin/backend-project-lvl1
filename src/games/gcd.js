import { cons } from '@hexlet/pairs';
import { getRandomNumber } from '../random';
import play from '..';

const needToDo = 'Find the greatest common divisor of given numbers';

const pickUpGcd = (num1, num2) => {
  const modNum1 = Math.abs(num1);
  const modNum2 = Math.abs(num2);

  const max = (modNum1 > modNum2) ? modNum1 : modNum2;
  for (let i = max; i > 0; i -= 1) {
    const isGcd = (modNum1 % i === 0) && (modNum2 % i === 0);
    if (isGcd) {
      return i;
    }
  }

  return null;
};

const getTask = () => {
  const numbers = [getRandomNumber(-20, 20), getRandomNumber(-20, 20)];

  const description = numbers.join(' ');
  const result = `${pickUpGcd(...numbers)}`;

  const task = cons(description, result);
  return task;
};

export default () => play(needToDo, getTask);
