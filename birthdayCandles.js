// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles = [4, 4, 1, 3]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCakeCandles(candles) {
	const orderedCandles = candles.sort((a, b) => (a > b ? -1 : 1));
	const tallestCandles = [orderedCandles[0]];
	for (let i = 1; i < orderedCandles.length; i++) {
		if (orderedCandles[i] === orderedCandles[0]) {
			tallestCandles.push(orderedCandles[i]);
		}
	}
	return tallestCandles.length;
}

const candles = [3, 2, 5, 30, 30, 7, 6, 9, 10, 30];
birthdayCakeCandles(candles);
console.log(birthdayCakeCandles(candles).length);
