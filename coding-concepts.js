// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The built in method '.length' when applied to the const variable 'cohort' will count the number of characters in it's string. 'LEARN 2023' contains 10 characters including the space.

// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The index operator '[]' is used to find a specifc index in data, with the first value counting as zero. An argument of '4' is passed through the operator and gives us the value at the location; which is "o".

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Similar to the previous question, the index operator '[]' is used to find a specific index in data; in this case an array. A const variable is declared as index and set to a value of 1. When ran though console.log, it will look for the 1 index. The 1 index is "Ruby".

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will come up as an error since it's not a proper function.
// b) Verify and explain: toUpperCase works on strings. This array holds strings, but the function see's the indivdual strings as one value. To succesful uppercase the words, you'll need to convert the array into strings, and then back into an array.

// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: First, '.length' when applied to an array will find the number of values it has in its data set. Each value is counted as one and seperated by commas. 'typeof' gives us the data type that is outputted. In this case, the length of the array is 4, which is a number.
