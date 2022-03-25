"use strict";
// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.

function aVeryBigSum(ar) {
	let sum = 0;

	if (ar.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < ar.length; i++) {
			sum += ar[i];
		}
	}
	return sum;
}
