const numbers = [4, 5, 2, 8, 10];

const doubled = [];
for (const number of numbers) {
    const double = number * 2;
    doubled.push(double);
}
console.log(doubled);

/** .map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array */
function doubleItOne (number) {
    console.log('number now', number);
    return number * 2;
}
const result = numbers.map(doubleItOne);

/** arrow function */
const doubleItTow = n => n * 2;
const output = numbers.map(doubleItTow);
console.log(output);

/** shortcut */
const shortcutOutput = numbers.map(n => n * 2);
console.log(shortcutOutput);