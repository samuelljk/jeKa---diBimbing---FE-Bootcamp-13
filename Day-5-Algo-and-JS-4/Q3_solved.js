//SOLVED
numbers = [1, 2, 3, 4, 5];

function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  // evenNumbers = Array.from(numbers.filter((num) => num % 2 === 0));
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i]);
  }

  return evenNumbers;
}

let ans = filterEvenNumbers(numbers);
console.log(ans);
//Expected result: [2,4]
