//SOLVED
numbers = [1, 2, 3, 4, 5];
function findSecondSmallestNumber(numbers) {
  let secondSmallestNumber = 0;
  numbers.sort();
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] > numbers[i]) {
      //Antisipasi Testcase [1,1,1,3,2] -> Jawaban:2
      secondSmallestNumber = numbers[i + 1];
      break;
    }
  }

  return secondSmallestNumber;
}

let ans = findSecondSmallestNumber(numbers);
console.log(ans);
//Expected result: 2
