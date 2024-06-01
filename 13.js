// Function to print each letter of the name on a new line
function sayMyName() {
    console.log('A');
    console.log('m');
    console.log('i');
    console.log('n');
    console.log('a');
}

// Calling the function to print the name
console.log("Calling sayMyName function to print each letter of the name:");
sayMyName();


// Function to add two numbers and log the result
function addNumbers(num1, num2) {
    console.log("Adding numbers:", num1, "+", num2, "=", num1 + num2);
}

// Calling the function with different types of arguments
console.log("Calling addNumbers with 3 and 4:");
addNumbers(3, 4);       // Output: Adding numbers: 3 + 4 = 7

console.log("Calling addNumbers with 3 and '4':");
addNumbers(3, "4");     // Output: Adding numbers: 3 + 4 = 34 (string concatenation)

console.log("Calling addNumbers with 3 and 'a':");
addNumbers(3, "a");     // Output: Adding numbers: 3 + a = 3a (string concatenation)

console.log("Calling addNumbers with 3 and null:");
addNumbers(3, null);    // Output: Adding numbers: 3 + null = 3 (null is treated as 0)

// Function to add two numbers and return the result
function addition(num00, num01) {
    let resultAdd = num00 + num01;
    return resultAdd;
    console.log("Addition Done!"); // This line will never execute due to return statement above
}

// Calling the function and storing the result
console.log("Calling addition with 3 and 4:");
const newAdd = addition(3, 4);
console.log("New Result:", newAdd); // Output: New Result: 7

// Function to log a message when a user logs in
function loginUserMessage(username) {
    return `${username} just logged in.`;
}

// Calling the function with and without an argument
console.log("Calling loginUserMessage with 'Aminah':");
console.log(loginUserMessage('Aminah')); // Output: Aminah just logged in.

console.log("Calling loginUserMessage with no argument:");
console.log(loginUserMessage()); // Output: undefined just logged in.

// Function to log a message when a user logs in with a check for undefined username
function logUserMessage(username) {
    if (username === undefined) {
        console.log('Hey! Stop. Please enter username.');
        return;
    }
    return `${username} just logged in.`;
}

// Calling the function with and without an argument
console.log("Calling logUserMessage with 'Aminah':");
console.log(logUserMessage('Aminah')); // Output: Aminah just logged in.

console.log("Calling logUserMessage with no argument:");
console.log(logUserMessage()); // Output: Hey! Stop. Please enter username.