import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import play from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestion = (first, diff, hiddenItemIndex) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenItemIndex) {
      result.push('..');
    } else {
      const item = first + diff * hiddenItemIndex;
      result.push(String(item));
    }
  }

  return result.join(',');
};

const getAnswer = (first, diff, index) => String(first + diff * index);

const getTask = () => {
  const first = getRandomNumber(0, 9);
  const diff = getRandomNumber(1, 9);
  const hiddenItemIndex = getRandomNumber(0, 9);

  const question = getQuestion(first, diff, hiddenItemIndex);
  const answer = getAnswer(first, diff, hiddenItemIndex);

  return cons(question, answer);
};

export default () => play(description, getTask);
