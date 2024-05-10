function Car(marke, model, year, color) {

    this.marke = marke,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red")

console.log(car1.marke)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)