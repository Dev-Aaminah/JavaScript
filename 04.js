// Types of data in JS

// Primitive data type
// They are call by value
// 7 Types : string, number, boolean, null, undefined, symbol, BigInt

// Symbol
let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id === anotherId); // false because each Symbol is unique

// BigInt
const bigNumber = 389428937489273245345n;
console.log("Type of bigNumber is:", typeof(bigNumber)); // Output: 'bigint'

// Non-Primitive data type OR Reference type
// Array, Objects, Functions 

// Array
const numArray = [1, 2, 3, 4, 5];
console.log("Type of ", numArray, "is: ", typeof(numArray)); // Output: 'object' (arrays are a type of object in JavaScript)

// Object
const identity = {
    name: 'Amina',
    favLanguage: 'Python Tkinter Library'
};
console.log("Type of: ", identity, "is: ", typeof(identity)); // Output: 'object'

// Function
const myFunc = function() {
    console.log("This is function");
};
console.log("Type of: ", myFunc, "is: ", typeof(myFunc)); // Output: 'function' (functions are a special type of object in JavaScript)

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
const score = 100;
console.log("Type of score is:", typeof(score)); // Output: 'number'