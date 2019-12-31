import { randNum, play } from '..';

export default () => {
  const rules = [
    (index) => index,
    (index) => index * 2,
    (index) => (index + 1) * 2,
    (index) => index ** 2,
  ];
  const getItem = rules[randNum(0, rules.length - 1)];

  const question = 'What number is missing in the progression?';
  const genExpression = () => {
    const length = 10;
    const skip = randNum(0, length - 1);
    const expression = [];
    for (let i = 0; i < length; i += 1) {
      switch (i) {
        case skip:
          expression.push('..');
          break;
        default:
          expression.push(getItem(i));
          break;
      }
    }

    return expression;
  };
  const calculate = (expression) => {
    for (let i = 0; i < expression.length; i += 1) {
      switch (expression[i]) {
        case '..':
          return getItem(i);
        default:
          break;
      }
    }

    return undefined;
  };

  play(question, genExpression, calculate);
};
