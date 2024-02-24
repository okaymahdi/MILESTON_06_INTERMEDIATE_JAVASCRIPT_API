/**
 * Truthy:
 * 1. true.
 * 2. any number (+ve / -ve) will be truthy.
 * 3. any string. ' ' (other than 0).
 * 4. '0', 'false' truthy.
 * 5. {} empty object
 * 6. {a: 45, b: 56} object
 * 7. [] empty array.
 * 8. [4,5,6] array
 * 
 * Falsy:
 * 1. false.
 * 2. 0.
 * 3. '' (empty string).
 * 4. undefined.
 * 5. null.
 */

// const x = false; /** false */
// const x = true; /** true */
// const x = 4; /** true */
// const x = -4; /** true */
// const x = 'string'; /** true */
// const x = 's'; /** true */
// const x = ' '; /** false */
// let x; /** false */
// let x = null; /** false */
// let x = {}; /** true */
// let x = {a: 5, b: 56}; /** true */
// let x = {a: 5, b: 56}; /** true */
// let x = []; /** true */
let x = []; /** true */
if(x){
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

/** (optional) check false */
if(x === false) {
}

const y = '';
if(!y) {
    console.log('check falsy value is falsy');
}
else {
    console.log('check falsy value is truthy');
}

/** (optional) check truthy */
// const z = '';
// const z = 50;
const z = {class: 9};
if(!!z) {
    console.log('check truthy value is truthy');
}
else{
    console.log('check truthy value is falsy');
}