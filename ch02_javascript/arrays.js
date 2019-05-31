const hobbies = ["Music", "Art"];

console.log(hobbies);
// for of
for (let hobby of hobbies) {
  console.log(hobby);
}

// map: returns a new array transformed
console.log(hobbies.map(h => "Hobby:" + h));
// push: add new element to array
hobbies.push("Cruising");
console.log("Array orig:", hobbies);
// spread operatore: new array with old values plus changes
const copiedArray = [...hobbies];
console.log("Array copy:", copiedArray);
const person = { name: "Mario", age: 44 };
const copiedPerson = { ...person };
console.log(copiedPerson);
// rest: spread opposite
/*
const toArray = (x, y, z) => {
  return [x, y, z];
};
*/
const toArray = (...args) => [args];
console.log(toArray(1, 2, 3, 4, 5));
