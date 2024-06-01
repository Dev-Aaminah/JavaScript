// Destructuring example with an object

// Creating an object 'course' with properties courseName, price, and courseInstructor
const course = {
    courseName: 'JS with Aaminah',
    price: 999,
    courseInstructor: 'Aaminah'
};

// Destructuring 'course' object to extract 'courseInstructor' and rename it to 'instructor'
const { courseInstructor: instructor } = course;

// Logging the value of 'instructor' to the console
console.log("Course Instructor:", instructor); 
// Output: 'Aaminah'