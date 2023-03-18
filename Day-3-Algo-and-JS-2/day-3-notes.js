/*
const rl = require("readline-sync");

let username = rl.question(`Input Username: `);

let password = rl.question(`Input Password: `, { hideEchoBack: true });

let age = rl.questionInt(`Input Usia: `, {
  limitMessage: `Input harus angka!`,
});

console.log(`Halo ${username}, usiamu ${age} tahun`);

let x = 3;
y = x++;
console.log(x, y);

let a = 3;
b = ++a;
console.log(a, b);
*/

let name = "Sam";
console.log(typeof name);

// const x = 12;
const names = ["Mike", "Jason", "Jordy"];
console.log(names);
// console.log(x);

let f = () => {
  console.log("This is a function.");
};
f();

// x = 3;
names[2] = "Arthur";
console.log(names); //but why names[2] changes into "Arthur"
// console.log(x); --> ERROR BECAUSE CONST

/* ---------------------------------------------------------------------------------------------- */

// Different Ways of STRING MANIPULATION
let nama = "Samuel";

let string1 = "this is a string";
let string2 = "my name is " + nama;
let string3 = `my name is ${nama}
test test test
test

test test
(can be use to write a PARAGRAPH)`;

console.log("value dari string 1 :", string1);
console.log("value dari string 2 :", string2);
console.log("value dari string 3 :", string3);
