import readlineSync from 'readline-sync';
import { randNum, randItem, createGame } from '../logic';

export default () => {
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
