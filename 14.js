// Function using the rest operator to handle an indefinite number of arguments
function calculateCartPrice(...num) {
    // The rest operator (...) collects all the arguments into an array called 'num'
    return num;
}

// Calling the function with multiple arguments
console.log("Calculating cart price with multiple items:");
console.log(calculateCartPrice(2, 5, 8, 5, 5, 6, 69, 8, 78)); 
// Output: [2, 5, 8, 5, 5, 6, 69, 8, 78] (array of all arguments)

// Creating an object 'user' with properties 'username' and 'price'
const user = {
    username: 'Amina',
    price: 199
};

// Function to handle user details and log them
function handleUser(anyobject) {
    // Using template literals to embed object properties in a string
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

// Calling the function with 'user' object as an argument
console.log("Handling user details:");
handleUser(user);
// Output: Username is Amina and price is 199.