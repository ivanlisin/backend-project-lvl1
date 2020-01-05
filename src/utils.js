export const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randItem = (arr) => arr[randNum(0, arr.length - 1)];
