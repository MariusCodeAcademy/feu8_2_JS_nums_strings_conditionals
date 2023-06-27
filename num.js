'use strict';
console.log('Num file');

let sk1 = 4.156458;

// suapvalinti
let sk1Apvalintas = Math.round(sk1);
console.log('sk1Apvalintas ===', sk1Apvalintas);
// lubos
let sk1Lubos = Math.ceil(sk1);
console.log('sk1Lubos ===', sk1Lubos);

// gauti random sk

let rand1 = Math.random();
console.log('rand1 ===', rand1);

let rand10 = Math.floor(Math.random() * 6) + 1;
console.log('rand10 ===', rand10);
