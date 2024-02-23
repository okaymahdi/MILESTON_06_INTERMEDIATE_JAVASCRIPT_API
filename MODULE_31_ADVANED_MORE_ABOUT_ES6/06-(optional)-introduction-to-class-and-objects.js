/** array of objects */
const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'mac', price: 15000 },
]

/** similar 1) has some properties 2) method */
class ProductOne {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}
const lenovo = new ProductOne('le le lenovo');
// console.log(lenovo);
// lenovo.speak('oba kita kau')

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    }
}
const tapon = new Teacher('Tapon sir ', 'physics');
console.log(tapon);

const rashid = new Teacher('Rashid', 'English');
console.log(rashid);