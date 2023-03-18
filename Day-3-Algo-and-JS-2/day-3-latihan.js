const rl = require("readline-sync");

let a = rl.questionInt(`Input A : `, { limitMessage: `Input harus ANGKA!` });
let b = rl.questionInt(`Input B : `, { limitMessage: `Input harus ANGKA!` });

console.log(`${a} + ${b} =`, a + b);
console.log(`${a} - ${b} =`, a - b);
console.log(`${a} * ${b} =`, a * b);
console.log(`${a} / ${b} =`, a / b);
console.log(`${a} ^ ${b} =`, a ** b);
console.log(`${a} % ${b} =`, a % b);

console.log(`++${a} ++${b} = value sekarang ${++a} dan ${++b}`);
console.log(`${a}++ ${b}++ = value sekarang ${a++} dan ${b++}`);
console.log(`--${a} --${b} = value sekarang ${--a} dan ${--b}`);
console.log(`${a}-- ${b}-- = value sekarang ${a--} dan ${b--}`);

console.log(`Apakah ${a} lebih besar dari ${b}?`, a > b);
console.log(`Apakah ${a} lebih kecil dari ${b}?`, a < b);
console.log(`Apakah ${a} sama dengan ${b}?`, a === b);
console.log(`Apakah ${a} tidak sama dengan ${b}?`, a != b);
