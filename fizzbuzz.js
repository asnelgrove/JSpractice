//Objective: write a function that will iterate through all the numbers between 1 and 100, printing "fizz" whenever a number is a multiple of 3, "buzz" whenever a number is a multiple of 5, and "FizzBuzz" whenever a number is both a multiple of 3 and of 5.





for (let counter = 1; counter <=100; counter++) {
    if (counter % 3 == 0 && counter % 5 != 0) {
        console.log("fizz");
    } else if (counter % 5 == 0 && counter % 3 != 0) {
        console.log("buzz");
    } else if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(counter);
    };
};