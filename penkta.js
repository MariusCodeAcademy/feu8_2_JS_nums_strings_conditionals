'use strict';
console.log('penkta.js file was loaded');

/*
### 5. (sunkesne) Parašykite programą, kuri:

- Paprašyti įvesti prisijungimo vardą ir slaptažodį
- Jei vardas admin, slaptažodis turi būti “master”
- Jei vardas ne admin - tai slaptažodis yra: vardas ir skaičius 11.
  Pvz.: username: andrius, psw: andrius11
- “Sveiki, admin” arba “Neteisingas slaptažodis”
- Jei neiįvedė nieko - “Viso gero!”

*/

/*
Psiaudo kodas
turim vardas ir admin
jei nera vardas ir nera slaptazodis 
  taip - viso gero
  ne - jei vardas - admin, ir slaptatzodis master 
      taip - sveiki admin
      ne - jei vardas === vardas11 
        taip - sveiki user
        ne - “Neteisingas slaptažodis”

*/

let vardas = 'admin';
let password = 'master';

// let testVal = prompt('reikme');
// console.log('testVal ===', testVal);
console.log('vardas', vardas, 'password:', password);
if (vardas === '' && password === '') {
  //taip
  console.log('viso gero');
} else if (vardas === 'admin' && password === 'master') {
  //taip
  console.log('Sveiki admin');
} else if (password === `${vardas}11`) {
  // taip
  console.log('Sveiki user');
} else {
  console.log('Neteisingas Slaptazodis');
}
