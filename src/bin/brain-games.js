#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');

const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!\n`);
