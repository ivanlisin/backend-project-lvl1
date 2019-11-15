import readlineSync from 'readline-sync';

export const brainGames = () => {
  console.log('Welcome to the Brain Games!\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let count = 0; count < 3;) {
    const num = rand(0, 100);

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
