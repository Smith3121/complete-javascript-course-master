// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
// Setting up Prettier and VS Code | JavaScript 🔥 | Lecture 050

const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1971));


// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


// Debugging with the Console and Breakpoints | JavaScript 🔥 | Lecture 056

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) Fix
    // value: Number(prompt("Degree ceclsius:")),
    value: 10,
  };

  // B) Find
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  debugger;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify
console.log(amplitudeBug);
*/

// Coding Challenge #9 | JavaScript 🔥 | Lecture 057
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
// Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]

// GOOD LUCK 😀

const testDataOne = [17, 21, 23];
const testDataTwo = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let stringToPrint = "";
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    stringToPrint = stringToPrint + `... ${element}ºC in ${i + 1} days ...`;
  }
  console.log(stringToPrint);
};

printForecast(testDataOne);
printForecast(testDataTwo);
