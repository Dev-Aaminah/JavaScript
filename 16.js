// ################    this    ################
const userObj = {
    username: 'Aiman',
    price: 999,
    welcomMessage: function() {
        // 'this' refers to the 'userObj' object in this context
        console.log(`Hello ${this.username}, Welcome!`);
        console.log("This in userObj.welcomMessage:", this);
    }
};

// Calling the method, 'this' refers to 'userObj'
console.log("Calling welcomMessage:");
userObj.welcomMessage(); // Output: Hello Aiman, Welcome!

// Changing the username property
userObj.username = 'Aian';

// Calling the method again with the updated username
console.log("Calling welcomMessage after updating username:");
userObj.welcomMessage(); // Output: Hello Aian, Welcome!

// 'this' in the global context (outside any function)
console.log("Global 'this':");
console.log(this); // Output: Window object in browsers or global object in Node.js

// Function in the global context
function coffee() {
    // 'this' refers to the global object (Window in browsers)
    console.log("This in coffee function:", this);
}
coffee(); // Output: Window object in browsers

// Function with a local variable
function tea() {
    let user = 'Zoe';
    // 'this' still refers to the global object (Window in browsers)
    console.log("This.user in tea function:", this.user); // Output: undefined (since 'user' is not a global property)
}
tea();

// ##################     ARROW   ##################
// ##################  functions   ##################

// Arrow function example
const chai = () => {
    // Arrow functions do not have their own 'this'; they inherit 'this' from the parent scope
    users = 23; // 'users' is implicitly global here, bad practice
    console.log("This.users in chai arrow function:", this.users); // Output: undefined (since 'this' in arrow function does not refer to global 'users')
}
chai();

// Arrow function with parameters and return value
const addTwoNum = (num1, num2) => {
    return num1 + num2;
};
console.log("Sum of 4 and 5 using addTwoNum:", addTwoNum(4, 5)); // Output: 9

// Arrow function with implicit return
const multiplyNumbers = (first, second) => first * second;
console.log("Product of 3 and 5 using multiplyNumbers:", multiplyNumbers(3, 5)); // Output: 15

// Arrow function returning an object
const something = () => ({ userID: '123abc' });
console.log("Object returned by something:", something()); // Output: { userID: '123abc' }