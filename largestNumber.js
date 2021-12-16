function largestElements(numbers) {
    var largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}
const numbers = [2, 3, 4, 8, 5, 2, 4];
console.log(largestElements(numbers));
//Output: 8