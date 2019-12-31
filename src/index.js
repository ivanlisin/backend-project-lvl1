import play from './logic';

const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randItem = (arr) => arr[randNum(0, arr.length - 1)];

export { play, randNum, randItem };
