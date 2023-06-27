'use strict';
console.log('Metu file');

// atspausdinti priklausomai nuo kintamojo ar metai
// yra daugiau uz 2000 ar maziau
let metai = 3999;

console.log('metai:', metai);

let rezultatas = 'Pasirinkti metai yra';

if (metai < 2000) {
  rezultatas = rezultatas + ' pries 2000';
} else {
  rezultatas += ' po 2000';
}

console.log(rezultatas);
