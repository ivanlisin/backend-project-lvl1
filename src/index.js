import readlineSync from 'readline-sync';
import start from './engine';

export default (intro, getTask) => {
  console.log(`Welcome to the Brain Games!\n${intro}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  start(username, getTask);

  console.log(`Congratulations, ${username}!`);
};
