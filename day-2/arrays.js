let arr = [1, 2, 3, 4];
arr[7] = 87;
console.log(arr[3]);
console.log(arr[6]);
console.log(arr[7]);
console.log(Object.keys(arr));

arr.push(9);
console.log("Array :", arr);
console.log("Array Keys :", Object.keys(arr));

console.log("arr.indexOf(8) :", arr.indexOf(8)); // if it is not present returns -1
console.log("arr.indexOf(9) :", arr.indexOf(9));

console.log("Array Length :", arr.length);
arr.length = 10; //we can also fix lenght if we fix greater than actual length get empty spaces else if we fix lessthan actual length loos of data happens
console.log("After Fixing arr.lenght = 10 :", arr.length);
console.log("After Fixing arr.lenght = 10 :", arr);
arr.length = 5;
console.log("After Fixing arr.lenght = 5 :", arr.length);
console.log("After Fixing arr.lenght = 5 :", arr); // loos of data happened
