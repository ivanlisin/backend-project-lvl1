import readlineSync from 'readline-sync';
import create from './settings';
import start from './engine';

export default (intro, getArgs, getTask, getResult) => {
  console.log(`Welcome to the Brain Games!\n${intro}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  const game = create(getArgs, getTask, getResult);
  start(username, game);

  console.log(`Congratulations, ${username}!`);
};
