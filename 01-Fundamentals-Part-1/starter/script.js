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
