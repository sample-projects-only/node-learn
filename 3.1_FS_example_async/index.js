// imported FS module
import FS from 'fs';
import  lib, { sum, diff } from './lib.js';

// reading file in asynchronous moded and adding encoding for display else default output in byte only
// if we don't use err here then we get output as null
// its because callbacks in node is generally in particular format where 1st one is err and second one is expected output

FS.readFile("demo.txt", "utf8",(err,txt) =>{
    console.log(txt)
});

console.log(sum(4,5),diff(9,4));
