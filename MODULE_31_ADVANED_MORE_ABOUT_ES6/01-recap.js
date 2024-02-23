/**
 * 1) var, let, const. [let & const block scope]
 * 2) default parameter.
 * 3) template string.
 * 4) arrow function.
 * 5) destructuring and spread operator.
 * 6) ES5 ==> object.keys, object.values.
 * 7) ES6 ==> object.entries.
 * 8) for...of loop loop [used in array & string],
 * 9) for...in loop [used in object] 
 */

/** block */
// if(true) {
//     console.log();
// }
// for(){}

/** template string */
const a = 56;
const numbers1 = [5, 6, 7, 8];
const person = {
    name: 'abid afia'
}
const message = `Hi, ${person.name} has a: ${a} access to ${numbers1[2]}`;
console.log(message);

/** arrow function. */
const square = x => x * x;
const sum = (a, b) => a + b;

/** destructuring and spread operator. */
const { name, z, ...others } = { x: 2, y: 5, z: 3, name: 'abid afia', age: 74 };

const [first, second, ...remaining] = ['abid', 'afia', 'abbu', 'ammu'];

/** normal for loop */
const numbers2 = [1, 2, 5, 6, 7];
for (let i = 0; i < numbers2.length; i++);

/** for...of loop */
for (const num of numbers2) {
    console.log(num);
}

const nobab = 'siraj ud doula';
for (const char of nobab) {
    console.log(char);
}

/** for...in loop */
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

for (const key of glass) {  // this is wrong
    console.log(key);
}

for (const key in glass) { // this is right
    const value = glass[key];
    console.log(key, value);
}

/** optional */
const keys = Object.keys(glass);
console.log(keys);
for (const key of keys) {
    const value = glass[key]
    console.log(key, value);
}