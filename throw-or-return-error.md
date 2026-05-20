# When to return an Error(), and when to throw
(Summary from google search)

In JavaScript, the choice between throwing an error or returning one depends on whether the failure is truly "exceptional" or an expected part of the program's normal logic.

## When to throw new Error()

Use throw for unexpected, non-operational errors that require halting execution to prevent the application from entering an invalid state.

Best for: Programming errors (e.g., passing a string to a function that only accepts numbers), catastrophic system failures, or deep internal logic errors.

Behavior: Immediately stops function execution and bubbles up the call stack until it hits a try...catch block.

Advantage: Automatically provides a stack trace, which is essential for debugging.

## When to return new Error()

Use return for expected, operational errors that the calling code should handle gracefully without crashing the application.

Best for: Validation failures, "not found" results from a database, or user-facing input issues.

Behavior: Functions like any other return value; the program continues normally unless you explicitly check the returned value.

Advantage: Cleaner for TypeScript users (Go-style error handling), as it forces the caller to acknowledge and handle the error type via static analysis.

## Key Comparison

Feature       |  throw new Error()                      | return new Error()
--------------|-----------------------------------------|-------------------------------------------
Control Flow  |  Interrupts flow; bubbles up            | Continues flow; must be manually checked
Call Stack    |  Preserves stack trace for debugging    | May keep stack but requires manual inspection
Usage Case    |  Exceptional, rare scenarios            | Predictable, common failure cases
Async Usage   |  Rejects the Promise                    | Resolves the Promise (calling .then)

Pro Tip: If you choose to throw, always throw an actual Error object (e.g., throw new Error('msg')) rather than a string. This ensures you get a full stack trace for better troubleshooting
