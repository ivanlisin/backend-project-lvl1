import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What number is missing in the progression?';

const length = 10;

const getItem = (first, diff, index) => String(first + diff * index);

const getQuestion = (first, diff, hiddenIndex) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const item = getItem(first, diff, i);
    if (i === hiddenIndex) {
      result.push('..');
    } else {
      result.push(item);
    }
  }

  return result.join(',');
};

const getTask = () => {
  const first = getRandomNumber(0, 9);
  const diff = getRandomNumber(1, 9);
  const hiddenIndex = getRandomNumber(0, 9);

  const question = getQuestion(first, diff, hiddenIndex);
  const answer = getItem(first, diff, hiddenIndex);

  return cons(question, answer);
};

export default () => play(description, getTask);
