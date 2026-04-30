// Code example from class:

let isInStock = true;
let discount = false;

if ((isInStock === true && discount === true) || productQuantity > 100) {
  // Discount of 15% given.
}


/*********************************

  The (isInStock === true) test can be reduced to just (isInStock)
  This is a little strange if not considering how JavaScript evaluates conditions and executes if-tests.

  Consider this simpler test:
  if (1 > 0) {
    // Code here
  }

  First, JavaScript tests the condition inside the parentheses and replaces it with the boolean value "true", then it passes "true" to the if-test which decides to run the block of code.

  This means, we could also do the test first, and save the result in a variable (!) like this:
  
  let testResult = (1 > 0);      // The resulting boolean is saved in testResult
  if (testResult) {              // If is passed the value of testResult (true)
    // Code here                 // If decides to run this code because JavaScript passed it the boolean value true.
  }

  Hence, all the following if-tests do the same thing, note especially method 3:
  
*******************************/

// Method 1
if ((isInStock === true && discount === true) || productQuantity > 100) {
  // Discount of 15% given.
}


// Method 2
if ((isInStock && discount) || productQuantity > 100) {
  // Discount of 15% given.
}


// Method 3, assigning test result to variable first
let manyProducts = (productQuantity > 100);

if ((isInStock && discount) || manyProducts) {
  // Discount of 15% given.
}

// The variable is still evaluated every time the if-test is run, so it will work correctly if the value has become false, it is not the same as hard-coding "true" in the test.
