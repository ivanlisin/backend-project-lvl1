import readlineSync from 'readline-sync';
import { randNum, createGame } from '../logic';

export default () => {
  const question = 'What number is missing in the progression?\n';
  const getClue = ([key, progression]) => progression[key];
  const askUser = ([key, progression]) => {
    let expression = '';
    for (let i = 0; i < progression.length; i += 1) {
      expression = `${expression} ${(i === key) ? '..' : progression[i]}`;
    }

    return Number(readlineSync.question(`Question: ${expression}\nYour answer: `));
  };
  const genPair = () => {
    const genKey = (length) => randNum(0, length - 1);
    const genProgression = (length, calculate) => {
      const progression = [];

      for (let i = 0; i < length; i += 1) {
        progression.push(calculate(i));
      }

      return progression;
    };

    const length = 10;
    const rules = [
      (index) => index,
      (index) => index * 2,
      (index) => (index + 1) * 2,
      (index) => index ** 2,
    ];
    const num = randNum(0, rules.length - 1);
    return [genKey(length), genProgression(length, rules[num])];
  };

  const play = createGame(question, getClue, askUser, genPair);
  play();
};
