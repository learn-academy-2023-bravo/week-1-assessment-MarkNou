# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:
A conditional statement is declared by if, else if, and else. It's contained in a code block and determines if something is true or false. Different methods can be used with primitive types of data. Booleans for example can give you true or false. Comporative statments to see if one value equal another value is also another common method. Based on the answer and desired output, it can be used to execute an action.

example:

// If input is "How are you"?
// Output will return "Good"!

const hello = (input) => {
    if (input === "How are you?") {
        return "Good!"
    }
}

console.log(hello("How are you?")) // output: "Good!"

Since "How are you?" was strictly equal to the input "How are you?", our condition was met and executed an action of retuning "Good!"



Researched answer:
A conditional statement is a programming structure in JavaScript that allows a program to make decisions based on if a condition is true or false. It allows our code to make decisions based on values given to it. Conditional statements allow our code to be more dynamic rather than run in a straight line. 

1. What is git? What is the difference between git and Github?

Your answer: Git allows users to view changes on files and share them with others. Github is a remote console to store, share, and colloborate files with others. With the two, it allows us to pull files from our local consoles and send them to a remote console. We can build branches of code and merge them together. This is very useful when it comes to creating blocks of code that will eventually be apart of a larger program.

Researched answer: Git is a version-control system for tracking changes in computer files and allow those changes to be sent to multiple people and vice versa. Its tool used by devs for source code management. It was created by Linus Torvalds in 2005 to allow other developers to contribute to Linux Kernel. 

2. Which JavaScript operators will return a Boolean value?

Your answer: Comparison operators will return a Boolean value, which is either true or false. The comparison operators are =,==,===,!,!==,<,>,<=, and =<. All these operators will either have a true or false output.

Researched answer: JavaScript operators that will return a Boolean value are comparison operators. Comparison operators like Boolean provide binary options and one answer. This is also known as a logical value, which can be viewed as true or false. 

3. What is an index? What is the difference between index and value?

Your answer: An index is a way to find a specific value within a data type. Index's count from 0 and up. It can be used for both strings and arrays. A value is a piece of data. A value can come in any data type. The difference is an index indiscriminatley locates values by their position number. Values can be a range of data from strings to booleans, etc. 

Researched answer:

An index is a numerical value used to locate a specific value within an array or string. A value is a piece of data that can be used as a variable or passed through an argument. A variable can be much more dynamic because the data is holds can vary and react differently based on it's type. 

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Strings are a type of data that holds text within single or double quotation marks. A string is limited to one piece of data held in the quotations. An array is a set of data contained in brackets. An array can hold string as well as other types of data. Strings can be made into arrays, as well as vice versa. They also behave differently with different function and built-in methods; some of which won't work on one or the other.

Researched answer:

Arrays and strings are used to store collections of data. Strings are used to store characters while arrays can be used to store any data type. Strings cannot be modified, while arrays can hold multiple pieces of information that can be added, removed, or reordered.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Proper pair programming starts with clear, specific, and good communication. Within a pair, one person is the driver and the other is the navigator. The driver's responisbility is to share their screen and type the code into the text editor. The navigators responsibility is to give instructions on what code to type. Proper practice is to be as precise as possible, use proper coding terminology, and be clear with their instructions. A driver's responsbility is to understand the instructions and give input when needed. A good technique is to allow one or the other to always run their code if they think its right; even if the other knows its wrong. This allows both persons to work through why something did or didn't work, and learn.

Researched answer: Pair programming is a practice in software development where two programmers work together, sharing a single computer and keyboard. The purposed of pair programming is to improve code quality, share knowledge, and communicate. The driver is the person who writes the code to be implemented. The navigator is responsible for communicating what code to be inputted, reviewing code, and making suggestions.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Higher order functions are functions that use other functions as arguments. Functions can be assigned as parameters, and can even give a function as their return output.

2. Jest: Jest is a software programming tool that is used to test and run JavaScript code. It is useful for programmers to test their code and theories while building.

3. Objects: Objects are containers of values and their properties. They can hold an array of information and values such as functions, variables, and data structures.

4. Method: Methods are functions that are associated with objects. They can take arguments and run commands.

5. Classes: Classes are used to create objects, and can create multiple instances of an object. They usually have similiar properties and methods.
