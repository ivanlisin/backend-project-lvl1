export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

export const getRandomItem = (items) => items[getRandomNumber(0, items.length - 1)];
