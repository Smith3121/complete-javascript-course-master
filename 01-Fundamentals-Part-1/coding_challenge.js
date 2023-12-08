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
let markHigherBMI1;

const markMass1 = 78;
const markHeight1 = 1.69;
const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass1 = 92;
const johnHeight1 = 1.95;
const johnMass2 = 85;
const johnHeight2 = 1.76;

markBMI1 = markMass1 / markHeight1 ** 2;
johnBMI1 = johnMass1 / johnHeight1 ** 2;

markHigherBMI1 = markBMI1 > johnBMI1;

markBMI2 = markMass2 / markHeight2 ** 2;
johnBMI2 = johnMass2 / johnHeight2 ** 2;

markHigherBMI2 = markBMI2 > johnBMI2;

console.log(
  "Does mark have a higher BMI with the first data?: " + markHigherBMI1
);
console.log(
  "Does mark have a higher BMI with the first data?: " + markHigherBMI2
);
