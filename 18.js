// Control Flow / Logic Control

// Basic if statement
if (2 != 3) {
    // This block will execute because the condition (2 != 3) is true
    console.log("executed"); // Output: executed
}

const temperature = 41;
if (temperature < 50) {
    // This block will execute because the condition (temperature < 50) is true
    console.log('less than 50'); // Output: less than 50
} else {
    // This block will not execute
    console.log('temperature is greater than 50');
}

const score = 200;
if (score > 100) {
    // This block will execute because the condition (score > 100) is true
    const power = 'fly';
    console.log(`User power ${power}`); // Output: User power fly
}

// The following line is commented out because it would cause an error
// 'power' is not accessible here as it is out of scope
// console.log(`User power ${power}`); // out of scope

// Short hand notation for if statement
const balance = 1000;
if (balance > 500) console.log('test'); // Output: test (implicit scope without curly braces)

// if-else if-else ladder
const credit = 1000;
if (credit < 500) {
    console.log("less than 500");
} else if (credit < 750) {
    console.log("less than 750");
} else if (credit < 900) {
    console.log("less than 900");
} else {
    // This block will execute because none of the previous conditions are true
    console.log("less than 1200"); // Output: less than 1200
}

// Logical AND (&&) operator
const userLoggedIn = true;
const userOwnDebitCard = true;
const userLogInFromGoogle = false;
if (userLoggedIn && userOwnDebitCard) {
    // This block will execute because both conditions are true
    console.log("Access Successful!"); // Output: Access Successful!
}

// Logical OR (||) operator
if (userLoggedIn || userLogInFromGoogle) {
    // This block will execute because at least one condition is true (userLoggedIn is true)
    console.log("Logged In Successfully."); // Output: Logged In Successfully.
}