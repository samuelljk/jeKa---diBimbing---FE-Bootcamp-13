//SOLVED
numbers = [1, 2, 3, 4, 5];

/* BUILT-IN FUNCTION REVERSE APPROACH */
// function reverseArray(numbers) {
//   let reversedNumbers = [];
//   reversedNumbers = numbers.reverse();

//   return reversedNumbers;
// }

// let ans = reverseArray(numbers);
// console.log(ans);
//Expected result: [5,4,3,2,1]

/* NESTED LOOP APPROACH */
function reverseArray(numbers) {
  let reversedNumbers = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }

  return reversedNumbers;
}

let ans = reverseArray(numbers);
console.log(ans);
//Expected result: [5,4,3,2,1]
