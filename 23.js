// Using the filter method to create a new array with elements that pass the test
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filtering numbers greater than 4
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

// Using the map method to create a new array with the results of calling a provided function on every element
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Adding 10 to each element
const newNumber = num.map((n) => n + 10);
console.log(newNumber); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Using the reduce method to execute a reducer function on each element of the array, resulting in a single output value
const myNewNumber = [1, 2, 3];
const initialValue = 0;
// Summing up all elements in the array
const myNewNumberTotal = myNewNumber.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, initialValue);
console.log(myNewNumberTotal); // Output: 6