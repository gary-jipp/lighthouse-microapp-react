

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = array.slice(0, array.length - 1);
console.log("result=", result);

result = array.slice(0);
console.log("result=", result);

result = [...array];
console.log("result=", result);