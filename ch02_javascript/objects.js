const person = {
  name: "Mario",
  age: 44,
  great() {
    console.log("Hi,", this.name);
  }
};

//console.log(person);
person.great();
