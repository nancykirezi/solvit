// Reading command line arguments (one argument only) using process.argv.
// I sliced the first two elements of input array because they are are the path to the node executable and the path to the script file.
const inputString = process.argv[2];

// Split the string into an array of characters, reverse the array, join the array back into a string.
const reversedString = inputString.split('').reverse().join('');
// Print the reversed string.
console.log(reversedString);