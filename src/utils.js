export const getRandNum = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

export const getRandItem = (arr) => arr[getRandNum(0, arr.length - 1)];
