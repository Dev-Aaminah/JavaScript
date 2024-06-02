// Switch Statement
// The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        // This block will execute because the value of month is 3
        console.log("March"); // Output: March
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Select Again");
}

const today = "Sunday";
switch (today) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        // This block will execute because the value of today is "Sunday"
        console.log("Today is Sunday."); // Output: Today is Sunday.
        break;
}

// Truthy and Falsy values
// In JavaScript, values that evaluate to true in a boolean context are called truthy, and those that evaluate to false are called falsy.
// Truthy examples: "0", 'false', " ", [], {}, function(){}
// Falsy examples: false, 0, -0, BigInt 0n, "", null, undefined, NaN

const userEmail = [];
if (userEmail.length == 0) {
    // This block will execute because the array is empty (length is 0, which is falsy)
    console.log("Array is empty."); // Output: Array is empty.
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    // This block will execute because the object is empty (no keys)
    console.log("Object is empty."); // Output: Object is empty.
}

// Nullish Coalescing Operator (??)
// The nullish coalescing operator returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

let val1;
val1 = 5 ?? 10; // val1 is assigned 5 because 5 is neither null nor undefined
console.log(val1); // Output: 5

let val2;
val2 = null ?? 10; // val2 is assigned 10 because null is considered nullish
console.log(val2); // Output: 10

let val3;
val3 = undefined ?? 10; // val3 is assigned 10 because undefined is considered nullish
console.log(val3); // Output: 10

// Ternary Operator
// The ternary operator is a shorthand for the if-else statement and takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

const iceTeaPrice = 100;
iceTeaPrice <= 80 
    ? console.log("less than 80") // This block will not execute because the condition is false
    : console.log("more than 80"); // Output: more than 80 (because the condition is false)