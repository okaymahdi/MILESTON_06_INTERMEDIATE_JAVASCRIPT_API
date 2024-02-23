/** more .map() function */
const numbers = [12, 10, 8, 15, 7];

/** multiple any numbers by 2 */
const doubleOne = numbers.map(num => num * 2);
console.log(doubleOne);

/** added 5 with any numbers */
const fiveAdded = numbers.map(num => num + 5);
console.log(fiveAdded);

/** divided any numbers by 2 */
const halves = numbers.map(num => num / 2);
console.log(halves);

/** length of array */
const friends = ['Abid', 'Afia', 'Mahid', 'Baba', 'Ammu'];
const length = friends.map(friend => friend.length);
console.log(length);

/** first letter show */
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);