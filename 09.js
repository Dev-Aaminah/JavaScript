// Array is an Object
// JavaScript arrays are resizable

// Defining an array with mixed types (numbers and a string)
const arr = [1, 2, 3, 'a', 5];
console.log("Element at index 3 in array 'arr':", arr[3]); // Output: 'a'

// Creating an array using the Array constructor
const myList = new Array(1, 2, 3, 4, 5);
console.log("Array created with Array constructor:", myList); // Output: [1, 2, 3, 4, 5]

// Methods of array

// Adding elements to the end of the array
myList.push(5, 6, 7);
console.log("Array after push(5, 6, 7):", myList); // Output: [1, 2, 3, 4, 5, 5, 6, 7]

// Pushing a single element and logging the new length of the array
console.log("New length after push(8):", myList.push(8)); // Output: 9
console.log("Array after push(8):", myList); // Output: [1, 2, 3, 4, 5, 5, 6, 7, 8]

// Removing the last element from the array
console.log("Element removed with pop():", myList.pop()); // Output: 8
myList.pop(); // Removing another element (7)
console.log("Array after two pop() calls:", myList); // Output: [1, 2, 3, 4, 5, 5, 6]

// Adding an element to the beginning of the array
myList.unshift(10);
console.log("Array after unshift(10):", myList); // Output: [10, 1, 2, 3, 4, 5, 5, 6]

// Removing the first element from the array
myList.shift();
console.log("Array after shift():", myList); // Output: [1, 2, 3, 4, 5, 5, 6]

// Checking if the array includes a specific element
console.log("Does myList include 4?:", myList.includes(4)); // Output: true

// Finding the index of a specific element
console.log("Index of 3 in myList:", myList.indexOf(3)); // Output: 2

// Slice & Splice

// ********************** SLICE **********************
// Slice does not modify the original array; it returns a shallow copy
const newArr = [9, 8, 7, 6, 5];
const newArr1 = newArr.slice(0, 3);
console.log("Original array 'newArr' after slice:", newArr); // Output: [9, 8, 7, 6, 5]
console.log("New array 'newArr1' from slice(0, 3):", newArr1); // Output: [9, 8, 7]

// ********************** SPLICE **********************
// Splice modifies the original array; it returns the removed elements
const anOther = ['a', 'b', 'c', 'd', 'e', 'f'];
const anotherArray = anOther.splice(0, 3);
console.log("Original array 'anOther' after splice:", anOther); // Output: ['d', 'e', 'f']
console.log("New array 'anotherArray' from splice(0, 3):", anotherArray); // Output: ['a', 'b', 'c']