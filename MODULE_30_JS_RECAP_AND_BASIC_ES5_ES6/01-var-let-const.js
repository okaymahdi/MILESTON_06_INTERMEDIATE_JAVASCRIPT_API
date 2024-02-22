/**
 * var mutable.
 * const, let block scoped.
 */

// const mony = 25;
// mony = 50;
// console.log(mony);

// const mony = 25;
// const rich = mony + 25;
// console.log(rich);

// let count = 0;
// count = count + 10;
// console.log(count);

// const numbers = [23, 4, 23, 12, 65];
// numbers[1] = 55;
// numbers.push(8, 9, 10)
// console.log(numbers);

// object
// const student = {
//     name: 'abid all masroor',
//     class: 12
// }
// student = {name: 'afia afrin'}
// console.log(student);

// let student = {
//     name: 'abid all masroor',
//     class: 12
// }
// student = {name: 'afia afrin'}
// console.log(student);

// const student = {
//     name: 'abid all masroor',
//     class: 12
// }
// student.name = 'afia afrin'
// console.log(student);

// const sum = 0
// for(const i = 0; i <10; i++){/** error */}

// let sum = 0
// for(let i = 0; i <10; i++){
//     sum = sum + i;
// }
// console.log(sum);

let sum = 0
for(let i = 0; i <10; i++){
    const num = i;
    sum = sum + num;
}
console.log(sum);