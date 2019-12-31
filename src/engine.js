import readlineSync from 'readline-sync';

const toString = (args) => {
  if (Number.isInteger(args)) {
    return `${args}`;
  }

  if (Array.isArray(args)) {
    let acc = '';
    args.forEach((currentValue, index) => {
      switch (index) {
        case 0:
          acc += `${currentValue}`;
          break;

        default:
          acc += ` ${currentValue}`;
          break;
      }
    });

    return acc;
  }

  return undefined;
};

export default (intro, getArgs, toDo, goal = 3) => {
  console.log(`Welcome to the Brain Games!\n${intro}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  for (let count = 0; count < goal;) {
    const args = getArgs();

    const result = String(toDo(args));
    const answer = readlineSync.question(`Question: ${toString(args)}\nYour answer: `);

    switch (result === answer) {
      case true:
        console.log('Correct!');
        count += 1;
        break;
      default:
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${username}!`);
        count = 0;
        break;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
