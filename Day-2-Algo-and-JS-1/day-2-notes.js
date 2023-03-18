/* sum two numbers */
let a = 1;
let b = 2;
let total = a + b;
console.log(total);

/* profit or loss */
let income = 22000000;
let cost = 30000000;

if (income >= cost) {
  let profit = income - cost;
  // console.log(`Income: ${profit}`);
  console.log("Income:", profit);
} else {
  let loss = cost - income;
  // console.log(`Loss: ${loss}`);
  console.log("Loss:", loss);
}
