const name = 'Aaminah';
const degree = 'Software Engineering';

// Using template literals for string interpolation
console.log(`Hello my name is ${name} and my degree title is ${degree}`);

// Creating a String object
const goodName = new String('Hasaan');

// Checking the type of 'goodName'. It should output 'object' because 'goodName' is a String object
console.log(typeof(goodName)); // Output: 'object'

// Accessing the character at index 3 (0-based index)
console.log(goodName[3]); // Output: 'a'

// Displaying the prototype of the 'goodName' String object
console.log(goodName.__proto__);

// Getting the length of the string
console.log(goodName.length); // Output: 6

// Converting the string to uppercase
console.log(goodName.toUpperCase()); // Output: 'HASAAN'

// Getting the character at index 2
console.log(goodName.charAt(2)); // Output: 's'

// Finding the index of the first occurrence of 'a'
console.log(goodName.indexOf('a')); // Output: 1

// Extracting a substring from index 0 to 4 (excluding index 4)
const newString = goodName.substring(0, 4);
console.log(newString); // Output: 'Hasa'

// Slicing the string from index 0 to 4 (excluding index 4)
const anotherString = goodName.slice(0, 4);
console.log(anotherString); // Output: 'Hasa'

// Trimming whitespace from both ends of the string
const newStr = "             goodName                          ";
console.log(newStr); // Output: '             goodName                          '
console.log(newStr.trim()); // Output: 'goodName'

// Working with URLs and strings
const url = 'https://abc.com/learn alphabets';
console.log(url); // Output: 'https://abc.com/learn alphabets'

// Replacing the first occurrence of a space with an empty string
console.log(url.replace(' ', '')); // Output: 'https://abc.com/learnalphabets'

// Replacing 'com' with 'pk'
console.log(url.replace('com', 'pk')); // Output: 'https://abc.pk/learn alphabets'

// Checking if the URL contains the substring 'abc'
console.log(url.includes('abc')); // Output: true

// Splitting a string into an array based on the delimiter '-'
const newName = 'abc-jkl-xyz';
console.log(newName.split('-')); // Output: ['abc', 'jkl', 'xyz']