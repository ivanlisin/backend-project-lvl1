import readlineSync from 'readline-sync';

/**
 * @param {String} message -- rules of the game or question
 */
const welcome = (message) => {
  console.log(`Welcome to the Brain Games!\n${message}`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const brainGames = () => {
  welcome();
};

const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const brainEven = () => {
  const name = welcome('Answer "yes" if the number is even, otherwise answer "no".\n');

  for (let count = 0; count < 3;) {
    const num = randNum(0, 100);

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    const truth = (num % 2) === 0;
    const guess = answer === 'yes';

    if (truth === guess) {
      console.log('Correct!');
      count += 1;
    } else {
      const report = (answer === 'yes') ? "'yes' is wrong answer ;(. Correct answer was 'no'." : "'no' is wrong answer ;(. Correct answer was 'yes'.";
      console.log(report);
      console.log(`Let's try again, ${name}!`);
      count = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const randItem = (arr) => arr[randNum(0, arr.length - 1)];

const operate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return undefined;
  }
};

export const brainCalc = () => {
  const name = welcome('What is the result of the expression?\n');

  for (let count = 0; count < 3;) {
    const num1 = randNum(0, 100);
    const num2 = randNum(0, 100);
    const operator = randItem(['+', '-', '*']);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');

    const truth = operate(num1, operator, num2);
    const guess = Number(answer);

    if (truth === guess) {
      console.log('Correct!');
      count += 1;
    } else {
      const report = `'${guess}' is wrong answer ;(. Correct answer was '${truth}'.`;
      console.log(report);
      console.log(`Let's try again, ${name}!`);
      count = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
