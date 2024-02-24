/**
 * 8 way to get undefined.
 * 1) variable that is not initialized will give undefined.
 * 2) function with no return.
 * 3) parameter that not passed will be undefined
 * 4) if return has nothing on the fight side will return undefined.
 * 5) property that doesn't exists on an object wil give you undefined.
 * 6) accessing array element outside of the index range.
 * 7) deleting an element inside an array/
 * 8) set a value directly to undefined.
 */

/** variable that is not initialized will give undefined [used let not const] */
let first;
console.log(first);

/** function with no return. */
function second (a, b){
    const total = a + b;
}
const result = second();
console.log(result);

/** parameter that not passed will be undefined */
function third (a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);

/** if return has nothing on the fight side will return undefined */
function noNegative (a, b) {
    if(a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
console.log(total);

/** property that doesn't exists on an object wil give you undefined */
const fifth = {id: 2, name: 'Abid Afia', age: 7};
console.log(fifth.age, fifth.salary);

/** accessing array element outside of the index range */
const sixth = [4, 898, 87, 56, 54];
console.log(sixth);
console.log(sixth[1], sixth[5], sixth[200]);

/** deleting an element inside an array */
const seventh = [4, 898, 87, 56, 54];
// you should not do it. Instead used .splice()
delete seventh[1];
console.log(seventh);
console.log(seventh[1], seventh[5], seventh[200]);

/** set a value directly to undefined */
const eighth = undefined;
console.log(eighth);

/** right way to undefined value */
const nine = null;
const data = {results: [], updated: null};

console.log(typeof undefined);
console.log(typeof null);