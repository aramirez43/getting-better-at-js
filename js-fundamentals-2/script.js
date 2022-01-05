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




