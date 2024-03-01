// Original Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1 : EXtarct the first 3 elemeents of the array
const case1 = arr.slice(0, 3)
console.log("First 3 Array Elements:", case1);

// Case 2: Extract the last 3 array elements 
const case2 = arr.slice(-3);
console.log("Last 3 Array elements:", case2)

// Case 3: Extact the elements from the middle of the array
const case3 = arr.slice(3, 7);
console.log("Case 3; Extact elements from middle", case3);
