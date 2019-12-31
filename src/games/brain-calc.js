import { randNum, randItem, play } from '..';

export default () => {
  const question = 'What is the result of the expression?';
  const genExpression = () => [randNum(0, 9), randItem(['+', '-', '*']), randNum(0, 9)];
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

  play(question, genExpression, calculate);
};
