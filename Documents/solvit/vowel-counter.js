// Reading command line arguments (one argument only) using process.argv.

let inputStr = process.argv[2]

const vowels = /[aeiou]/gi;	// Regular expression to match vowels.

// Count the number of vowels in the string.
let vowelCount = (inputStr.match(vowels) || []).length;

// Print the number of vowels in the string.
console.log(vowelCount);


