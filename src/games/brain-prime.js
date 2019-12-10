import readlineSync from 'readline-sync';
import { randNum, createGame } from '../logic';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const isPrime = (num) => (primes.includes(num) ? 'yes' : 'no');
  const askUser = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);
  const genNum = () => {
    const noPrimes = [0, 1, 4, 6, 9, 12, 15, 18, 21, 26];
    const rand = randNum(0, primes.length + noPrimes.length - 1);
    return (rand % 2 === 0) ? primes[rand / 2] : noPrimes[(rand - 1) / 2];
  };

  const play = createGame(rules, isPrime, askUser, genNum);
  play();
};
