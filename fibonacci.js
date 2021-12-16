function fibonacciSeries(number) {
    let fibo = [0, 1]
    for (var i = 2; i <= number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacciSeries(10))
//Output: [ 0, 1,  1,  2,  3,5, 8, 13, 21, 34, 55]