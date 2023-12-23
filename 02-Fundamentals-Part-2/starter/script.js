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
/* 
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
*/

// lecture 31: Function Declarations vs Expressions

/* function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
 */

// lecture 32: Arrow Functions

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
