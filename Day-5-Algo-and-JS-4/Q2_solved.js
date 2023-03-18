//SOLVED
numbers = [1, 2, 3, 4, 5];

function findLargestNumber(numbers) {
  let largestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) largestNumber = numbers[i];
  }

  return largestNumber;
}

let ans = findLargestNumber(numbers);
console.log(ans);
//Expected result: 997
