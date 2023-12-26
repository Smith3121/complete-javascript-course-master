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
/* 
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
 */

// lecture 36: introduction to arrays

/* const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
 */

// Basic Array Operations (Methods): Lecture 037
/* const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log("You have a friend called Steven");
}
 */


/* Coding Challenge #6 : Lecture 038
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out the code 
    from first tip calculator challenge if you need to). Use the function type you like 
    the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the 
function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can actually
 be the returned value of a function! So you can just call a function as array values (so don't
  store the tip values in separate variables first, but right in the new array) 😉
 */

function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

const bills = [125, 555, 44];
const tips = [];
const total = [];

function storeTips(billsArray, tipsArray, totalArray){
    for (let index = 0; index < billsArray.length; index++) {
        const element = billsArray[index];
        tipsArray.push(calcTip(element));
        totalArray.push(calcTip(element) + element);
    }
}

storeTips(bills, tips, total);

console.log(`The bills array is ${bills}, the tips array is ${tips}, and the total array is ${total}`);
