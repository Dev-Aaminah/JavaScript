// Date and Time in JS

// ###################### Date ######################

const myDate = new Date();
console.log("Current date and time:", myDate); // Output: current date and time
console.log("Date as a string:", myDate.toString()); // Output: date in string format
console.log("Date in readable format:", myDate.toDateString()); // Output: date in human-readable format
console.log("Current year:", myDate.getFullYear()); // Output: current year
console.log("Milliseconds of current time:", myDate.getMilliseconds()); // Output: milliseconds of the current time
console.log("Set month method:", myDate.setMonth); // Output: the setMonth function
console.log("Type of myDate:", typeof(myDate)); // Output: 'object' (Date object)

// Creating a new date with specified year, month, and day
let myCreatedDate = new Date(2024, 0, 2); // Month is 0-indexed (0 = January)
console.log("Created date (2024, 0, 2):", myCreatedDate); // Output: Wed Jan 02 2024
console.log("Formatted created date:", myCreatedDate.toDateString()); // Output: Tue Jan 02 2024

// Creating a new date from a string
let newDate = new Date("12-1-2024"); // MM-DD-YYYY format
console.log("Created date from string ('12-1-2024'):", newDate); // Output: Sun Dec 01 2024
console.log("Formatted new date from string:", newDate.toDateString()); // Output: Sun Dec 01 2024

// Getting the current timestamp
let myTimeStamp = Date.now(); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log("Current timestamp (milliseconds since 1970-01-01):", myTimeStamp); // Output: a large number representing milliseconds

// Creating a new date object with the current date and time
let myNewDate = new Date();
console.log("Current date and time:", myNewDate); // Output: current date and time
console.log("Formatted current date:", myNewDate.toDateString()); // Output: current date in human-readable format
console.log("Current day of the month:", myNewDate.getDate()); // Output: day of the month (1-31)
console.log("Current day of the week:", myNewDate.getDay()); // Output: day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
console.log("Current year:", myNewDate.getFullYear()); // Output: the current year