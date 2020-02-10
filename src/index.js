import readlineSync from 'readline-sync';
import { car as getDescription, cdr as getResult } from '@hexlet/pairs';

const attemptsCount = 3;

export default (intro, getTask) => {
  console.log(`Welcome to the Brain Games!\n${intro}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

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

  console.log(`Congratulations, ${username}!`);
};
