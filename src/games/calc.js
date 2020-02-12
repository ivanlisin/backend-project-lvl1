import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What is the result of the expression?';

const [min, max] = [0, 9];

const operators = ['+', '-', '*'];
const getOperator = () => {
  const [firstIndex, lastIndex] = [0, operators.length - 1];
  const index = getRandomNumber(firstIndex, lastIndex);
  return operators[index];
};

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
  const [num1, operator, num2] = [
    getRandomNumber(min, max),
    getOperator(),
    getRandomNumber(min, max),
  ];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, operator, num2));

  const task = cons(question, answer);
  return task;
};

export default () => play(description, getTask);
