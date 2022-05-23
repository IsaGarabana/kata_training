"use strict";

// Given two strings, one is a subsequence if all of the elements of the first string occur in the same orden within the second string. They do not have to be contiguous in the second string, but order must be maintained. For example, given the string 'I like cheese', the words ('I', 'cheese') are one possible subsequence of that string. Words are space delimited.
// Given two strings, s and t, where t is a subsequence of s, report the words of s, missing in t (case sensitive), in the order they are missing.
// Example
// s = 'I like cheese'
// t = 'like'
// Then 'like' is que subsequence, and ['I', 'cheese'] is the list of missing words, in order.

function missingWords(s, t) {
	
	const s_array = s.split(" ");
	const t_array = t.split(" ");

	let missing_words = [];

	

	s_array.forEach((word, i) => {
		if (
			word !== t_array[i - missing_words.length] &&
			!missing_words.includes(word[i])
		) {
			missing_words.push(word);
		}
	});

	return missing_words;
}

missingWords("I like cheese", "like");
