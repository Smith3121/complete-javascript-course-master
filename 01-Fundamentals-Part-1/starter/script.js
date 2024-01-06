// shift alt A
// shift k c
/*


// Linking a JavaScript File: Lecture 007
let js = "amazing";
console.log(40 + 8 + 23 - 10);


// Values and Variables: Lecture 008
console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);


  // Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


// Data Types: Lecture 009
let javasciptIsFun = true;
console.log(javasciptIsFun);

console.log(typeof javasciptIsFun);

javasciptIsFun = "YES";
console.log(typeof javasciptIsFun);

let year;
console.log(year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let, const and var: Lecture 010
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

// shift alt A
// shift c k
const lastName = "Schmedtmann";
console.log(lastName);


// Basic Operators: Lecture 011
// Math operators
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);

const firstName = "Jonas";
const lastname = "Schmedtmann";
console.log(firstName + " " + lastname);

  // Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

  // Comparison operators
console.log(ageJones > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); 


// Operator Precedence: Lecture 012
 const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJones + ageSarah) / 2;
console.log(ageJones, ageSarah, averageAge);
 

// Coding Challenge #1
//  Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall. 

let markHigherBMI1;
let markHigherBMI2;

const markMass1 = 78;
const markHeight1 = 1.69;
const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass1 = 92;
const johnHeight1 = 1.95;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;

markHigherBMI1 = markBMI1 > johnBMI1;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

markHigherBMI2 = markBMI2 > johnBMI2;

console.log(
  "MarkBMI1: " + markBMI1,
  "MarkBMI2:" + markBMI2,
  "JohnBMI1:" + johnBMI1,
  "JohnBMI2:" + johnBMI2
);
console.log(
  "Does Mark have a higher BMI with the first data?: " + markHigherBMI1
);
console.log(
  "Does Mark have a higher BMI with the first data?: " + markHigherBMI2
);
 

// Strings and Template Literals: Lecture 014
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`);
 

// Taking Decisions: if / else Statements: Lecture 015
const age = 19;
const isOldEnough = age >= 28;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" 
// or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀

const markMass1 = 78;
const markHeight1 = 1.69;
const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass1 = 92;
const johnHeight1 = 1.95;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;

markHigherBMI1 = markBMI1 > johnBMI1;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

markHigherBMI2 = markBMI2 > johnBMI2;

if (markHigherBMI1) {
  console.log(
    `Mark have a higher BMI (${markBMI1}) with the first data than John's BMI (${johnBMI1}).`
  );
} else
  console.log(
    `Mark's BMI (${markBMI1}) isn't higher with the first data than John's BMI (${johnBMI1}).`
  );
if (markHigherBMI2) {
  console.log(
    `Mark have a higher BMI (${markBMI2}) with the second data than John's BMI (${johnBMI2}).`
  );
} else
  console.log(
    `Mark's BMI (${markBMI2}) isn't higher with the first data than John's BMI (${johnBMI2}).`
  );


// Type Conversion and Coercion: Lecture 017
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


// Truthy and Falsy Values: Lecture 018

//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YEEY! Height is defined");
} else {
  console.log("Height is UNDEFINEDD");
}


// Equality Operators: == vs. ===  : Lecture 019 
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("what is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  //22 === 23 -> False
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number!");
} else if (favorite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("Why not 23?");
 

// Logical Operators: Lecture 021
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}
 
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}


// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsOne = [96, 108, 89];
const koalasOne = [88, 91, 110];

const dolphinsTwo = [97, 112, 101];
const koalasTwo = [109, 95, 123];

const dolphinsThree = [97, 112, 101];
const koalasThree = [109, 95, 106];

let denominator;
let numerator;

function winnerTeam(dolphins, koalas) {
  dolphAvg = averageScore(dolphins);
  koalaAvg = averageScore(koalas);

  if (dolphAvg < 100 && koalaAvg < 100) {
    console.log(
      `Both teams have less points than 100 (${dolphAvg}, ${koalaAvg}), no one wins the trophy!`
    );
    return 0;
  }

  const dolphVic = dolphAvg > koalaAvg;
  const koalaVic = koalaAvg > dolphAvg;
  const draw = dolphAvg === koalaAvg;

  if (dolphVic) {
    console.log(`The Dolphins (${dolphAvg}) get the trophy!`);
  } else if (koalaVic) {
    console.log(`The Koalas (${koalaAvg}) get the trophy!`);
  } else if (draw) {
    console.log(
      `Both teams have a higher score than 100 (${dolphAvg}, ${koalaAvg}), and the scores are equal, both teams wins the trophy!`
    );
  }
}

function totalScore(team) {
  let score = 0;
  for (let i = 0; i < team.length; i++) {
    score = score + team[i];
  }
  return score;
}

function averageScore(team) {
  numerator = totalScore(team);
  denominator = team.length;
  teamAvg = numerator / denominator;
  return teamAvg;
}

winnerTeam(dolphinsOne, koalasOne);
winnerTeam(dolphinsTwo, koalasTwo);
winnerTeam(dolphinsThree, koalasThree);
 

// The switch Statement: Lecture 023
const day = "saturday";

switch (day) {
  case "monday": // "day" === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


//lecture 24: Statements and expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'am ${2037 - 1991} years old ${me}`);


//lecture 25: The Conditional (Ternary) operators

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= "wine") {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉 

let tip;
let bill;

function calculateTip(bill) {
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

billOne = 275;
billTwo = 40;
billThree = 430;

const calcTip1 = calculateTip(billOne);
const calcTip2 = calculateTip(billTwo);
const calcTip3 = calculateTip(billThree);

console.log(
  `The bill was ${billOne}, the tip was ${calcTip1}, and the total value ${
    billOne + calcTip1
  }`
);
console.log(
  `The bill was ${billTwo}, the tip was ${calcTip2}, and the total value ${
    billTwo + calcTip2
  }`
);
console.log(
  `The bill was ${billThree}, the tip was ${calcTip3}, and the total value ${
    billThree + calcTip3
  }`
);
*/
