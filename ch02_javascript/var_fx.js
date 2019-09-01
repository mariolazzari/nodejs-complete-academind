const name = "Mario";
let age = 29;
const hasHobbies = true;

age = 44;

function summerizeUser(name, age, hasHobbies) {
  return name + " is " + age + " years old and user has hobbies: " + hasHobbies;
}

// arrow fx
const summerizeUser2 = (name, age, hasHobbies) =>
  name + " is " + age + " years old and user has hobbies: " + hasHobbies;

console.log(summerizeUser(name, age, hasHobbies));
console.log(summerizeUser2(name, age, hasHobbies));

const add = (a, b) => a + b;
console.log(add(1, 2));
