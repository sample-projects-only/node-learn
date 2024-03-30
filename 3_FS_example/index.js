// imported FS module
import FS from 'fs';
import  lib, { sum, diff } from './lib.js';

// reading file in synchronous moded and adding encoding for display else default output in byte only
const txt = FS.readFileSync('demo.txt', "utf8");
console.log(txt)

console.log(sum(4,5),diff(9,4));
