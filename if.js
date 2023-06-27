'use strict';
console.log('If else file');

/*

if (salyga) {
  //  jei salyta true 
} else {
  jei salyga false
}
*/

let num1 = 555;

// norim atspausdinti koks yra skaicius
// skaicius min gali buti 0
// 0 - 10 - nedidelis skaicius
// 11 - 60 - vidutinis skaicius
// 61 - daugiau - didelis skaicius

if (num1 <= 10) {
  console.log(`skaicius ${num1} yra nedidelis`);
} else if (num1 <= 60) {
  console.log(`skaicius ${num1} yra vidutinis`);
} else {
  console.log(`skaicius ${num1} yra didelis`);
}

let x = 50;
// x = 'labas';
// patikrtinti ar x yra skaicius ir ar didesnti uz 10
if (typeof x === 'number') {
  console.log('x yra skaicius');
  if (x > 10) {
    console.log('x yra daugiau uz 10');
  } else {
    console.log('x nera daugiau uz 10');
  }
}
// Loginiu operatorium patikrtinti ar x yra skaicius IR ar didesnti uz 10
if (typeof x === 'number' && x > 10) {
  console.log('x yra skaicius IR daugiau uz 10');
}

let reiksme = -455;

// mums tinka jei reikmes yra daugiau uz 50 ARBA maziau uz 0
if (reiksme > 50 || reiksme < 0) {
  console.log(`${reiksme} yra daugiau uz 50 arba maziau uz 0`);
}
