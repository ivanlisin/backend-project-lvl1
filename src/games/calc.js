import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What is the result of the expression?';

const getRandomItem = (items) => items[getRandomNumber(0, items.length - 1)];

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
  const num1 = getRandomNumber(0, 9);
  const num2 = getRandomNumber(0, 9);
  const operator = getRandomItem(['+', '-', '*']);

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, operator, num2));

  return cons(question, answer);
};

export default () => play(description, getTask);
