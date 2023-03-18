user = {
  age: 20,
  name: "Jake",
};
console.log(user);
//-----
user.age = 15;
user.name = "Mike";
user.address = "Indonesia";
user.gender = "M";
// console.log(user);
// delete user.age;
console.log(user);
//------
for (key in user) {
  console.log(key);
}
//------
my_salaries = {
  jan: 10,
  feb: 5,
  dec: 20,
};
console.log(my_salaries.jan);
for (key in my_salaries) {
  console.log(my_salaries[key]);
}
//------
// your_salaries = my_salaries; //SHALLOW-CPY
your_salaries = Object.assign({}, my_salaries); //DEEP-CPY
your_salaries.march = 25;
console.log(my_salaries);
