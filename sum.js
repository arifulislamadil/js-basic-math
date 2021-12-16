function sumNumbers(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}
const numbers = [2, 3, 4, 5, 2, 4];
console.log(sumNumbers(numbers));
//Output: 20
