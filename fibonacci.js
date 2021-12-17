function fibonacciSeries(num) {
    if (typeof num != "number") {
        return "Please input a valid number"
    }
    if (num < 2) {
        return "Please input a positive number more then 1"
    }
    let fibo = [0, 1]
    for (var i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacciSeries(-7))
//Output: [ 0, 1,  1,  2,  3,5, 8, 13, 21, 34, 55]