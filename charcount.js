/*Objective: given a valid string, write a function that returns an object with a key for each character
that appears in the string, with a value representing the number of times that character appears */
//scroll down to see the solution







// | | |
// V V V









const charCount = (str) => {
    const returnObject = {};

    //loop through each charcter in the string
    for (character of str) {
        if (returnObject.hasOwnProperty(character)) {
            //if the character has already been seen, up the count
            returnObject[character] += 1
        } else {
            //if the character is being seen for the first time, start the count at 1
            returnObject[character] = 1
        }
    }

    return returnObject;
}

console.log(charCount('bumblebee'));
console.log(charCount('flibbertygibbett'));
console.log(charCount('mississippi'));
