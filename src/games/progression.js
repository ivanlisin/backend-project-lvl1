import { getRandomNumber } from '../random';
import play from '..';

const question = 'What number is missing in the progression?';

const formulas = [
  (index) => index,
  (index) => index * 2,
  (index) => (index + 1) * 2,
  (index) => index ** 2,
];
const index = getRandomNumber(0, formulas.length - 1);
const getItem = formulas[index];

const length = 10;
const getProgression = () => {
  const skip = getRandomNumber(0, length - 1);
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

const toString = (arr) => arr.toString();

const calculate = (progression) => {
  for (let i = 0; i < progression.length; i += 1) {
    switch (progression[i]) {
      case '..':
        return `${getItem(i)}`;
      default:
        break;
    }
  }

  return 'wrong progression';
};

export default () => play(question, getProgression, toString, calculate);
