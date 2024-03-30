import FS from 'fs';

const txt = FS.readFileSync('demo.txt', "utf8");
console.log(txt)
