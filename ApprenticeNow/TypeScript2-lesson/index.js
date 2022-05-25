"use strict";
class Entry {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}
let newPerson = new Entry("Albert", "Einstein", new Date("5/14/1879"));
console.log(newPerson);
let numbers = [
    "twelve",
    "one-hundred",
    "sixteen",
    "forty-four",
    "seventy-three",
    "three-million",
];
console.log("Before", numbers);
function sortArray(argument) {
    return argument.sort();
}
console.log("After", sortArray(numbers));
