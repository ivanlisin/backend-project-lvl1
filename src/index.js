import readlineSync from 'readline-sync';
import { car as getQuestion, cdr as getAnswer } from '@hexlet/pairs';

const attemptsCount = 3;

export default (description, getTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  for (let count = 0; count < attemptsCount; count += 1) {
    const task = getTask();

    const userAnswer = readlineSync.question(`Question: ${getQuestion(task)}\nYour answer: `);
    const correctAnswer = getAnswer(task);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!\n`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!\n`);
};
