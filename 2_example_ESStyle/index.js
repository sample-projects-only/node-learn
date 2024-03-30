// imported lib module here
import  lib, { sum, diff } from './lib.js';

// print lib object details
console.log(lib);

// using object to refer to function and passing values to it
console.log(sum(4,5),diff(9,4));