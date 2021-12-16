function smallestElemnts(numbers) {
    var smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        if (elements < smallest) {
            smallest = elements;
        }
    }
    return smallest;
}
const numbers = [2, 3, 4, 8, 5, 2, 4];
console.log(smallestElemnts(numbers));
//Output: 2