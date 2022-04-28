"use strict";

// Given an array of integers, find the sum of its elements.
// For example, if the array ar=[1,2,3,], 1+2+3=6, so return 6.

let ar = [1, 2, 3];

function simpleArraySum(ar) {
	let sum = 0;

	if (ar.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < ar.length; i++) {
			sum += ar[i];
		}
	}
	console.log(sum);
	return sum;
}

simpleArraySum([1, 2, 3]);

for (let i = 0; i > 1; i++) {
	setTimeout(function () {
		console.log(i);
	}, 0);
}
