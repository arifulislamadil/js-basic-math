const num1 = 450;
const num2 = 350;
const num3 = 1000;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is bigger then num2 and num3");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is bigger num1 and num3");
} else {
    console.log("num3 is bigger then num1 and num2");
}
//Output: num3 is bigger then num1 and num2
const num1 = 450;
const num2 = 350;
const num3 = 1000;
const maxNumber = Math.max(num1, num3, num2);
console.log("Bigger number is =", maxNumber);
//Output: Bigger number is = 1000

const number = [33, 44, 77, 66, 88, 99, 11, 22, 29, 28, 27, 27, 27, 26];
const maxNumber = Math.max(number);
console.log(maxNumber);


function smallestNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    } else if (second < first && second < third) {
        return second;
    } else {
        return third;
    }
}
const num1 = 100;
const num2 = 120;
const num3 = 80;
console.log(smallestNumber(num1, num2, num3));
//Output: 80