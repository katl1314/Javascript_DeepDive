/**
 * Array.prototype.some(callback(prev, curr, index, array), thisArg?)
 * - 배열 요소를 순회하여, 콜백함수를 호출할 때 반환값이 한번이라도 true이면 true, 한번이라도 false이면 false를 반환.
 */

const temp = [true, false, true];

console.log(temp.some((value) => value));
