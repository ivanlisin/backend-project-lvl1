import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What number is missing in the progression?';

const [min, max] = [0, 9];

const [first, diff, length] = [
  getRandomNumber(min, max),
  getRandomNumber(min, max),
  max + 1,
];
const getProgressionItem = (index) => String(first + index * diff);

const getQuestion = (hiddenIndex) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const item = getProgressionItem(i);
    switch (i) {
      case hiddenIndex:
        result.push('..');
        break;

      default:
        result.push(item);
    }
  }

  return result.join(',');
};

const getTask = () => {
  const hiddenIndex = getRandomNumber(min, max);

  const question = getQuestion(hiddenIndex);
  const answer = getProgressionItem(hiddenIndex);

  const task = cons(question, answer);
  return task;
};

export default () => play(description, getTask);
