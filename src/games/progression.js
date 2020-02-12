import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What number is missing in the progression?';

const [first, diff, length] = [
  getRandomNumber(0, 10),
  getRandomNumber(1, 5),
  10,
];
const getItem = (index) => first + index * diff;

const getQuestion = (hiddenIndex) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const item = String(getItem(i));
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

const getAnswer = (hiddenIndex) => String(getItem(hiddenIndex));

const getTask = () => {
  const hiddenIndex = getRandomNumber(0, length - 1);

  const question = getQuestion(hiddenIndex);
  const answer = getAnswer(hiddenIndex);

  const task = cons(question, answer);
  return task;
};

export default () => play(description, getTask);
