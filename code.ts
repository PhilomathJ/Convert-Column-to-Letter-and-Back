/**
 * Recursively returns the letter combination corresponding to the column for the given index
 * @param {number}	num 	Index to be converted
 * @returns	{string}			Letter combination as column indicator
 */
const numberToLetter = (num: number): string => {
	return num <= 26
		? String.fromCharCode((num === 0 ? 26 : num) + 64)
		: numberToLetter(Math.floor((num - 1) / 26)) + numberToLetter(num % 26);
};

// Testing
const column: number = 28;

console.log('column', column);

const letter = numberToLetter(column);

console.log('letter', letter);
