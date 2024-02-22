const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(glass);

/** all properties name */
// const keys = Object.keys(glass);
// console.log(keys);

/** all properties value */
// const values = Object.values(glass);
// console.log(values);

/** array of array or tow dimensional array */
// const entries = Object.entries(glass);
// console.log(entries);
// [
//     ['name', 'glass'],
//     ['color', 'golden'],
//     ['price', 12],
//     ['isCleaned', true]
// ]

/** delete property from object */
// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

/** freeze */
// Object.freeze(glass);
// glass.source = 'bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);

/** seal */
// Object.seal(glass);
// glass.source = 'bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);

/** summary */