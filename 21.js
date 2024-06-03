// Initialize index to 1
let index = 1;

// While loop to print values from 1 to 10 with step of 2
while (index <= 10) {
    console.log(`Value of index is ${index}.`); // Print current value of index
    index = index + 2; // Increment index by 2
}

// Initialize number to 0 and multiple to 1
let number = 0;
let multiple = 1;

// Outer while loop to print multiplication tables from 0 to 10
while (number <= 10) {
    console.log(`Table of ${number}`); // Print table header for the current number
    // Inner while loop to print multiplication results for the current table
    while (multiple <= 10) {
        console.log(`${number} x ${multiple} =`, number * multiple); // Print the multiplication result
        multiple++; // Increment multiple
    }
    multiple = 1; // Reset multiple to 1 for the next number's table
    number++; // Increment number
}

// Initialize an array with three elements
let myArray = ['A', 'B', 'C'];
let arr = 0;

// While loop to iterate through the array
while (arr < myArray.length) {
    console.log(`${myArray[arr]}`); // Print current array element
    arr++; // Increment array index
}

// Initialize score to 1
let score = 1;

// Do-while loop to print score from 1 to 10
do {
    console.log(`Score is : ${score}`); // Print current score
    score++; // Increment score
} while (score <= 10); // Check condition at the end