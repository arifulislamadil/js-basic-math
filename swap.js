var first = 5;
var second = 7;

var third = first;
var first = second;

console.log(first)
console.log(third)
//Output: 7,5


var first = 5;
var second = 7;
[first, second] = [second, first]
console.log(first, second)
//Output: 7,5



