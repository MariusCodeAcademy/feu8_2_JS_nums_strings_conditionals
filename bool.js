'use strict';
console.log('bool file');

let isUserAdmin = true;
let rezultatas = '';
// priklausomai nuo isUserAdmin reiksmes
// atspausdinti:
// true - Sveiki admiministratorius,
// false - Prisijunkite prie sistemos
if (isUserAdmin === true) {
  rezultatas = 'Sveiki admiministratorius';
} else {
  rezultatas = 'Prisijunkite prie sistemos';
}

console.log(rezultatas);
