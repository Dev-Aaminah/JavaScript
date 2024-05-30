// Numbers and Maths in JS

const score = 400;
console.log(score); // Output: 400
console.log(typeof(score)); // Output: 'number' (primitive data type)

// Creating a Number object
const balance = new Number(500);
console.log(balance); // Output: [Number: 500]
console.log(typeof(balance)); // Output: 'object' (Number object)

// Converting the Number object to a string
console.log(balance.toString()); // Output: '500'

// Formatting the number to a fixed number of decimal places
console.log(balance.toFixed(2)); // Output: '500.00'

const someNumber = 23.844534;

// Formatting the number to a specified precision
console.log(someNumber.toPrecision(2)); // Output: '24' (rounded to 2 significant digits)
console.log(someNumber.toPrecision(5)); // Output: '23.845' (rounded to 5 significant digits)

const num = 1000000;

// Converting the number to a localized string representation
console.log(num.toLocaleString()); // Output: '1,000,000' (default locale)
console.log(num.toLocaleString('en-PK')); // Output: '1,000,000' (locale-specific format)

// ###################### Maths ######################

console.log(Math); // Output: [Math] (Math object containing mathematical functions and constants)

// Absolute value
console.log(Math.abs(-3)); // Output: 3
console.log(Math.abs(3)); // Output: 3

// Rounding numbers
console.log(Math.round(2872.23)); // Output: 2872 (rounds to the nearest integer)

// Ceiling and floor functions
console.log(Math.ceil(327.2)); // Output: 328 (rounds up to the next integer)
console.log(Math.floor(327.2)); // Output: 327 (rounds down to the previous integer)

// Square root
console.log(Math.sqrt(16)); // Output: 4 (square root of 16)

// Minimum and maximum of a set of numbers
console.log(Math.min(2139, 23904890, 48, 398932)); // Output: 48 (smallest number)
console.log(Math.max(2139, 23904890, 48, 398932)); // Output: 23904890 (largest number)

// Random number between 0 and 1
console.log(Math.random()); // Output: a random number between 0 and 1

// Random number between 1 and 10
console.log((Math.random() * 10) + 1); // Output: a random number between 1 and 11 (excluding 11)
console.log(Math.floor(Math.random() * 10) + 1); // Output: a random integer between 1 and 10 (inclusive)

// Random number within a specific range (min to max)
const min = 10;
const max = 20;

// Random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: a random integer between 10 and 20