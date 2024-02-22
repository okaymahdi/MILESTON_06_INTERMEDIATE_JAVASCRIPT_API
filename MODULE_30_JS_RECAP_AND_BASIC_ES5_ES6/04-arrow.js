/** function declaration (with [function] keyword) (this is explicit return) */
// function add (a, b){
//     const result = a + b;
//     return result;
// }

// function add (a, b){
//     /** not assign in variable */
//     return a + b;
// }

/** function expression */
// const add = function(a, b){
//     return a + b;
// }


/** arrow function. not [return] keyword. (this is implicit return) */
const add = (a, b) => /** return */ a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;


const sum = add4(5, 90, 44, 55);
console.log(sum);

const mult = multiply(12, 3)
console.log(mult);