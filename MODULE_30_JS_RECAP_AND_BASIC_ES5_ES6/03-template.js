const first = 'naan';
const last = 'pakhi';
const greet = 'potas potas';
const name = first + ' ' + last + " " + greet;
console.log(name);

const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

/** template string */
// const math = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(math);

/** array or object template */
const numbers = [45, 65, 77, 88, 43];
const student = {name: 'abid afia', age: 12};
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math);

// const email = 'hi john ' +
// 'chena chena lage';
// console.log(email);

// const email = 'hi john \n' +
// 'chena chena lage \n' +
// 'tumi maramari korba naki?';
// console.log(email);

const email = `hi john
chena chena lage 
tumi maramari korba naki?`;
console.log(email);

/** 4 way combined string 
 * 1) + icon in 2 string.
 * 2) .concat. ('' .concat ('hi ', icon))
 * 3) .join ['hi ', icon].join('')
 * 4) template string `hi ${icon}`
*/


// \n;
// "";
// '';
// ``;
// \;
// /''