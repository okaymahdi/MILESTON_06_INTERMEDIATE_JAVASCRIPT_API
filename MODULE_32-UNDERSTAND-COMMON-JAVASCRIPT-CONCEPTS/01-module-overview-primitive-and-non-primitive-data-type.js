/**
 * ------------ strongly typed programming language ------------
 * int a = 5;
 * string b = 'alim khalim';
 * bool c = True;
 * object student = {name: 'noya daman', id: 55};
 * int [] numbers  = [12, 45, 78];
 * string [] friends = ['abul', 'babul'];
 */

/** javaScript is a dynamic typed programming language */

/** primitive type [numbers, string, boolean] 1 value */
const a = 5;
const b = 'samsu kopay na ekhon ar';
const d = true;

/** composite / non primitive type [array, object] */
const ages = [45, 65, 48];
const student = {id: 23, class: 7};
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);

/** reassign value */
y = 7;
// console.log(x, y);

let p = {job: 'web developer'};
let q = p;
// console.log(p, q);

/** only q changes */
// q = {job: 'Backend'};
// console.log(p, q);

/** tow value changes p & q */
q.job = 'front end developer';
console.log(p, q);