//SOLVED
words = ["hello", "world"];

function getLengthsOfStrings(strings) {
  let lengths = [];
  for (let i = 0; i < strings.length; i++) lengths.push(strings[i].length);

  return lengths;
}

let ans = getLengthsOfStrings(words);
console.log(ans);
//Expected result: [5, 5]
