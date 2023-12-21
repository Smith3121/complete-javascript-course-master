/* 'use strict';
//lecture 29: Strict mode

let hasDriversLicense = false;
let passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive :D");

//const interface = 'Audio';
//const private = 534;
 */
 
//lecture 30: Functions

function logger() {
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice =  fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
