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