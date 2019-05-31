// object destructoring
const person = { name: "Mario", age: 44, Sex: "M", hold: false };
const { name, age } = person;
console.log(name + " is " + age + " years old.");

// array destructoring
const hobbies = ["Art", "Music", "Cruising"];
const [el1, el2] = hobbies;
console.log(el1, el2);
