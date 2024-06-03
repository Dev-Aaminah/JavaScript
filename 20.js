// Iterators / loops

// Simple for loop from 1 to 10
for (let index = 1; index <= 10; index++) {
    const number = index;
    if (number == 5) {
        console.log("5 is the best number."); // Print a special message when the number is 5
    }
    console.log(number); // Print the current number
}

// Nested loops example
for (let index = 0; index <= 10; index++) {
    console.log(`"Outer loop" ${index}`); // Print the index of the outer loop
    for (let j = 0; j <= 10; j++) {
        console.log(`"Inner loop", ${j}`); // Print the index of the inner loop
    }
}

// Multiplication tables using nested loops
for (let index = 0; index <= 10; index++) {
    console.log(`"Table of :" ${index}`); // Print the current multiplication table header
    for (let j = 0; j <= 10; j++) {
        console.log(index + 'x' + j + '=' + index * j); // Print the multiplication result
    }
}

// Iterating over an array
const myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // Print the length of the array
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // Print each element of the array
}

// Using break keyword to exit the loop when a condition is met
const arrayVal = 20;
for (let index = 1; index <= arrayVal; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 detected!"); // Print a message when the number 5 is detected
        break; // Exit the loop when the number 5 is detected
    }
    console.log(element); // Print the current number
}

// Using continue keyword to skip the current iteration when a condition is met
const arrayValue = 10;
for (let index = 1; index <= arrayValue; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 detected!"); // Print a message when the number 5 is detected
        continue; // Skip the rest of the loop iteration when the number 5 is detected
    }
    console.log(element); // Print the current number
}