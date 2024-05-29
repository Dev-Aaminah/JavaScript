// Declare a variable 'score' with a string value that contains non-numeric characters
let score = "33abc"; 

// Log the type of 'score' to the console, which is 'string'
console.log(typeof score); // Output: 'string'

// Attempt to convert the 'score' string to a number using the Number() function and assign it to 'valInNumber'
let valInNumber = Number(score); 

// Log the type of 'valInNumber' to the console, which is 'number'
// The type will be 'number' even if the conversion results in NaN (Not-a-Number)
console.log(typeof valInNumber); // Output: 'number'

// Log the value of 'valInNumber' to the console
// Since "33abc" cannot be converted to a valid number, the result is NaN
console.log(valInNumber); // Output: NaN