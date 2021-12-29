// Assignment 1
// let country = 'United States'
// let continent = 'North America'
// let population = 329500000;

// console.log(country)
// console.log(population)
// console.log(continent)

// Data Types
// Number = floating point numbers = used for decimal and integers
// String = sequence of characters = used for text
// Boolean = logical type that can only be true or false = used for taking decisions
// undefined = value taken by a variable that is not yet defined "empty value"
// Null = 'empty value'
// Symbol = value that is unique and cannot be changed
// BigInt = larger integers than the number type can hold

// Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Alan');

// Dynamic Typing
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);

// Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// Assignment 2
// let isIsland = false;
// let language;
// console.log(isIsland)
// console.log(population)
// console.log(country)
// console.log(language)

// let,const,and var
// let can be changed later
// const cannot be changed
// var should be avoided but is used for legacy
// let is block scoped and var is function scoped

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990

// var job = 'programmer';
// job = 'teacher';

// Assignment 3
// const language = 'English';
// let population = '329.5 million';
// const country = 'United States';
// const continent = 'North America';
// const isIsland = false;

// Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1

// Comparison Operators
// console.log(ageAlan > ageAlejandra) // >,<,>=,<=

// Assignment 4
// let halfOfPopulation = population / 2;
// console.log(halfOfPopulation)
// halfOfPopulation++
// console.log(halfOfPopulation)
// const finland = 6000000;
// console.log(halfOfPopulation > finland)
// let averageCountry = 33000000;
// console.log(halfOfPopulation < averageCountry)
// const description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;
// console.log(description)

// Coding Challenge 1
// const marksWeight = 78;
// const johnsWeight = 92;
// const marksHeight = 1.69;
// const johnsHeight = 1.95;
// let marksBMI = marksWeight / marksHeight**2;
// let johnsBMI = johnsWeight / johnsHeight**2;
// console.log(johnsBMI, marksBMI)
// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI)

// strings & template literals
// const firstName = 'Alan';
// const job ='Web Developer';
// const birthYear = 2000;
// const year = 2037;

// const alan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(alan);

// Template Literal
// const alanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(alanNew)

// console.log(`just a regular string.....`);

// this \n = new line
// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String
// Multiple
// lines`)

// Assignment 5
// const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description)

// const age = 15;

// if isOldEnough is true the it will activate in curly braces
// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century);

// Assignment 6
// let country = 'United States'
// let continent = 'North America'
// let population = 329500000;
// const language = 'English';
// let averageCountry = 33000000;

// if (population > averageCountry) {
//     console.log(`${country} population is above average`)
// }else {
//     belowAverage = averageCountry - population;
//     console.log(`${country} population is ${belowAverage} below average`)
// }

// Coding Challenge 2
// const marksWeight = 78;
// const johnsWeight = 92;
// const marksHeight = 1.69;
// const johnsHeight = 1.95;
// const marksWeight = 95;
// const johnsWeight = 85;
// const marksHeight = 1.88;
// const johnsHeight = 1.76;
// let marksBMI = marksWeight / marksHeight**2;
// let johnsBMI = johnsWeight / johnsHeight**2;
// console.log(johnsBMI, marksBMI)
// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI)

// if (markHigherBMI) {
//     console.log(`Marks BMI(${marksBMI}) is higher than Johns(${johnsBMI})!`)
// }else {
//     console.log(`Johns BMI(${johnsBMI}) is higher than Marks(${marksBMI})!`)
// }

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear))
// console.log(Number(inputYear) + 18)
// console.log(String(23))

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3)

// let n = '1' + 1; //'11'
// n = n - 1;// 11-1 = 10
// console.log(n);

// Assignment 7
// '9'-'5';//4
// '19'-'13'+'17';//617
// '19'-'13'+17;//23
// '123'<57;// false
// 5+6+'4'+9-4-2;//1143

// Truthy And Falsy
// 5 falsy values: 0, '', undefined, null, NaN
// Everything else is a Truthy
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('jonas'))
// console.log(Boolean({}))

// const money = 0;
// if(money) {
//     console.log("Dont Spend it all");
// }else {
//     console.log('you should get a job')
// }

// let height;
// if(height) {
//     console.log('yay height is defined')
// } else {
//     console.log('height is undefined')
// }
// Equality operators == vs ===
// === is strict and doesnt do type coercion
// == is loose and does type coercion
// const age = 18;
// if (age === 18) console.log('you just became an adult')
// if (age == '18') console.log('you just became an adult')

// const favorite = Number(prompt("whats your favorite number"));
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite === 12) {
//     console.log('cool 12 is an amazing number')
// }else if (favorite === 7) {
//     console.log('7 is also a cool number')
// }else {
//     console.log('number is not 23 or 7')
// }

// if (favorite !== 23) {
//     console.log('why not 23')
// }

// Assignment 8

// const numNeighbors = Number(prompt('How many neighbour countries does your country have?'))

// if (numNeighbors === 1) {
//     console.log('Only 1 border!')
// }else if (numNeighbors > 1) {
//     console.log('More than 1 border')
// }else {
//     console.log('no borders')
// }

// Boolean Logic
// AND operator returns true if both statements are true. Anything else is false
// OR operator returns true if one statement is true

// Logical Operators
// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision)//&& = and
// console.log(hasDriversLicense || hasGoodVision)// || = or
// console.log(!hasDriversLicense)// ! = Not
// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive) {
//     console.log('Sarah is able to drive')
// }else {
//     console.log('Someone else should drive')
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired)

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive')
// }else {
//     console.log('Someone else should drive')
// }

// Assignment 9
// let country = 'United States'
// let continent = 'North America'
// let population = 329500000;
// const language = 'English';
// const isIsland = false;

// if (population < 50000000 && language === 'English' && !isIsland) {
//     console.log('You should live in USA')
// }else {
//     console.log('USA Doesnt meet your criteria')
// }

// Coding Challenge
// const dolphinsAvgScore = 94;
// const dolphinsAvgScore = (97 + 112 + 101) / 3;
// const dolphinsAvgScore = (97 + 112 + 101) / 3;
// console.log(dolphinsAvgScore)
// const KoalasAvgScore = (95) / 3;
// const KoalasAvgScore = (109 + 95 + 123) / 3;
// const KoalasAvgScore = (109 + 95 + 106) / 3;
// console.log(KoalasAvgScore)
// const dolphinsMinimumScore = dolphinsAvgScore > 100;
// const koalasMinimumScore = KoalasAvgScore > 100

// if (dolphinsMinimumScore && !koalasMinimumScore) {
//     console.log('Dolphins Win because of minimum score')
// }else if (koalasMinimumScore && !dolphinsMinimumScore) {
//     console.log('Koalas Win because of minimum score')
// }else if (KoalasAvgScore === dolphinsAvgScore && !dolphinsMinimumScore && !koalasMinimumScore) {
//     console.log('both loose')
// } else if (!dolphinsMinimumScore && !koalasMinimumScore) {
//     console.log('no one wins')
// } else if (dolphinsAvgScore > KoalasAvgScore) {
//     console.log('Dolphins Win')
// } else if (KoalasAvgScore > dolphinsAvgScore) {
//     console.log('Koalas Win')
// }else if (dolphinsAvgScore === KoalasAvgScore) {
//     console.log("It's a Draw")
// }

// Switch Statement
// const day = 'thursday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('Plan course structure');
//         console.log('go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples')
//         break;
//     case 'friday':
//         console.log('record videos')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend')
//         break;
//     default:
//         console.log('not a valid day')
// }

// const today = 'sunday';

// if (today === 'monday') {
//     console.log('Plan course structure');
//     console.log('go to coding meetup');
// } else if (today === 'tuesday') {
//     console.log('prepare theory videos');
// } else if (today === 'wednesday' || today === 'thursday') {
//     console.log('Write code examples')
// }else if (today === 'friday') {
//     console.log('record videos')
// }else if (today === 'saturday' || today === 'sunday') {
//     console.log('enjoy the weekend')
// }else {
//     console.log('not a valid day')
// }

// Assignment 10
// const language = 'french';

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('Most number of native speakers')
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers')
//         break;
//     case 'english':
//         console.log('3rd place')
//         break;
//     case 'hindi':
//         console.log('Number 4')
//         break;
//     case 'arabic':
//         console.log('5th most spoken language')
//         break;
//     default:
//         console.log('great language too')
// }

// ternary conditional
// ? has 3 parts condition, if, and else
// const age = 21;
// age >= 18 ? console.log('I like to drink wine'):
//     console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water'
// console.log(drink)

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// Assignment 11
// const population = 329500000;

// const avgPopulation = population > 33000000 ? 'above' : 'below';
// console.log(`USA's population is ${population > 33000000 ? 'above' : 'below'}`)
// hello this is a test with vs code 
console.log('joe mama');
console.log('test')
console.log('test')
console.log('test')