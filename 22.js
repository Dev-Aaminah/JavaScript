// Using for...of loop to iterate over an array
let arr = [1, 2, 3];
for (const val of arr) {
    console.log(val); // Prints each element of the array: 1, 2, 3
}

let greetings = "Hello!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`); // Prints each character of the string: H, e, l, l, o, !
}

// Using Map object to store key-value pairs
const newMap = new Map();
newMap.set('PK', "Pakistan"); // Adding a key-value pair to the map
newMap.set('USA', "United States of America"); // Adding another key-value pair
console.log(newMap); // Prints the entire map: Map(2) {'PK' => 'Pakistan', 'USA' => 'United States of America'}
newMap.set('UAE', "United Arab Emirates"); // Adding another key-value pair
console.log(newMap); // Prints the updated map: Map(3) {'PK' => 'Pakistan', 'USA' => 'United States of America', 'UAE' => 'United Arab Emirates'}

// Attempting to use for...of loop with an object (will cause an error)
// Objects are not directly iterable with for...of
const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
};
for (const [key, value] of Object.entries(myObj)) { // Using Object.entries() to make the object iterable
    console.log(key , ':', value); // Prints each key-value pair: game1: NFS, game2: Spiderman
}

// Using for...in loop to iterate over object properties
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); // Prints each key and its corresponding value: js shortcut is for JavaScript, etc.
}

// Using for...in loop to iterate over array indices
const newArray = ["a", "b", "c"];
for (const key in newArray) {
    console.log(`${key} ${newArray[key]}`); // Prints index and element of the array: 0 a, 1 b, 2 c
}

// Using forEach loop to iterate over array elements
const newArr = ["js", "ruby", "java", "python", "cpp"];
newArr.forEach(element => {
    console.log(element); // Prints each element of the array: js, ruby, java, python, cpp
});

// Using forEach with a function to print each element
const arrayName = ["ali", "hassan", "hamza"];
const printMe = (element) => {
    console.log(element); // Prints each element passed to the function: ali, hassan, hamza
};
arrayName.forEach(printMe); // Invokes the printMe function for each element in arrayName