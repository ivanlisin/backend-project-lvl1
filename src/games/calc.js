import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What is the result of the expression?';

export const getRandomItem = (items) => items[getRandomNumber(0, items.length - 1)];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getTask = () => {
  const [num1, num2] = [getRandomNumber(0, 9), getRandomNumber(0, 9)];
  const operator = getRandomItem(['+', '-', '*']);

  const expression = [num1, operator, num2];

  const question = expression.join(' ');
  const ansewer = `${calculate(...expression)}`;

  const task = cons(question, ansewer);
  return task;
};

export default () => play(description, getTask);
