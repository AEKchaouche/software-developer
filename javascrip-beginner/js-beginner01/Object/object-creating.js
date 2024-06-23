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

const coder = {
    isStudying : false,
    printIntroducation : function() {
        console.log(`My name is ${this.name}. Am I studying? : ${this.isStudying}`);

    }
};
// -- Object.create() method 
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying= true;
me.printIntroducation()

// -4- Using es6 classes
class vehicule2 {
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine
    }
}

// create object
let car2 = new vehicule2('Glof', 'BMW', '1254KK');
console.log(vehicule2.engine) // Glof