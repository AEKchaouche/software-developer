// creating 3 object constructors and assigning values to it
let obj1 = {
    a: 10
};

let obj2 = {
    b: 14
};

let obj3 = {
    c: 112
};

// Creating a target object and copying values 
// and properties to it using object.assign() method 
let new_obj = Object.assign ({}, obj1, obj2, obj3);

// Dispalying the target object
console.log(new_obj);