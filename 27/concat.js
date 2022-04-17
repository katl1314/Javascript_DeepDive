/**
 * Array.prototype.concat(...items:[])
 * 함수의 인자로 배열을 전달받아, 원본 배열의 마지막에 요소를 추가하고, 새로운 배열로 반환함.
 * 원본 배열은 변경되지 않음.
 */

let arr = [];
let temp = arr.concat([2, 3], [4, 5], 6);
console.log("arr", arr); // 원본 배열은 변경되지 않는다.
console.log("temp", temp); // [2, 3, 4, 5, 6]

/**
 * 결론, Array.prototype.push, unshift, pop, shift는 가급적 사용하지 말것(원본 배열이 훼손됨.)
 * 즉 쓸거면 스프레드 문법을 사용하던지, 아니면 ES6 메서드를 이용할것인지 고려하자.
 */
