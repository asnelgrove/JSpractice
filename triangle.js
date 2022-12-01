//Objective: write a function that will print to the console a triangle consisting of seven rows of #'s, each row one # longer than the last.
//Second objective: write a function that will print a triangle of hashes with any number of rows.
//scroll down to see the answers






// | | | 
// V V V 








// | | |
// V V V








const triangle7 = () => {
let row = "";

for (let counter = 0; counter < 7; counter++) {
    row = row + "#";
    console.log(row);
}
}

triangle7();

const triangle = (n) => {
    let row = "";

    for (let counter = 0; counter < n; counter ++) {
        row = row + "#";
        console.log(row);
    }
}

triangle(9);