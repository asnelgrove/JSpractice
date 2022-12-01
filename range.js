//Objective: write a function that takes two numbers, a start and an end, and returns an array containing all the numbers between those two (inclusive).
//Second objective: modify the function to take a third parameter for "step". If no step is provided, the numbers in the range should increment by 1; otherwise, they should increment (or decrement) by the step.
//Third objective: write a function to sum all the numbers in the range array
//scroll down to see the answers





// | | |
// V V V








// | | |
// V V V








const range = (start, end) => {
    let result = [];
   
    for (let i = start; i <= end; i++) {
            result.push(i);
    } 

    return result;
} 

const rangeWithStep = (start, end, step) => {
    let result = [];
    if (step > 0) {
        //step is a positive number; the range will increment
        for (let i = start; i <= end; i+=step) {
        result.push(i);
    }} else if (step < 0) {
        //step is a negative number; the range will decrement
        for (let i = start; i >= end; i+=step) {
            result.push(i);
    }} else {
        //step is undefined
        for (let i = start; i <= end; i++) {
            result.push(i);
        } 
    }
    return result;
}

console.log(range(8, 16))
console.log(rangeWithStep(1, 10))
console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(5, 0, -1))

//sum all the numbers in the range array

const sum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sum(range(1,10)));
console.log(sum(rangeWithStep(1,10,2)));