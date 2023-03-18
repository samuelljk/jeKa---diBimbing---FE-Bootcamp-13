const rl = require("readline-sync");

let n = rl.questionInt();

for (let i = 0; i < n; i++) {
  let x = rl.questionInt();
  let y = rl.questionInt();
  if (x < y) {
    console.log("<");
  }
  if (x > y) {
    console.log(">");
  }
  if (x === y) {
    console.log("=");
  }
}
