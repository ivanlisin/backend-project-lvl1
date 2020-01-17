import { cons } from '@hexlet/pairs';

export default (getArgs, getTask, getResult) => () => {
  const args = getArgs();

  const task = getTask(args);
  const result = getResult(args);

  const game = cons(task, result);
  return game;
};
