// Objective: write a function that takes a string as an argument. The string will be two words (names) separated by a space.
// Return the first letter of each name, capitalized, with one dot in between them.
// e.g. "Jon Doe" -> J.D
// Scroll down to see my solution





// | | |
// V V V






const abbreviateName = (str) => {
    let newStr = str.toUpperCase().split(" ");
    return newStr[0][0] + "." + newStr[1][0];
}

console.log(abbreviateName("Jon Doe"))
console.log(abbreviateName("Anita Vacation"))
console.log(abbreviateName("Ivana Koffy"))