/** normal object */
const user = {id: 1, name:'Gorib Aamir', job: 'actor'};
// console.log(user);

/** converted to JavaScript object Notation (JSON) */
const stringify = JSON.stringify(user);
// console.log(stringify);
/**
 * { id: 1, name: 'Gorib Aamir', job: 'actor' }
 * {"id":1,"name":"Gorib Aamir","job":"actor"}
 */

/** object */
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet boot er goli',
        city: 'ranbir',
        country: 'BD',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNow: false
}
console.log(shop);

/** converted object to JSON [JSON.stringify()] */
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

/** converted JSON to object [JSON.parse()] */
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);