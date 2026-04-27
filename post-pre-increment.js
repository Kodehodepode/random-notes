let counter = 0;

console.log(`${++counter}`); // logs 1
// Because the value of counter is incremented before JavaScript creates the string to be logged.
// (pre-increment)

console.log(`${counter++}`); // Still logs 1
// Because the value of counter is incremented after JavaScript has created the string to be logged.
// (post-increment)

console.log(`${counter}`); // logs 2
// Because by now the value of counter has been incremented, after the previous console.log statement.
