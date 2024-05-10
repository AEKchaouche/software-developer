function Phone(serial, color, price) {
    this.serial = serial; // serial argument function
    this.color = color; // color argument function
    this.price = price // price argument function
}

let Phone1 = new Phone(123, "Red", 500);

console.log(Phone1.serial);
console.log(Phone1.color);
console.log(Phone1.price);