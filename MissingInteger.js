"use strict";

// Write a function:
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	const orderedArray = A.sort(function (a, b) {
		return a - b;
	});

	let number = 1;

	for (let i in orderedArray) {
		if (orderedArray[i] > 0 && orderedArray[i] == number) number++;
	}
	return number;
	console.log(number);
}

const A = [1, 3, 6, 4, 0, -1, 2, 9, -10];
solution(A);
