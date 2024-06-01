// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that runs as soon as it is defined. It is a design pattern also known as a Self-Executing Anonymous Function.
// The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.

(function someKindOfFunction() {
    // This function is defined and immediately invoked
    console.log('Hey!'); // Output: Hey!
})();

// IIFE with arrow function
((name) => {
    // This arrow function is defined and immediately invoked with the argument 'Aaminah'
    console.log(`Hey there! ${name}`); // Output: Hey there! Aaminah
})('Aaminah');