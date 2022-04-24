import { sum, numArr } from "sum.js";

// Function.prototype.call
// 첫번째 매개변수 : thisArg
// 두번째 매개변수 ~ n번째 인자 : 함수에 전달한 인수
console.log(sum.call(null, ...numArr)); // spread연산을 이용하여 배열을 전개함.
