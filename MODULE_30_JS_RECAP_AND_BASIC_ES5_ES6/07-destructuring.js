const actor = {
    name: 'mahdi',
    age: 30,
    phone: '01709000090',
    mony: 1111457788744
}
// const phone = actor.phone;
// console.log(phone);
// console.log(phone);
// console.log(phone);

// const name = actor.name;
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

/** destructure from object
 * if right side is an object left side of destructuring will be object as well
 *use property name as a variable that contains the property value 
 */
// const {name, phone, age, mony} = actor;
// console.log(name);
// console.log(phone);
// console.log(age);
// console.log(mony);

/** change the variable name */
// const {name: nam, phone: mobile, age: boyos, mony: taka} = actor;
// console.log(nam);
// console.log(mobile);
// console.log(boyos);
// console.log(taka);

/** array destructuring */
// const numbers = [44, 55];
// const [first, second] = numbers;
// console.log(first);
// console.log(second);

// const [x, y] = [12, 66];
// console.log(x);
// console.log(y);

/** skip array */
// let [num1, , num3] = [1, 2, 3];
// console.log(num1);
// console.log(num3);

/** advance */
// function doubleThem(a, b){
//     return [a*2, b*2]
// }
// const [prothom, ditio] = doubleThem(6, 9);
// console.log(prothom, ditio);

/** assign variable with a default value */
// let num1, num2, num3;
// [num1=0, num2=5, num3=7] = [1, 2];
// console.log(num1);
// console.log(num2);
// console.log(num3);

/** swap variable */
// let num1 = 1;
// let num2 = 2;
// [num1, num2] = [num2, num1];
// console.log(num1);
// console.log(num2);

/** destructuring with function */
// function numbers(){
//     return [1, 2, 3, 4]
// }
// let [num1, num2] = numbers();
// console.log(num1);
// console.log(num2);

/** rest(...) operator */
let [num1, ...num2] = [1, 2, 3, 4, 5, 6];
console.log(num1);
console.log(num2);