// Assignment: Make a function that takes an array and a string, and returns a new array that is the exclusive or of the two.

// Originally submitted assignment:

function listeXor(liste, streng) {
    if (liste.includes(streng)) {
        // Fjern elementet hvis det er der
        liste.splice(liste.indexOf(streng), 1);
    } else {
        // Legg til elementet hvis det ikke er der
        liste.push(streng);
    }

    return liste;
}


// Better solution, suggested by one of the lecturer (thanks!):

function listeXor(liste, streng) {
    const substrIndex = liste.indexOf(streng); // Returnerer -1 hvis `streng` **ikke** finnes i `liste`
    if (substrIndex !== -1) {
        liste.splice(substrIndex, 1);
    } else {
        // Legg til elementet hvis det ikke er der
        liste.push(streng);
    }
    return liste;
}

// This works because indexOf returns -1 when the string is not found in the array, giving us an inclusion test for free.



// -------------- Side note / side quest ---------------

// When first trying to solve the task I looked for an XOR operator, and could not find that JavaScript has that for arrays of strings.
// I made a mess trying to use the bitwise operators. But I knew arrays can be cast to Sets and that would at least force uniqueness, solving half the task.
// Reading docmuentation i found a method that seem to work be an exclusive or (?) maybe solving the entire task, but I need to cast things back and forth,
// and my code ended up not very pretty:

function listeXor(liste, streng) {
    return Array.from(new Set(liste).symmetricDifference(new Set([streng])));
}

// Spelled out stepwise it might look like this:

function listeXor(liste, streng) {
  const A = new Set(liste);
  const B = new Set([streng]); // Requires an iterable, not a string, hence [string];

  const AxorB = A.symmetricDifference(B);

  return Array.from(AxorB);
}
