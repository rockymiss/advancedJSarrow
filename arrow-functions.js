/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
// //code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5)
// console.log(sum)

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //code block
        return a + b;
    }
    
    let sum = addTwoNumbers(3, 5)
    console.log(sum)

// Single Line Arrow Function With Parameters

const addTowNumbers2 = (a, b) => a + b;

let sum2 = addTowNumbers2(4, 6)
console.log(sum2)

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello There!!');

const sayHello = () => console.log("hello");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
`This is
a multyline string
Can you see it
`
)
console.log(returnMultipleLines())