"use strict";

// Given a Number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

// If i is multiple of both 3 and 5, prinmt FizzBuzz
// If i is a multiple of 3 (but not 5), print Fizz
// If i is a multiple of 5 (but not 3), print Buzz
// If i is not a multiple of 3 or 5, print the value of i

function fizzBuzz(n) {
	// Write your code here
	let arrayOfNIntegers = [];

	for (let i = 1; i <= n; i++) {
		arrayOfNIntegers.push(i);
	}

	arrayOfNIntegers.forEach((integer, i) => {
		if (integer % 3 === 0 && integer % 5 === 0) {
			return console.log("FizzBuzz");
		} else if (integer % 3 === 0 && integer % 5 !== 0) {
			return console.log("Fizz");
		} else if (integer % 3 !== 0 && integer % 5 === 0) {
			return console.log("Buzz");
		} else if (integer % 3 !== 0 && integer % 5 !== 0) {
			return console.log(integer);
		}
	});
}

fizzBuzz(15);
