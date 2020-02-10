import readlineSync from 'readline-sync';
import { car as getQuestion, cdr as getAnswer } from '@hexlet/pairs';

const attemptsCount = 3;

export default (description, getTask) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  for (let count = 0; count < attemptsCount;) {
    const task = getTask();

    const guess = readlineSync.question(`Question: ${getQuestion(task)}\nYour answer: `);
    const truth = getAnswer(task);

    switch (guess === truth) {
      case true:
        console.log('Correct!');
        count += 1;
        break;
      default:
        console.log(`'${guess}' is wrong answer ;(. Correct answer was '${truth}'\nLet's try again, ${username}!`);
        count = 0;
        break;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
