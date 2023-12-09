// shift alt A
// shift c k
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

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

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

// shift alt A
// shift c k
lastName = "Schmedtmann";
console.log(lastName);
*/

/* const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);

const firstName = "Jonas";
const lastname = "Schmedtmann";
console.log(firstName + " " + lastname);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

console.log(ageJones > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */

/* const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJones + ageSarah) / 2;
console.log(ageJones, ageSarah, averageAge);
 */

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
/* let markHigherBMI1;
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
 */
/* const firstName = "Jonas";
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
 */

/* const age = 19;
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
 */
/* 
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
 */

/* //type conversion
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
 */

/* //5 falsy values: 0, '', undefined, null, NaN
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
 */

/* const age = 18;
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
 */

/* const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

/* if (shouldDrive) {
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
 */

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

/* const dolphinsOne = [96, 108, 89];
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
 */

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
