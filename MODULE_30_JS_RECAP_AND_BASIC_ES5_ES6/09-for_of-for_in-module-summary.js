/** for of use on array or string not in object .
 * for in use on object.
*/

// const numbers = [1, 2, 5, 6, 7];
// for(let i = 0; i<numbers.length; i++);

// for (const num of numbers){
//     console.log(num);
// }

// const nobab = 'siraj ud doula';
// for (const char of nobab){
//     console.log(char);
// }

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

// for(const key of glass){
//     // console.log(key);
//     // this is wrong
// }

// for(const key in glass) {
//     const value = glass[key];
//     console.log(key, value);
// }

/** optional */
const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value = glass[key]
    console.log(key, value);
}


/**
 * ------------- SUMMARY -------------
 * variable. ==> var, const, let.
 * functional default parameter.
 * template literals.
 * arrow function ==> () => {}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// let function = (arg1, arg2, ...arg) => XPathExpression;

/** single parameter */
// const greet = function(who) {
//     return `Hello, ${who}`;
// }

// const greet = (how) => {
//     return `Hello ${who};`
// }

/** multiple parameter */
// const add = function (num1, num2) {
//     return num1 + num2;
// }

// const add = (num1, num2) => num1 + num2;

/** destructuring  {name, age} = user */

/** spread syntax {...user} */

/** rest parameter {age, ...rest} */


/** spread operator in object */
// let {x, y, ...z} = {
//     x: 1,
//     y: 2,
//     a: 3,
//     b: 4,
//     c: 5
// };
// console.log(z);


/** spread operator 3 way operation */

/** 1) copy */
// const fruits = ['mango', 'banana'];
// const fruitsCopy = [...fruits];
// console.log(fruitsCopy);

/** 2) merge */
// const fruits = ['mango', 'banana'];
// const vegetables = ['tomato']
// const fruitsAndVegetablesMerge = [...fruits, ...vegetables];
// console.log(fruitsAndVegetablesMerge);

/** 3) passing as argument */
// const numbers = [1, 2, 3, 4, 5, 6];
// Math.max(...numbers);
// Math.min(...numbers);

/** array destructuring 4 way */

/** 1) */
// const numbers = [1, 2, 3];
// const num1 = numbers[0];
// const num2 = numbers[1];
// const num3 = numbers[2];

/** 2) */
// let numbers = [1, 2, 3];
// let [num1, num2, num3] = numbers;

/** 3) */
// let [num1, num2, num3] = [1, 2, 3];
// console.log(num1);
// console.log(num2);
// console.log(num3);

/** 4) */
// let num1, num2, num3;
// [num1, num2, num3] = [1, 2, 3];
// console.log(num1);
// console.log(num2);
// console.log(num3);

/** object --> array */
// Object.keys()
// Object.values()
// Object.entries()

/** for ...of vs for...in
 * 1) for...of - use to loop over string and arrays.
 * 2) for...in - use to loop over object.
 */

/** for...of */
const str = 'Hello World';
for (element of str) {
    console.log(element);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (number of numbers) {
    console.log(number);
}

/** for...in */
const student = {
    registration: '123456',
    name: 'saddam',
    age: 33,
};

for (let key in student) {
    console.log(key, student[key]);
}