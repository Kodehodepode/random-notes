Math.random(); // Makes a random number between 0 and 1 (float);

// If we want a whole number it must be multiplied by that range:

Math.random() * 10;

// This produces a float, if we want an integer we need to floor it:

Math.floor(Math.random() * 10));

// But this will never produce 10 because of how floor removes desimals, and it is extremely improbable to get a perfect 1 from Math.random()

Math.floor(Math.random() * 10) + 1; // Makes sure we don't get 0 and we might get 10.
