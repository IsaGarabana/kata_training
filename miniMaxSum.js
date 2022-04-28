"use strict";

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example:
// ar= [1, 3, 5, 7, 9]
// The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9= 24.
//The function prints:
// 16 24

// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4of 5  elements.

function miniMaxSum(arr) {
	const sortedArray = arr.sort((a, b) => a - b);

	const minArray = sortedArray.slice(0, sortedArray.length - 1);
	const maxArray = sortedArray.slice(1, sortedArray.length);

	const minSum = minArray.reduce((acc, number) => acc + number);
	const maxSum = maxArray.reduce((acc, number) => acc + number);

	return console.log(minSum, maxSum);
}

const numbers = [5, 4, 2, 1, 3];

miniMaxSum(numbers);
