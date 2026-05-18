// Logic for making a smaller array of random members of a larger array, but without duplicates in the smaller
// The core of the problem is that multiple randomly picked numbers might be the same numbers when trying to randomize selection

// Original array to pick items from:
const tastes = ["juicy", "crispy", "moist", "crunchy", "moldy", "bitter", "sweet", "salty"]

// Array to store three unique items in:
let threeUnique = [];

// Variables to hold random tastes and indexes
let randomTaste;
let randomTasteIndex;



// ********** Method 1: do ... while ****************************

for (let i = 0; i < 3; i++) {
    do {
        randomTaste = tastes[Math.floor(Math.random()*tastes.length)];
    }
    while (threeUnique.includes(randomTaste));

    threeUnique.push(randomTaste);
}

// The do..while loop runs until the random element is not in the array, usually just once unless there is a duplicate.
// A use case for the rare do ... while loop

console.log(threeUnique);



// ********** Method 2: reducing a duplicate *********************

// Removes one random element at a time from a duplicate of the array until there is only three left
// The first line makes threeUnique a copy of the entire tastes array, the splice line deletes one random element.

threeUnique = Array.from(tastes);
while (threeUnique.length > 3) {
   threeUnique.splice(Math.floor(Math.random()*threeUnique.length),1);
}

console.log(threeUnique);



// ********** Method 3: removing options as they are picked **********
// When an taste is randomly picked, it is deleted from the list of available tastes so it can't be picked again

threeUnique = [] // Clear the array

while (threeUnique.length < 3) {
    randomTasteIndex = Math.floor(Math.random()*tastes.length);

    threeUnique.push(tastes[randomTasteIndex]);

    tastes.splice(randomTasteIndex,1); // Delete item
}

console.log(threeUnique);



// ********** Method 4: supressing duplicates using sets **************************

threeUnique = new Set(); // Create an empty set

while (threeUnique.size < 3) {
    threeUnique.add(tastes[Math.floor(Math.random() * tastes.length)]);
}

threeUnique = Array.from(threeUnique); // Replace set with an array of itself

console.log(threeUnique);
