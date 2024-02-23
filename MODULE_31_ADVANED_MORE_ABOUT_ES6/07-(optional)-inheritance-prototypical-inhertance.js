class VehicleOne{
    // properties
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    // method
    move(){
        console.log('gari chole na chole na chole na re');
    }
}

class Bus extends VehicleOne{
    // properties
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
let bus = new Bus('Toyota', '50000', 'A5', 400);
console.log(bus);

class Track extends VehicleOne{
    // properties
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    // method
    getTrack(){
        // return this.make + ' ' + this.model;
        return `${name} ${price} ${load}`
    }
}
let track = new Track('Toyota', '50000', 500);
console.log(track);

/** from slider */
class VehicleTow{
    // properties
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }
    // method
    getName(){
        // return this.make + ' ' + this.model;
        return `${this.make} ${this.model}`
    }
}
let car = new VehicleTow('Toyota', 'Corola', 'black');
console.log(car);
