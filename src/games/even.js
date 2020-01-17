import { getRandomNumber } from '../random';
import play from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNumber = () => getRandomNumber(0, 99);

const toString = (num) => `${num}`;

const checkParity = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export default () => play(rule, getNumber, toString, checkParity);
