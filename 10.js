// Initializing two arrays with string elements
const arr = ['Ali', 'Hamza', 'Arsal', 'Kashan'];
const Arr = ['Ahmed', 'Hashir', 'Zeeshan', 'Bazil'];

// Pushing one array (Arr) into another array (arr)
arr.push(Arr);
console.log("Array 'arr' after pushing 'Arr' into it:", arr); 
// Output: ['Ali', 'Hamza', 'Arsal', 'Kashan', ['Ahmed', 'Hashir', 'Zeeshan', 'Bazil']]

// Accessing an element from the nested array
console.log("First element of the nested array at index 4 in 'arr':", arr[4][0]); 
// Output: 'Ahmed'

// Concatenating two arrays into a new array
const Array = arr.concat(Arr);
console.log("Array after concatenation of 'arr' and 'Arr':", Array); 
// Output: ['Ali', 'Hamza', 'Arsal', 'Kashan', ['Ahmed', 'Hashir', 'Zeeshan', 'Bazil'], 'Ahmed', 'Hashir', 'Zeeshan', 'Bazil']

// Using the spread operator to combine arrays into a new array
const aNewArray = [...Arr, ...arr];
console.log("New array using spread operator to combine 'Arr' and 'arr':", aNewArray); 
// Output: ['Ahmed', 'Hashir', 'Zeeshan', 'Bazil', 'Ali', 'Hamza', 'Arsal', 'Kashan', ['Ahmed', 'Hashir', 'Zeeshan', 'Bazil']]

// Initializing an array with nested arrays
const arr0 = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [0, 1, 2]]];

// Flattening the nested array to a single level
const arr00 = arr0.flat(Infinity);
console.log("Flattened array 'arr0' with nested arrays flattened to single level:", arr00); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2]