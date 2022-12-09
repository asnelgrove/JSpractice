// Objective: write a function that accepts a positive number of sheep and returns a 
// string: "1 sheep...2 sheep... 3 sheep" etc. The length of the string 
// depends on the number passed to the function.
// Scroll down to see my solution.





// | | |
// V V V




const countSheep = (num) => {
    let message = []
    for (let i = 1; i <= num; i++) {
        message.push(i + " sheep...")
    }
    return message.reduce((a,c) => a + c);
}


console.log(countSheep(5));
console.log(countSheep(8));