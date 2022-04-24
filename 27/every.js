/**
 * Array.prototype.every(callback(value, index, array), thisArg?)
 * 배열 요소를 순회하면서 콜백함수 호출 시 반환값이 모두 true가 나올 경우 true, 한번이라도 false값이 포함되면 false를 반환한다.
 *
 * 만약 빈 every함수를 호출하는 배열이 empty인 경우 무조건 true를 반환한다.
 */
const array = [true, true, true];

console.log(array.every((value) => value));
