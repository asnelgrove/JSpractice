// Objective: given an array of game scores, write a function that calculates the player's total points. 
// The array will consist of strings like "x:y". The points are calculated thusly:
// If x > y, points = 3
// If x = y, points = 1
// If x < y, points = 0
// The function should return the number of total points
//Scroll down to see my first solution (and then a better one)







// | | |
// V V V






const calculatePoints = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        //find the index of the colon
        const regex = /:/;
        let colon = arr[i].search(regex);
        //turn the values before and after the colon into numbers
        let x = Number(arr[i].substring(0, colon));
        let y = Number(arr[i].substring(colon+1));
        //calculate the points
        if (x > y) {
            result += 3;
        } else if (x === y) {
            result += 1
        }
    }
    return result
}

console.log(calculatePoints(["3:1", "2:2", "1:3"])) // -> 4
console.log(calculatePoints(["3:1", "2:2", "4:3", "5:5", "1:1", "4:2"])) // -> 12

//a simpler solution: split each string into two substrings and let JS automatically convert 
//these to numbers when it evaluates the comparison expressions

const calculatePoints2 = (arr) => {
    let result = 0;
    for (const str of arr) {
        const [scoreX, scoreY] = str.split(":");
        const points = scoreX > scoreY ? 3 : scoreX === scoreY ? 1 : 0;
        result += points;
    }
    return result;
}