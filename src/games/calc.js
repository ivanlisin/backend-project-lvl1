import { getRandomNumber, getRandomItem } from '../random';
import play from '..';

const question = 'What is the result of the expression?';

const getExpression = () => [getRandomNumber(0, 9), getRandomItem(['+', '-', '*']), getRandomNumber(0, 9)];

const toString = ([num1, operator, num2]) => `${num1} ${operator} ${num2}`;

const calculate = ([num1, operator, num2]) => {
  switch (operator) {
    case '+':
      return `${num1 + num2}`;
    case '-':
      return `${num1 - num2}`;
    case '*':
      return `${num1 * num2}`;
    default:
      return 'wrong expression';
  }
};

export default () => play(question, getExpression, toString, calculate);
