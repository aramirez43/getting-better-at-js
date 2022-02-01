'use strict'; //This is activating strict mode
// 
// let hasDriversLicense = false;
// const passTest = true;
// 
// if(passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');
// 
//Functions 
// 
// function logger() { //logger is the name of the function
//     console.log('My name is Alan')
// }
// 
// logger();// This is calling / running/ invoking the function 
// 
// function fruitProcessor(apples, oranges) { //inside parenthesis are parameters
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// 
// const appleJuice = fruitProcessor(2, 3); //values will be assigned to parameters also called arguments and then replaced by juice
// 
// console.log(appleJuice);// You have to store in a variable to get result then console log it
// console.log(fruitProcessor(5,0)); //This logs results but doesnt store it in a variable
// 
// const appleOrangeJuice = fruitProcessor(6, 9)
// console.log(appleOrangeJuice);
// 
//Do not repeat yourself = DRY

//Assignment 1

// function describeCountry(country, population, capitalCity) {
//     console.log(country, population, capitalCity);
//     return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }
// //you dont always have to use a variable in a function
// const theUsa = describeCountry('USA', 329500000, 'Washington');
// console.log(theUsa)
//
//Function declarations vs expressions

// function calcAge1 (birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2000);
// console.log(age1);

// //Function Expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(2000);
// console.log(age2)

// //Expressions produce values
// //Function declarations can be called before they are defined

//Assignment 2

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const UsaPopulation = percentageOfWorld1(329500000);
// const MexPopulation = percentageOfWorld1(128000000);
// const CanadaPopulation = percentageOfWorld1(38000000);
// console.log(UsaPopulation, MexPopulation, CanadaPopulation);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// const UsaPopulation2 = percentageOfWorld2(329500000);
// const MexPopulation2 = percentageOfWorld2(128000000);
// const CanadaPopulation2 = percentageOfWorld2(38000000);
// console.log(UsaPopulation2, MexPopulation2, CanadaPopulation2);

//arrow function 
//this for simple stuff
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);
// //this for complex
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2000, 'Alan'));
// //arrow functions dont get a this keyword

//Assignment 3

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const UsaPopulation3 = percentageOfWorld3(329500000);
// console.log(UsaPopulation3);

//Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//Assignment 4


// function percentageOfWorld1(populationNum) {
//     return (populationNum / 7900) * 100;
// }

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     const descriptionOfCountry = `${country} has ${population} million people, which is about ${percentage}% of the world`;

//     return descriptionOfCountry;

// }

// console.log(describePopulation('USA', 329.5))
// console.log(describePopulation('Mexico', 128))
// console.log(describePopulation('Canada', 38))

//Reviewing Functions

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1
//     }
// }

// console.log(yearsUntilRetirement(1950, 'Mike'))

//Coding Challenge 1

// const calcAverage = (score1, score2, score3) => {
//     const totalAverage = (score1 + score2 + score3) / 3;
//     return totalAverage;
// }
// const dolphinsAvgScore = calcAverage(44, 23, 71);
// // console.log(dolphinsAvgScore);
// const koalasAvgScore = calcAverage(65, 54, 49);
// // console.log(koalasAvgScore)

// function checkWinner (avgDolphin, avgKoala) {

//     if  (avgKoala >= 2 * avgDolphin){
//         console.log(`Koalas win (${avgKoala} vs $ avgDolphin})`)
//     } else if (avgDolphin >= 2 * avgKoala) {
//         console.log(`Dolphins win ($ avgDolphin} vs ${avgKoala})`)
//     }else {
//         console.log('No teams win')
//     }
// }

// checkWinner (dolphinsAvgScore, koalasAvgScore)

//Intro to arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// //length is a property and lets you know how many elements are in an array
// console.log(friends.length);

// //length is not zero based so it will get the friend in position two Peter
// console.log(friends[friends.length - 1]);

// //This changes Peter to Jay
// //Arrays can always be changed even if constructor
// //You cannot mutate the entire array
// friends[2] = 'Jay';
// console.log(friends);

// //You can put many thing in an array
// const firstName = 'Alan';
// const alan = [firstName, 'Ramirez', 2037 - 2000, 'Web Developer', friends];
// console.log(alan);

// //exercise

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// //cant use operators on arrays
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

// const populations = [329.5, 129, 126, 51];

// console.log(populations.length === 4);

// function percentageOfWorld1(populationNum) {
//     return (populationNum / 7900) * 100;
// }

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages)

//Array Operations Methods

// const friends = ['Michael', 'Steven', 'Peter'];

// //push is a method and is attached adds to array at the end
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// //unshift adds to the beginning
// friends.unshift('John');
// console.log(friends);

// //pop removes elements last doesnt return number of elements in array
// const popped = friends.pop();
// friends.pop();
// console.log(friends);
// console.log(popped)

// //shift removes from the beginning
// friends.shift();
// console.log(friends);

// //indexOf lets you know position of element
// console.log(friends.indexOf('Steven'));

// //includes returns true if element is in array
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend named Steven');
// }

//Assignment 6

// const neighbors = ['Mexico', 'Canada'];
// console.log(neighbors)
// const newNeighbor = neighbors.push('Utopia');
// console.log(neighbors)
// const removedNeighbor = neighbors.pop();
// console.log(neighbors)

// if (!neighbors.includes('Germany')) {
//     console.log('Probably not a central European country');
// }

// console.log(neighbors.indexOf('Mexico'));
// neighbors[0] = 'Japan';
// console.log(neighbors)

//Coding Challenge 2

// function calcTip(bill) {

//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * .15;
//         return tip
//     }else {
//         const tip = bill * .20;
//         return tip
//     }
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);

// console.log(total);

//Intro to objects

//Inside is called properties like firstName
//Objects for unstructured and named data

// const alan = {
//     firstName: 'Alan',
//     lastName: 'Ramirez',
//     age: 2037 - 2000,
//     friends: ['Michael', 'Peter', 'Steven']
// };

//Assignment 7

// const myCountry = {
//     country: 'USA',
//     capital: 'Washington',
//     language: 'English',
//     population: 329.5,
//     neighbors: ['Mexico', 'Canada']
// };

//DOT vs Bracket Notation

// const alan = {
//     firstName: 'Alan',
//     lastName: 'Ramirez',
//     age: 2037 - 2000,
//     job: 'Web Developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// //DOT is an operator
// console.log(alan.lastName);

// //Bracket notation can put any expression
// console.log(alan['lastName']);

// //This would not work with DOT
// const nameKey = 'Name';
// console.log(alan['first' + nameKey]);
// console.log(alan['last' + nameKey]);

// //Computing property is for Bracket then use DOT for cleaner and simple
// const interestedIn = prompt('What do you want to know about Alan? Choose between firstName, lastName, age, job, and friends.');
// console.log(alan[interestedIn]);

// if(alan[interestedIn]) {
//     console.log(alan[interestedIn]);
// }else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
// }

// //You can add properties like this
// alan.location = 'USA';
// alan['github'] = 'aramirez43';
// console.log(alan);

// //Challenge
// //"Alan has 3 friends, and his best friend is called Michael."

// console.log(`${alan.firstName} has ${alan.friends.length} friends, and his best friend is called ${alan.friends[0]}`);

//Assignment 8

// const myCountry = {
//     country: 'USA',
//     capital: 'Washington',
//     language: 'English',
//     population: 329.5,
//     neighbors: ['Mexico', 'Canada']
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry['population']);

//Object Methods
//Function attached to object is a method and can only use expression functions

// const alan = {
//     firstName: 'Alan',
//     lastName: 'Ramirez',
//     birthYear: 2000,
//     job: 'Web Developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     //you can use this method to pass the birth year from alan
//     //Also can use it to make a new property
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age
//     }
// };

// console.log(alan.calcAge());
// console.log(alan.age);
// console.log(alan['calcAge'](2000));

//Challenge
//Alan is a 37-year old Web Developer, and he has a driver's license

// const alan = {
//     firstName: 'Alan',
//     lastName: 'Ramirez',
//     birthYear: 2000,
//     job: 'Web Developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//                 this.age = 2037 - this.birthYear;
//                 return this.age
//             },

//     alanDescription: function() {
//         if (this.hasDriversLicense) {
//             const description = `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has a driver's license.`
//             return description
//         }else {
//             const description = `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he does not have a driver's license.`
//             return description
//         }
//     }
// }

// console.log(alan.calcAge())
// console.log(alan.alanDescription())

//Assignment 9

// const myCountry = {
//     country: 'USA',
//     capital: 'Washington',
//     language: 'English',
//     population: 329.5,
//     neighbors: ['Mexico', 'Canada'],

//     describe: function() {
//         console.log( `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`);
//     },

//     checkIsIsland: function() {
//         this.isIsland = this.neighbors.length === 0 ? true : false;
//     }
// };

// myCountry.describe();
// myCountry.checkIsIsland();
// console.log(myCountry);

//Coding Challenge 3

// const mark = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.BMI = this.weight / this.height ** 2;
//         return this.BMI
//     }
// };

// mark.calcBMI();
// console.log(mark);

// const john = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.BMI = this.weight / this.height ** 2;
//         return this.BMI
//     }
// };

// john.calcBMI();
// console.log(john);

// console.log(`Johns BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higher': 'lower'} than Mark's (${mark.calcBMI()})!`);

//Iteration: The Loop

// console.log('Listing wights repetition 1');
// console.log('Listing wights repetition 2');
// console.log('Listing wights repetition 3');
// console.log('Listing wights repetition 4');
// console.log('Listing wights repetition 5');
// console.log('Listing wights repetition 6');
// console.log('Listing wights repetition 7');
// console.log('Listing wights repetition 8');
// console.log('Listing wights repetition 9');
// console.log('Listing wights repetition 10');

//for loop
//use let because it will change
//after semicolon if its true the loop will keep going. if its false the loop will stop
//after second semi colon we add 1 to up the counter
// for(let rep = 1; rep <= 10; rep ++) {
//     console.log(`Listing wights repetition ${rep}`);
// };

//Assignment 10 

// for(let voterNumber = 1; voterNumber <= 50; voterNumber++) {
//     console.log(`Voter number ${voterNumber} is currently voting`)
// }

//Looping Arrays, Breaking and Continuing

//log the five elements
// const alansArray = [
//     'Alan',
//     'Ramirez',
//     2037 - 2000,
//     'Web Developer',
//     ['Michael', 'Peter', 'Steven'],
//     'Jay'
// ];

// //Alan[5] does not exist so it should be below 5

// for(let i = 0; i < 5 ;i++) {
//     console.log(alansArray[i]);
// }

// //or if you want it to be the same as the array every time
// const types = [];


// for(let i = 0; i < alansArray.length ;i++) {
//     //Reading types array
//     console.log(alansArray[i], typeof alansArray[i]);

//     //Filling types array
//     types[i] = typeof alansArray[i];
//     //Another way to fill
//     // types.push(typeof alansArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// //continue and break the loop
// //continue skips iteration 
// //break terminates loop

// for(let i = 0; i < alansArray.length ;i++) {
//     //Only strings are allowed
//     if (typeof alansArray[i] !== 'string') continue;
//     console.log(alansArray[i], typeof alansArray[i]);

// }

// for(let i = 0; i < alansArray.length ;i++) {
//     //stop if there is a number
//     if (typeof alansArray[i] === 'number') break;
//     console.log(alansArray[i], typeof alansArray[i]);

// }

//Assignment 11

// const populations = [329.5, 129, 126, 51];
// const percentages = [];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// for(let i = 0; i < populations.length; i++) {
//     const percentage = percentageOfWorld1(populations[i]);
//     percentages.push(percentage);
// };

// console.log(percentages)

//Looping backwards and loops in loops

// const alansArray = [
//     'Alan',
//     'Ramirez',
//     2037 - 2000,
//     'Web Developer',
//     ['Michael', 'Peter', 'Steven']
// ];

// //0,1,...,4
// //4,3,...,0

// for (let i = alansArray.length - 1; i >= 0; i--) {
//     //This one goes backwards
//     console.log(alansArray[i]);
// }

// const testArray = [-6, -91, 1011, -100, 84, -22, 0, 1, 473]


// function solution() {
//     for(let i = 0; i < testArray.length; i++) {
//         let max = testArray[0]
//         if (testArray[i] % 4 == 0 && testArray[i] > max) {
//             return console.log('it worked')
//         } else {
//           return console.log('it didnt work')
//         }
//     }
// }

// function solution(numbers, number) { 
//     let multiples = [];
//     let max = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % number === 0 && numbers[i] > max) {
//         multiples.push(numbers[i]);
//       }
//     }
  
//     return multiples;
//   }

//   console.log(multiplesOf([-6, -91, 1011, -100, 84, -22, 0, 1, 473], 4))
// console.log(solution());


// const test = 123
// console.log(test.toString().length)

// function solution(n, k) {
//     const numVariable = n
//     const arrayOfNumbers = Array.from(String(numVariable), Number)
//     const newArray = []
//     console.log(arrayOfNumbers)
//     for(let i = 0; i < arrayOfNumbers.length; i++) {
//         if (arrayOfNumbers[i] < 10) {
//             const arrayMath = arrayOfNumbers[i] + k
//             newArray.push(arrayMath)
//             return console.log(newArray)
//         } else if (arrayOfNumbers[i] > 9) {
//             const arrayMath = arrayOfNumbers[i++]
//             return console.log(arrayMath)
//         }
//     }
// }

// console.log(solution(512, 10))

// const alansArray = [
//     'Alan',
//     'Ramirez',
//     2037 - 2000,
//     'Web Developer',
//     ['Michael', 'Peter', 'Steven']
// ];

// //4,3,...,0

// for(let i = alansArray.length - 1; i >= 0; i--) {
//     console.log(i, alansArray[i]);
// };

// //Create a loop inside of a loop

// for(let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`------- Starting Exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`)
//     };
// };

//Assignment 12

// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for(let i = 0; i < listOfNeighbors.length; i++) {
//     for (let y = 0; y < listOfNeighbors[i].length; y++) {
//         console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
//     };
// };

//The While Loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weight repetition ${rep}`);
// };

//Will run while condition is true
// let rep = 1;
// while (rep <= 10) {
//     console.log(`lifting weight repetition ${rep}`);
//     rep++;
// };

//This one doesn't depend on a counter but a random variable

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('loop is about to end....');
// }

//Assignment 13 

// const populations = [329.5, 129, 126, 51];
// const percentages3 = [];

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// let i = 0;

// while(i < populations.length) {
//     const percentage = percentageOfWorld1(populations[i]);
//     percentages3.push(percentage);
//     i++;
// };

// console.log(percentages3);

//Coding Challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     const total = tip + bills[i]
//     totals.push(total)
    
// }

// function calcTip(bill) {

//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * .15;
//         return tip
//     }else {
//         const tip = bill * .20;
//         return tip
//     }
// };

// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i]
//         sum += arr[i]
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));

// console.log(tips);
// console.log(totals);



