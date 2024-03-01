
// Removing an element and adding new elements at the same time using the splice() method.

let spliceArr = [20, 22, 58, 56, 55, 66, 44];
// Removing an adding element at a  
// particular location in an array 
spliceArr.splice(2, 5);
console.log(spliceArr);

// Delcare and initialize 
let strSplice = ["amit", "Geeks1", "Geeks2"]

// Delete two elements starting from index 1 and add three  elements:
strSplice.splice(1, 2, "Geeks", "Geeks1", "Geek2");

console.log(strSplice)