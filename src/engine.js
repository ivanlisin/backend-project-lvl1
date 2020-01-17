import readlineSync from 'readline-sync';
import { car as getTask, cdr as getResult } from '@hexlet/pairs';

const attemptsCount = 3;

export default (username, getGame) => {
  for (let count = 0; count < attemptsCount;) {
    const game = getGame();

    const answer = readlineSync.question(`Question: ${getTask(game)}\nYour answer: `);
    const result = getResult(game);

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
