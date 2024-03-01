
// Addition Assignment(+=) Operator
// concatenation of two number
let x = 2;
let y = 5;
console.log(x += y);

// concatenation of two string
let a = 'Hello ';
let b = 'World';
console.log(a += b);
// Example 2: Here with the help of for..in  loop, we use the Additional assignment operator.
let cities = ["Delhi", "Nokia", "Dehradun", "Haldwani", "Haridawr"];
let start_with_D = "";
for (city in cities) {
    if (cities[city].startsWith("D")) {
        let names = cities[city] + " ";
        start_with_D += names;
  
    }
}

console.log(start_with_D);

// Subtraction Assignment
let number = 9;
number -= 5;
console.log(number);
// subtracting a string with a number
let number1 = 10;
let string = "num";
// x = number1 -= string; : Or
console.log(number1 -= string);

// Mutlplication Assignment
let e = 4;
e *= 2;
console.log(e);
// non-Numeric value and it will return NaN using : (*=)
let number2 = 10;
number2 *= "GeeksforGeeks";
console.log(number2);

// Division Assignment
let numm = 8;
numm /= 2;
console.log(numm);
numm /= 0;
console.log(numm);

// Remainder Assignment
let nummmm = 10 ;
nummmm %= 5; // = 0
console.log(nummmm);

// Exponentiation Assignment
let r = 6 ;
console.log(r **= 2);
console.log(r **= 0);
console.log(r **= ("bar"));

// Lefft Shift Assignment
let f = 7;
f <<= 2;
console.log(f);

// Right Shift Assignment

// Bitwise AND Assignment
let o = 7;
o &= 3;
console.log(o);

// Bitwise OR Assignment

// Bitwise XOR Assignment

