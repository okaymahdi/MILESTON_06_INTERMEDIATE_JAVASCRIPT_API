const numbers = [1, 5, 6, 4, 15];
// const resultOne = numbers.forEach(n => console.log(n));
// console.log(resultOne);

// const resultTow = numbers.forEach(n => n * 2);
// console.log(resultTow);

/** .filter() selects elements based on a condition and returns an array with the elements that fulfilled the condition  */
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
// const selected = players.filter(p => p % 2 === 0)
// console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Josna'];
const oddFriends = friends.filter(friend => friend.length >4);
console.log(oddFriends);

/** .find() */
// const selected = players.find(player => player > 70);
const selected = players.find(player => player > 50);
console.log(selected);

/** 
 * 1) .map()
 * 2) .forEach()
 * 3) .filter()
 * 4) .find()
 */