//SOLVED
words = ["apple", "banana", "avocado"];

function filterStringsStartingWithA(strings) {
  let filteredStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === "a") filteredStrings.push(strings[i]);
  }

  return filteredStrings;
}

let ans = filterStringsStartingWithA(words);
console.log(ans);
//Expected result: ["apple", "avocado"]
