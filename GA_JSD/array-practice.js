// var boroughs = [ 'manhattan', 'the bronx', 'queens', 'brooklyn', 'staten island' ];

// boroughs.forEach(function(district){
//   console.log(district + " wins");
// });
var evens = [];

evens.push(2,4,6,8,10);


var odds = [];

odds.push(1,3,5,7,9);

// every returns true if all the elements pass the test
var every1 = evens.every(function (num){
  return num % 2 === 0;
});

var every2 = evens.every(function (num){
  return num % 4 === 0;
});

console.log(every1);
console.log(every2);

// some returns true if some of the elements pass the test
var some1 = evens.some(function (num){
  return num % 4 === 0;
});

console.log(some1);

// filter returns only the values that pass the test
var filter = evens.filter(function(num){
  return num > 5;
});

console.log(filter);

// map creates a new array with a change specified in the return statement
var map = evens.map(function(num){
  return num * 5
});

console.log(map);