console.log("=== FUNCTIONS ===");

// Function declaration
function logger() {
  console.log("My name is Jonas");
}

// Calling / running / invoking the function
logger();
logger();
logger();


// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);



////////////////////////////////////
// Function Expressions


function calcAge(birthYear, currentYear) {
  // Parameters
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge(1991, 2037); // Arguments
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
console.log(introduce("Sarah")); // Missing parameters become undefined


////////////////////////////////////
// Return Values and Scope

function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); // Using one function inside another!
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); // Using one function inside another!
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


// Global scope
const globalVar = "I am global";

function testScope() {
  // Function scope
  const localVar = "I am local";
  console.log(globalVar); // Can access global
  console.log(localVar); // Can access local
}

testScope();
// console.log(localVar); // Error! Can't access local from outside
console.log(globalVar);

const userName = "Jonas"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; // Local to function
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));
// console.log(message); // Error - message is local to function

// 1. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 2. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 3. Describe the temperature
function describeTemperature(temp, unit) {
  let celsiusTemp;

  if (unit === 'C' || unit === 'c') {
    celsiusTemp = temp;
  } else if (unit === 'F' || unit === 'f') {
    celsiusTemp = fahrenheitToCelsius(temp);
  } else {
    return 'Invalid unit';
  }

  if (celsiusTemp > 30) {
    return 'Hot';
  } else if (celsiusTemp > 20) {
    return 'Warm';
  } else if (celsiusTemp > 10) {
    return 'Cool';
  } else {
    return 'Cold';
  }
}

// Test cases
console.log(celsiusToFahrenheit(25));       // 77
console.log(fahrenheitToCelsius(77));       // 25
console.log(describeTemperature(35, 'C'));  // Hot
console.log(describeTemperature(72, 'F'));  // Warm
console.log(describeTemperature(15, 'C'));  // Cool
console.log(describeTemperature(40, 'F'));  // Cold
console.log(describeTemperature(10, 'X'));  // Invalid unit


// 1. Function to calculate average
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// 2. Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins.`);
  }
}

// 3. Test Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

// 4. Test Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
