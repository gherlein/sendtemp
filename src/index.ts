import { readFileSync } from 'fs';

const file = readFileSync('./filename.txt', 'utf-8');

console.log(file);