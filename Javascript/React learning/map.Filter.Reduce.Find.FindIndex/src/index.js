var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

/*const newNumbers = numbers.map(function (x) {
  return x * 3;
});
console.log(newNumbers);
*/
//Filter - Create a new array by keeping the items that return true.

/*For Each method*/
//var newNumbers = [];
//numbers.forEach(function (num) {
// if (num > 10) {
//   newNumbers.push(num);
// }
//});

/* Mapping method, better version*/
//const newNumbers = numbers.filter(function (num) {
//  return num > 10;
//})
//console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
/**For each version */
/* This is summing everuthing iside the array */
/*var newNumbers = 0;

numbers.forEach(function (currentNumber) {
  newNumbers += currentNumber;
});
console.log(newNumbers);
*/
/*
const newNumbers = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newNumbers);
*/
//Find - find the first item that matches from an array.
/*It finds the first item which was asked, for example if we ask num > 10 so it will show 56 
cuz it is the first tirem greater than 10 */
/*
const newNumber = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumber);
*/
//FindIndex - find the index of the first item that matches.
/*It is work similar with "find" but fives index in array example: 56 is [1] */
/*const newNumber = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumber);
*/
