import readlineSync from 'readline-sync';
import { car as getDescription, cdr as getResult } from '@hexlet/pairs';

const attemptsCount = 3;

export default (username, getTask) => {
  for (let count = 0; count < attemptsCount;) {
    const task = getTask();

    const answer = readlineSync.question(`Question: ${getDescription(task)}\nYour answer: `);
    const result = getResult(task);

    switch (answer === result) {
      case true:
        console.log('Correct!');
        count += 1;
        break;
      default:
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${username}!`);
        count = 0;
        break;
    }
  }
};
