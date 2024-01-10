'use strict';
/*
//lecture 29: Strict mode

let hasDriversLicense = false;
let passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive :D");

//const interface = 'Audio';
//const private = 534;


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


// lecture 31: Function Declarations vs Expressions

function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


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


//lecture 33: functions calling other funtions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
return juice;
}

console.log(fruitProcessor(2, 3));


//lecture 34: reviewing functions

const calcAge = function(birthYear){
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


// Coding Challenge #5 | JavaScript 🔥 | Lecture 035
// Back to the two gymnastics teams, the Dolphins and the Koalas! 
// There is a new gymnastics discipline, which works differently. 
// Each team competes 3 times, and then the average of the 3 scores 
// is calculated (so one average score per team).
// A team only wins if it has at least double the average score of 
// the other team. Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the 
// console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time

// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A ▶= 2 * B.
// Apply this to the team's average scores 😉

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


// lecture 36: introduction to arrays

const friend1 = "Michael";
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


// Basic Array Operations (Methods): Lecture 037
const friends = ['Michael', 'Steven', 'Peter'];
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


// Coding Challenge #6 : Lecture 038
// Steven is still building his tip calculator, using the same rules as before: 
// Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out the code 
//     from first tip calculator challenge if you need to). Use the function type you like 
//     the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the 
// function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

// Test data: 125, 555 and 44

// Hint: Remember that an array needs a value in each position, and that value can actually
//  be the returned value of a function! So you can just call a function as array values (so don't
//   store the tip values in separate variables first, but right in the new array) 😉


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

// lecture 39
const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991,
   'teacher', ['Michael', 'Peter', 'Steven']];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


// Dot vs Bracket Notation | JavaScript 🔥 | Lecture 040

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey)

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstname, lastname age, job, and friends`);

if(jonas[interestedIn]){
console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstname, lastname age, job, and friends");
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// Jonas has 3 friends and his best friend is called Michael.
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
  
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
  
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    },
  };
  
  console.log(jonas.calcAge());
  
  console.log(jonas.age);
  console.log(jonas.age);
  console.log(jonas.age);
  
// Challenge
// "Jonas is a 46 years old teacher, and he has a drivers license"
function hasDriversLicence (){
    if(jonas.hasDriversLicense){
        return "has a drivers license.";
    } else return "has no drivers license.";
}
console.log(`${jonas.firstName} is a ${jonas.calcAge()} years old ${jonas.job}, and he ${hasDriversLicence()}`);
// better solution
//  getSummary: function () {
//    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//  }

// Coding Challenge #7 | JavaScript 🔥 | Lecture 042

// Let's go back to Mark and John comparing their BMIs! 
// This time, let's use objects to implement the calculations!
//  Remember: 
//  BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name,
//  mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the 
// full name and the respective BMI. Example: "John's BMI (28.3) is higher 
// than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. 
// John weights 92 kg and is 1.95 m tall. 


mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};

john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
};



function calcBMI(mass, height, object) {
    const BMI = mass / height ** 2;
    object.BMI =  BMI;
    return BMI;
}



function compareBMI(...people){
    highestBMI = {
        BMI: 0,
        fullName: '',
    };
    bmiAndNameArray = [];

    for (let i = 0; i < people.length; i++) {
        const objectToCompare = people[i];
        objectBMI = calcBMI(objectToCompare.mass ,objectToCompare.height, objectToCompare);
       if(highestBMI.BMI < objectBMI){
        highestBMI.BMI = objectBMI;
        highestBMI.fullName = objectToCompare.fullName;
       }
       arrayElement = ` ${objectToCompare.fullName} (${objectBMI.toFixed(2)})`;
       bmiAndNameArray.push(arrayElement);
    }
    console.log(`From the list of ${bmiAndNameArray}, ${highestBMI.fullName} (${highestBMI.BMI.toFixed(2)}) has the highest BMI.`);
}

compareBMI(mark, john);


// Iteration The for Loop | JavaScript 🔥 | Lecture 043
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// Looping Arrays, Breaking and Continuing | JavaScript 🔥 | Lecture 044
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling tpyes array
  //   types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


// Looping Backwards and Loops in Loops | JavaScript 🔥 | Lecture 045

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 0; exercise < 6; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 0; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

// The while Loop | JavaScript 🔥 | Lecture 046

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
