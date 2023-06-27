'use strict';
console.log('Strings file');
//          01234567890123456
let str1 = 'Sveiki as esu cia';

console.log('str1:', str1);

console.log('str1.toUpperCase()', str1.toUpperCase());
console.log('str1.toLowerCase()', str1.toLowerCase());

let pirmojiRaide = str1.charAt(0);
console.log('pirmojiRaide ===', pirmojiRaide);

let strIlgis = str1.length;
console.log('strIlgis', strIlgis);
let paskutineRaide = str1.charAt(strIlgis - 1);
console.log('paskutineRaide', paskutineRaide);

// istraukti ir issaugoti kintamajame zodeli 'as'
// stringas.slice(start, end)
let zodelis = str1.slice(7, 9);
console.log('zodelis', zodelis);
