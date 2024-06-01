// Demonstrating scope in JavaScript

// Global variables
let number1 = 10;   // 'let' variable in global scope
const number2 = 20; // 'const' variable in global scope
var number3 = 30;   // 'var' variable in global scope

// Logging global variables
console.log("Global scope variables:");
console.log("number1:", number1); // Output: 10
console.log("number2:", number2); // Output: 20
console.log("number3:", number3); // Output: 30

// Block scope example with if statement
if (true) {
    let num1 = 10;   // 'let' variable in block scope
    const num2 = 20; // 'const' variable in block scope
    var num3 = 30;   // 'var' variable in function/global scope

    // 'let' and 'const' are block-scoped, not accessible outside this block
}

// Trying to access block-scoped variables outside the block
console.log("Block scope variable 'var' accessible outside the block:");
console.log("num3:", num3); // Output: 30
// console.log(num1); // ReferenceError: num1 is not defined
// console.log(num2); // ReferenceError: num2 is not defined

// Demonstrating variable shadowing
let a = 100;    // Global 'let' variable
var b = 200;    // Global 'var' variable
const c = 300;  // Global 'const' variable

if (true) {
    let a = 10;    // Block-scoped 'let' variable shadows global 'a'
    console.log("Shadowed 'a' in block:", a); // Output: 10

    var b = 20;    // Reassigns global 'b'
    console.log("Reassigned 'b' in block:", b); // Output: 20

    const c = 30;  // Block-scoped 'const' variable shadows global 'c'
    console.log("Shadowed 'c' in block:", c); // Output: 30
}

// Logging global variables after block execution
console.log("Global variables after block execution:");
console.log("a:", a); // Output: 100 (shadowing doesn't affect global 'a')
console.log("b:", b); // Output: 20 (reassigned in the block)
console.log("c:", c); // Output: 300 (shadowing doesn't affect global 'c')

// **********************   FUNCTION    ********************** //
// **********************   SCOPE       ********************** //

// Nested scope example
function one() {
    const username = 'Iain'; // Function-scoped variable

    function two() {
        const email = 'iainarmitage@gmail.com'; // Nested function-scoped variable
        console.log("Accessing 'username' from outer scope:", username); // Output: Iain
    }

    // console.log(email); // ReferenceError: email is not defined
    two();
}

// Calling the outer function
one();

// Hoisting example
console.log("Hoisting example:");

// Function declarations are hoisted
console.log("Calling hoisted function 'addOne':", addOne(5)); // Output: 6
function addOne(num) {
    return num + 1;
}

// Function expressions are not hoisted
// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (nbr) {
    return nbr + 2;
};

// Calling function expression after initialization
console.log("Calling function expression 'addTwo':", addTwo(5)); // Output: 7