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

export const brainGcd = () => {
  const task = 'Find the greatest common divisor of given numbers\n';
  const pickUpGcd = ([num1, num2]) => {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }

    if (num1 < 0 || num2 < 0) {
      return undefined;
    }

    const max = (num1 > num2) ? num1 : num2;
    for (let i = max; i > 0; i -= 1) {
      const isGcd = (num1 % i === 0) && (num2 % i === 0);
      if (isGcd) {
        return i;
      }
    }

    return undefined;
  };
  const askUser = ([num1, num2]) => Number(readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `));
  const genPairNum = () => [randNum(0, 5), randNum(0, 5)];

  const play = createGame(task, pickUpGcd, askUser, genPairNum);
  play();
};

export const brainProgression = () => {
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
