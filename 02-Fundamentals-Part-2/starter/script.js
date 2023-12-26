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

/* const calcAge2 = function (birthYear){
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
 */

//lecture 33: functions calling other funtions

/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
return juice;
}

console.log(fruitProcessor(2, 3));
 */

//lecture 34: reviewing functions

/* const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    return retirement;
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
 */

/* Coding Challenge #5 | JavaScript 🔥 | Lecture 035
Back to the two gymnastics teams, the Dolphins and the Koalas! 
There is a new gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores 
is calculated (so one average score per team).
A team only wins if it has at least double the average score of 
the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the 
console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A ▶= 2 * B.
Apply this to the team's average scores 😉
 */

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    const avg = (scoreOne + scoreTwo + scoreThree) / 3;
    return avg;
}

// better solution: const calcAverage = (a, b, c) => (a + b + c) / 3;

function announceWinner(winnerTeam, avgWinner, avgLoser){
    console.log(`${winnerTeam} win with ${avgWinner} vs ${avgLoser} points`);
}


function checkWinner(avgDolphins, avgKoalas){
    if((avgDolphins >= 2 * avgKoalas)) {
        return announceWinner('Dolphins', avgDolphins, avgKoalas);
    }
    if ((avgKoalas >= 2 * avgDolphins)) {
        return announceWinner('Koalas', avgKoalas, avgDolphins);
    } else {
        console.log("No winner team")
    }
}

firstDataD = calcAverage(44, 23, 71);
firstDataK = calcAverage(65, 54, 49);

secondDataD = calcAverage(85, 54, 41);
secondDataK = calcAverage(23, 34, 27);
checkWinner(firstDataD, firstDataK);
checkWinner(secondDataD, secondDataK);
