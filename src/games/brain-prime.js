import { randNum, play } from '..';

export default () => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const genNum = () => {
    const noPrimes = [0, 1, 4, 6, 9, 12, 15, 18, 21, 26];
    const length = primes.length + noPrimes.length;
    const rand = randNum(0, length - 1);

    return (rand % 2 === 0) ? primes[rand / 2] : noPrimes[(rand - 1) / 2];
  };
  const isPrime = (num) => (primes.includes(num) ? 'yes' : 'no');

  play(rules, genNum, isPrime);
};
