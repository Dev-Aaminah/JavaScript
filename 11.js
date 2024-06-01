// Demonstrating object creation, property access, and object methods

// Singleton Symbol
const mySym = Symbol('ABC');

// Creating an object using object literals
const anObject = {
    name: 'Henry',
    "full Name": "Henry Clinton", // Property with a space in the key
    [mySym]: 'abc', // Symbol as a property key
    age: 22,
    adult: true,
    email: 'abc@gmail.com',
    lastLoggedIn: false
};

// Logging the entire object
console.log("Object 'anObject':", anObject); 
// Output: { name: 'Henry', 'full Name': 'Henry Clinton', [Symbol(ABC)]: 'abc', age: 22, adult: true, email: 'abc@gmail.com', lastLoggedIn: false }

// Checking the type of the object
console.log("Type of 'anObject':", typeof anObject); 
// Output: 'object'

// Accessing properties using dot notation
console.log("Email property using dot notation:", anObject.email); 
// Output: 'abc@gmail.com'

// Accessing properties using bracket notation
console.log("Email property using bracket notation:", anObject["email"]); 
// Output: 'abc@gmail.com'

// Accessing properties with space in the key using bracket notation
console.log("Full Name property using bracket notation:", anObject["full Name"]); 
// Output: 'Henry Clinton'

// Accessing the Symbol property
console.log("Symbol property:", anObject[mySym]); 
// Output: 'abc'

// Modifying a property
anObject.email = 'xyz@yahoo.com';

// Freezing the object to prevent further modifications
Object.freeze(anObject);

// Attempting to modify a frozen property
anObject.email = 'abc@gmail.com'; 
console.log("Email property after attempting modification:", anObject.email); 
// Output: 'xyz@yahoo.com' (modification does not take effect)
console.log("Frozen object 'anObject':", anObject); 
// Output: { name: 'Henry', 'full Name': 'Henry Clinton', [Symbol(ABC)]: 'abc', age: 22, adult: true, email: 'xyz@yahoo.com', lastLoggedIn: false }

// Adding a method to an object
const OneMoreObject = {
    abc: 'abc'
};
OneMoreObject.greeting = function() {
    console.log('Hey there!');
};
console.log("Calling greeting method:", OneMoreObject.greeting()); 
// Output: 'Hey there!' (method is called and output is displayed)

// Demonstrating singleton vs. non-singleton object creation
// const tinderUser = new Object() // Singleton object
const tinderUser = {}; // Non-singleton object
tinderUser.id = "123abc";
tinderUser.name = 'saim';
tinderUser.age = 23;
console.log("Non-singleton object 'tinderUser':", tinderUser); 
// Output: { id: '123abc', name: 'saim', age: 23 }

// Nested object structure
const regularUser = {
    email: 'goerge',
    fullName: {
        userFullName: {
            firstName: 'George',
            lastName: 'Cooper'
        }
    }
};
console.log("Nested object 'regularUser':", regularUser); 
// Output: { email: 'goerge', fullName: { userFullName: { firstName: 'George', lastName: 'Cooper' } } }
console.log("FullName property:", regularUser.fullName); 
// Output: { userFullName: { firstName: 'George', lastName: 'Cooper' } }
console.log("First name of nested user:", regularUser.fullName.userFullName.firstName); 
// Output: 'George'

// Merging objects
const object1 = {1: 'a', 2: 'b', 3: 'c'};
const object2 = {4: 'd', 5: 'e', 6: 'f'};

// Merging using object property shorthand
const object3 = {object1, object2};
console.log("Merged object 'object3':", object3); 
// Output: { object1: { 1: 'a', 2: 'b', 3: 'c' }, object2: { 4: 'd', 5: 'e', 6: 'f' } }

// Merging using Object.assign()
const object4 = Object.assign({}, object1, object2);
console.log("Merged object using Object.assign() 'object4':", object4); 
// Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f' }

// Merging using spread operator
const object5 = {...object1, ...object2};
console.log("Merged object using spread operator 'object5':", object5); 
// Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f' }

// Object methods to get keys, values, and entries
console.log("Keys of 'anObject':", Object.keys(anObject)); 
// Output: ['name', 'full Name', 'age', 'adult', 'email', 'lastLoggedIn']
console.log("Values of 'anObject':", Object.values(anObject)); 
// Output: ['Henry', 'Henry Clinton', 22, true, 'xyz@yahoo.com', false]
console.log("Entries of 'anObject':", Object.entries(anObject)); 
// Output: [['name', 'Henry'], ['full Name', 'Henry Clinton'], ['age', 22], ['adult', true], ['email', 'xyz@yahoo.com'], ['lastLoggedIn', false]]