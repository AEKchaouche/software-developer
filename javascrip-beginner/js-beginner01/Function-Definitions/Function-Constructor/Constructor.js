
/* Function Constructor is used to create a new function object using 
the Function() constructor with the new operator */

// Function Constructor
// upper letter
function Car(marke, model, year, color) {

    this.marke = marke,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red")

console.log(car1.marke)

