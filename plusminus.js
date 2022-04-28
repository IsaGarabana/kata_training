"use strict";

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10(-4) are acceptable.

// Example
//arr= [1, 1, 0, -1, -1]

// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5=0.200000. Results are printed as:

// 0.400000
// 0.400000
// 0.200000

// * Complete the 'plusMinus' function below.
// *
// * The function accepts INTEGER_ARRAY arr as parameter.
// */

function plusMinus(arr) {
	let length = arr.length;
	let positives = 0;
	let negatives = 0;
	let zeros = 0;

	for (let i = 0; i < length; i++) {
		if (arr[i] > 0) {
			positives += 1;
		} else if (arr[i] < 0) {
			negatives += 1;
		} else if (arr[i] === 0) {
			zeros += 1;
		}
	}

	const positivesProportion = positives / length.toFixed(6);
	const negativesProportion = negatives / length.toFixed(6);
	const zerosProportion = zeros / length.toFixed(6);

	console.log(positivesProportion);
	console.log(negativesProportion);
	console.log(zerosProportion);
}
