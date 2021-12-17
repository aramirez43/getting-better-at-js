//Assignment 1
// let country = 'United States'
// let continent = 'North America'
// let population = 329500000;
//
// console.log(country)
// console.log(population)
// console.log(continent)

//Data Types
//Number = floating point numbers = used for decimal and integers
//String = sequence of characters = used for text
//Boolean = logical type that can only be true or false = used for taking decisions
//undefined = value taken by a variable that is not yet defined "empty value"
//Null = 'empty value'
//Symbol = value that is unique and cannot be changed
//BigInt = larger integers than the number type can hold

// Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
//
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Alan');

//Dynamic Typing
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);

//Undefined
// let year;
// console.log(year);
// console.log(typeof year);

//Assignment 2
// let isIsland = false;
// let language;
// console.log(isIsland)
// console.log(population)
// console.log(country)
// console.log(language)

//let,const,and var
//let can be changed later
//const cannot be changed
//var should be avoided but is used for legacy
//let is block scoped and var is function scoped

// let age = 30;
// age = 31;
//
// const birthYear = 1991;
// birthYear = 1990
//
// var job = 'programmer';
// job = 'teacher';

//Assignment 3
// const language = 'English';
// let population = '329.5 million';
// const country = 'United States';
// const continent = 'North America';
// const isIsland = false;

//Assignment Operators
//let x = 10 + 5;
//x += 10; // x = x + 10 = 25
//x *= 4; // x = x * 4 = 100
//x++; // x = x + 1
//x--; // x = x - 1

//Comparison Operators
//console.log(ageAlan > ageAlejandra) // >,<,>=,<=

//Assignment 4
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

//Coding Challenge 1
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
//
// const alan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(alan);

//Template Literal
// const alanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(alanNew)
//
// console.log(`just a regular string.....`);

// this \n = new line
// console.log('String with \n\
// multiple \n\
// lines')
//
// console.log(`String
// Multiple
// lines`)

//Assignment 5
// const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description)

// const age = 15;

//if isOldEnough is true the it will activate in curly braces
// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
// }
//
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century);

//Assignment 6
// let country = 'United States'
// let continent = 'North America'
// let population = 329500000;
// const language = 'English';
// let averageCountry = 33000000;
//
// if (population > averageCountry) {
//     console.log(`${country} population is above average`)
// }else {
//     belowAverage = averageCountry - population;
//     console.log(`${country} population is ${belowAverage} below average`)
// }

//Coding Challenge 2
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
//
// if (markHigherBMI) {
//     console.log(`Marks BMI(${marksBMI}) is higher than Johns(${johnsBMI})!`)
// }else {
//     console.log(`Johns BMI(${johnsBMI}) is higher than Marks(${marksBMI})!`)
// }

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear))
// console.log(Number(inputYear) + 18)
// console.log(String(23))

//type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3)

// let n = '1' + 1; //'11'
// n = n - 1;// 11-1 = 10
// console.log(n);

//Assignment 7
'9'-'5';//4
'19'-'13'+'17';//617
'19'-'13'+17;//23
'123'<57;// false
5+6+'4'+9-4-2;//1143
