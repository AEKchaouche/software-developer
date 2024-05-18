

function Phone(serial, color, price) {  //cnstruction function
    this.serial = serial; // serial argument function
    this.color = color; // color argument function
    this.price = price ; // price argument function
    this.price = price - 200 ;
}

let Phone1 = new Phone(123, "Red", 500);
let Phone2 = new Phone(145, "Black", 1200);
let Phone3 = new Phone(188, "Silver", 1110);

console.log(Phone1.serial);
console.log(Phone1.color);
console.log(Phone1.price);

console.log(Phone2.serial);
console.log(Phone2.color);
console.log(Phone2.price);

console.log(Phone3.serial);
console.log(Phone3.color);
console.log(Phone3.price);