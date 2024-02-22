/** data access [data in array] */
const dataOne = [{
    id: 1,
    name: 'Abid Afia',
    address: 'Ajolbera',
}]
// console.log(dataOne); /** all data tight */
// console.log(dataOne.address); /** wrong way */
// console.log(dataOne[0]); /** right way */
// console.log(dataOne[0].address); /** right way */

/** data chaining */
const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 1, name: 'macbook', price: 165000}
    ]
}
/** second product price */
// console.log(products);
// console.log(products.data);
// console.log(products.data[1]);
// console.log(products.data[1].price);

const userOne = {
    id: 5001,
    name: 'Abid Afia',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
/** second line show (second: 'poribag er goli') */
// console.log(userOne);
// console.log(userOne.address);
// console.log(userOne.address.street);
// console.log(userOne.address.street.second);

const userTow = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
/** country show (country: 'Bangladesh') */
console.log(userTow.address.country);

/** optional chining ('?') this is [important error handling. error not show] */
console.log(userOne.address.street?.second);
console.log(userTow.address.street?.second);