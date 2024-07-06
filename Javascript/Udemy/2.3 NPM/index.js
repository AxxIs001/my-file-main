//var generateName = require('sillyname');
/*
import generateName from "sillyname";

var sillyName = generateName();

console.log(sillyName);
*/

import { randomSuperhero } from 'superheroes';
const name = randomSuperhero();

console.log(`I am ${name}!`);