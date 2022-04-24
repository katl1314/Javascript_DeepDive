import { sum, numArr } from "sum.js";

// Function.prototype.apply
// 첫번째 매개변수 : thisArg
// 두번째 매개변수 : 이터러블 객체(배열)
console.log(sum.apply(null, numArr));
