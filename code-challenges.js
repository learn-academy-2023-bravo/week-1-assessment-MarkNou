// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Create function called boilingTemp
// Create one parameter called temp
// Use comparative operator to determine if input is greater than, less than, or strictly equal to 212 degrees F
// Use three conditional statements to filter to correct answer
// Return string interpolation with 1 of 3 outputs: input + "is at boiling point", "is below boiling point", "is at boiling point"

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilingTemp = (temp) => {
    if (temp > 212 ) {
        return `${temp} is above boiling point.`
    } else if (temp < 212) {
        return `${temp} is below boiling point.`
    } else {
        return `${temp} is at boiling point.`
    }
}
console.log(boilingTemp(temperature1)) // output: "42 is below boiling point."
console.log(boilingTemp(temperature2)) // ouput: "350 is above boiling point."
console.log(boilingTemp(temperature3)) // output: "212 is at boiling point."

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//Declare constant variable called padresWorldSeriesTotal
//Assign value as both arrays concatenated
//Console.log variable and add built in method to count length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const padresWorldSeriesTotal = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns) 

console.log(padresWorldSeriesTotal.length) // output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Declare constant variable reverseCohort
// Set value to currentCohort
// Apply split to seperate letters into an array
// Apply reverse to reverse order of index's
// Apply join to combine data in array into a string
// Console.log to get string in reverse

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

const reverseCohort = currentCohort.split("").reverse().join("")

console.log(reverseCohort) // output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//Apply lastIndexOf to variable myNumbers and use givenValue1 for argument
//Apply lastIndexOf to variable myNumbers and use givenValue2 for argument
//Console.log to get last index of where value appears

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue1)) // output: 7
console.log(myNumbers.lastIndexOf(givenValue2)) // output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Apply sort to both variables with .sort()
// Reverse sort to sort from largest to smallest
// Console.log both variables to recieves array of temperatures from largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a)) // output: [82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a)) // output: [68, 67, 66, 66, 62, 59, 59]
