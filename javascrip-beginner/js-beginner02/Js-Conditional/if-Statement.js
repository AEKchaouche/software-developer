
// The if Statement

/* if (condition) {
bloquer of code
}

*/

let price = 100;
let discount = true;
let discountAmount = 30;


if (discount === true) {
    price -= discountAmount;

}
console.log(price);

let num1 =5;
let num2 =10;

if (num2> num1) {
    console.log("hello")
}

let result = prompt("what is your resulte")
if(result >= 90) {
    document.write("Execellent");

}

else if( result >= 80) {
    document.write("Very good")
}

else if( result >= 70) {
    document.write("Good");

}

else if(result >= 50) {
    document.write("Acceptable")
} 

else {
    document.write(Fail)
}



