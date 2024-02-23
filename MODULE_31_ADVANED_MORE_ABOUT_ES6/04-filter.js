/** .filter() selects elements based on a condition and returns an array with the elements that fulfilled the condition  */
const players = [75, 65, 67, 72, 55, 59];
const selected1 = players.filter(p => p > 70);
console.log(selected1);

const selected2 = players.filter(p => p > 80);
console.log(selected2);

const selected3 = players.filter(p => p > 50);
console.log(selected3);

const selected4 = players.filter(p => p % 2 === 0)
console.log(selected4);

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Josna'];
const oddFriends = friends.filter(friend => friend.length >4);
console.log(oddFriends);

/** 
 * 1) .map()
 * 2) .forEach()
 * 3) .filter()
 * 4) .find()
 * 5) .reduce()
 */