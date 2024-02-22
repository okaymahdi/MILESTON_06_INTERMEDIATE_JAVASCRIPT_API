/** 2 parameter */
// const difference = (x, y) => x - y;
// const minus = difference(10, 5);
// console.log(minus);

/** 2 and another parameter */
// const multiply = (first, second, third) => first * second * third;
// const mult = multiply(10, 5, 5);
// console.log(mult);

/** 1 parameter */
// const getAge = (person) => person.age;
// const student = {name: 'ananta', age: 45};
// const age = getAge(student);
// console.log(age);

// const getThird = numbers => numbers[2];
// const thirdArray = [5, 9, 88, 2, 13];
// const third = getThird([5, 9, 88, 2, 13]);
// const third = getThird(thirdArray);
// console.log(third);

// const doubleIt = num => num * 2;

/** no parameter */
// const getPI = () => Math.PI;
// console.log(getPI());

/** large arrow function */
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}