interface Person {
  firstName: string;
  lastName: string;
  birthday: Date;
}

class Entry implements Person {
  firstName: string;
  lastName: string;
  birthday: Date;

  constructor(firstName: string, lastName: string, birthday: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}

let newPerson = new Entry("Albert", "Einstein", new Date("5/14/1879"));

console.log(newPerson);

let numbers: string[] = [
  "twelve",
  "one-hundred",
  "sixteen",
  "forty-four",
  "seventy-three",
  "three-million",
];

console.log("Before", numbers);

function sortArray(argument: any) {
  return argument.sort();
}

console.log("After", sortArray(numbers));
