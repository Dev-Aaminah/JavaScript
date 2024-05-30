// Memory
// 2 Types:     1. Stack, 2. Heap
// Stack uses Primitive data type
// Heap use Non-Primitive data type

// +++++++++++ Stack +++++++++++
let myName = "Aaminah";
let anotherName = myName;
anotherName = "Aliya";
console.log(myName); // Output: "Aaminah"
console.log(anotherName); // Output: "Aliya"

// +++++++++++ Heap +++++++++++
let userOne = {
    email: 'user@gmail.com',
    number: 90078601,
    age: 25
};
let userTwo = userOne; // Both userTwo and userOne reference the same object in the heap

userTwo.email = 'abc@gmail.com'; // Modifying the email property through userTwo
console.log(userOne.email); // Output: "abc@gmail.com" (changes are reflected in userOne)
console.log(userTwo.email); // Output: "abc@gmail.com"