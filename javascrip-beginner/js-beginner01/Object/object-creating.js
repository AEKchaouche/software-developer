// -1- Creating object with a constructor
// simple function
function vehicule(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;

}

// New keyword to crreat an object, create an object from a function
let car = new vehicule('GT', 'BMW', '1998cc');      
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car.engine);


// -2- Creating js objects with object literal
let car1 = {
    name:'Subaro',
    maker:'JP',
    engine: '1254wwd'

};

console.log(car1.name); // dot notation
console.log(car1['maker']); // bracket notation


// -3- Object.create() method creates a new object, using an existing object

