class Person {
    // properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    // method
    activity(){
        this.sleep();
    }
}
// properties
const kodom = new Person('kodom ali', 21);
console.log(kodom);
// method
kodom.sleep();
// method
kodom.activity();

const badam = new Person('kacha badam', 23);
console.log(badam);
badam.sleep();
badam.activity();

/** complex */
const lazy = kodom.sleep;
lazy();