'use strict';
console.log('If else file');

/*

if (salyga) {
  //  jei salyta true 
} else {
  jei salyga false
}
*/

let num1 = 500;

// norim atspausdinti koks yra skaicius
// skaicius min gali buti 0
// 0 - 10 - nedidelis skaicius
// 11 - 60 - vidutinis skaicius
// 61 - daugiau - didelis skaicius

if (num1 <= 10) {
  console.log(`skaicius ${num1} yra nedidelis`);
} else {
  console.log(`skaicius ${num1} yra vidutinis`);
}
