// user = {};
// user.name = "Samuel";
// console.log(user);
// user.surname = "Kaloh";
// console.log(user);
// user.name = "Jake";
// console.log(user);
// delete user.name;
// console.log(user);

let salaries = {
  john: 100,
  ann: 160,
  pete: 130,
};
let sum = 0;
for (key in salaries) sum += salaries[key];
console.log(sum);
