
// JavaScript if Statement
// if ( condition ) {
//     If the condition is met,
//     code wil get exsecuted  } 

// if Statement
let num = 20 ;
if (num % 2 === 0) {
    console.log("Given number is even number.");
}
if (num % 2 !== 0) {
    console.log("Given number is odd number .");
};

//// if-else Statement
let age = 25;
if (age >= 20) {
    console.log("Your are eligilbe of driving licence")
} 
else {
    console.log("You are not eligible of driving licence")
};

// else if Statement
const x = - 8;

if (x > 0) {
    console.log("Given number is positive.")
} else if (x < 0) {
    console.log("Given number is negative.")
} else {
    console.log("given number is zero.")
};

// Switch Statement 
const marks = 71;
let Branch 
switch (true) {
    case marks >= 90:
        Branch = "Computer sciences engineering";
        break;
    case marks >= 80 :
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = " Civil engineering";
        break;
    default:
         Branch = "Bio technology";
}

console.log(`Student Branch name is : ${Branch}`);


