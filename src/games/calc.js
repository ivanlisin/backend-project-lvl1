import { cons } from '@hexlet/pairs';
import { getRandomNumber, getRandomItem } from '../random';
import play from '..';

const question = 'What is the result of the expression?';

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
  const expression = [getRandomNumber(0, 9), getRandomItem(['+', '-', '*']), getRandomNumber(0, 9)];

  const description = expression.join(' ');
  const result = `${calculate(...expression)}`;

  const task = cons(description, result);
  return task;
};

export default () => play(question, getTask);
