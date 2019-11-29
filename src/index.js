import readlineSync from 'readline-sync';
import { welcome, createGame } from './game';

export const brainGames = () => {
  welcome('');
};

const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const checkParity = (num) => ((num % 2 === 0) ? 'yes' : 'no');
  const askUser = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);
  const genNum = () => randNum(0, 100);

  const play = createGame(rules, checkParity, askUser, genNum);
  play();
};

const randItem = (arr) => arr[randNum(0, arr.length - 1)];

export const brainCalc = () => {
  const question = 'What is the result of the expression?\n';
  const calculate = ([num1, operator, num2]) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return undefined;
    }
  };
  const askUser = ([num1, operator, num2]) => Number(readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `));
  const genExpression = () => [randNum(0, 5), randItem(['+', '-', '*']), randNum(0, 5)];

  const play = createGame(question, calculate, askUser, genExpression);
  play();
};
