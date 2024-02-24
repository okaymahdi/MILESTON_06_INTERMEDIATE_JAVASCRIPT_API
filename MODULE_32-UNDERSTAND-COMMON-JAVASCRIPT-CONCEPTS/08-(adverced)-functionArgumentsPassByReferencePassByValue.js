/** array like object */
function sum(a, b, c){ // parameter
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12, 45, 98, 56); // argument
console.log(total);
// console.log(typeof sum);
console.log(sum.length);