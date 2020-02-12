const getRandomNumber = (min, max) => {
  const randFloat = Math.random();
  const diff = max - min;
  const randNum = Math.floor(randFloat * (diff + 1));

  return randNum + min;
};

export default getRandomNumber;
