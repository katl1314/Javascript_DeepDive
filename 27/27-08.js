/**
 * 배열 메서드
 * 배열 메서드에는 원본 배열이 변경되는 경우와, 원본 배열을 변경하지 않고 새로운 배열을 생성하는 메서드 타입이 존재함.
 *
 * 이전에 작성한 Array.prototype.push, unshift, shift, pop은 원본 배열을 변경하는 메서드이다.
 */

var arr = [];
arr.push(1, 3);
arr.unshift(2, 3, 4);

console.log(arr); // [2, 3, 4, 1, 3] 원본배열이 변경됨.

// Array.prototype.concat을 이용하여 메서드를 호출해보자.
// Array.prototype.concat은 원본 배열을 반환하지 않고, 새로운 배열을 만들어 반환함.
var test = arr.concat(7, 8);

console.log(test, arr); // 결과는 다르다.

// Array.isArray(arr): Array 생성자 함수의 정적 메서드로, 함수로 전달한 인수가 배열이면 true,아니면 false를 반환한다.

console.log("Array.isArray([])", Array.isArray([]));
console.log("Array.isArray(new Array(10))", Array.isArray(new Array(10)));
console.log("Array.isArray({})", Array.isArray({}));
console.log(
    'Array.isArray({ 0: "a", 1: "b", length: 2 })',
    Array.isArray({ 0: "a", 1: "b", length: 2 })
); // 유사 배열 객체은 배열이 아님.
console.log("Array.isArray(true)", Array.isArray(true));

// Array.prototype.indexOf(value, position): Array생성자 함수의 프로토타입 메서드로, 함수로 전달한 인자의 인덱스를 반환(앞쪽에서)
// 첫번째 인자로 전달한 값이 배열 요소에 여러개가 있는 경우 두번째 인자(default : 0) 이후 첫번째로 검색한 결과의 인덱스를 반환
// 검색 결과 해당하는 요소가 없으면 -1을 반환함.
// 원본 배열이 변경되는 메서드는 아님.
const myArr = new Array("Life", "too", "python", "small", "python");
console.log(myArr.indexOf("python")); // 배열 요소 중 python을 검색하고, 인덱스를 반환, 만약 중복되는 경우 가장 먼저 검색되는 요소의 인덱스를 반환.

console.log(myArr.indexOf("python", 3)); // 두번째 인자(position)이후로 첫번째 인자를 배열 요소에서 검색함. 4

console.log(myArr.indexOf("python1")); // 배열 요소 중 "python1"이 존재하지 않기 때문에 -1을 반환함.

// ES7이후 지원하는 Array.prototype.includes를 이용하면 가독성이 더 좋습니다.
// indexOf와 다르게 검색 결과가 있을 경우 true, 없는 경우 false를 반환하고
// indexOf와 마찬가지로 두번째 인자를 설정하여 검색 기준을 설정할 수 있습니다.
console.log(myArr.includes("python"));
console.log(myArr.includes("python", 5));

// Array.prototype.push(...values) : 배열 맨 뒤에 요소를 추가함
// 두번째 인자로 값을 리스트로 입력받아 배열 요소로 추가함.
// 원본 배열이 변경되는 문제가 있음.

myArr.push(1);
console.log("myArr.push(1)", myArr);
myArr.push(true, {}, function () {});
console.log("myArr.push(true, {}, function() {})", myArr); // 모두 다 원본 배열이 변경됨.

// Spread문법을 이용하여 배열 요소를 추가하면, push, pop, unshift, shift와 같이 원본 배열이 변경되지 않고, 새로운 배열로 반환함.
const arr2 = [1, 2];
const test2 = [...arr2, ...[3, 4, 5]]; // spread문법을 이용하여 배열 요소 추가
console.log(test2);

// 배열 뒤에 있는 요소를 순차적으로 삭제함.
myArr.pop();
myArr.pop();
myArr.pop();
console.log(myArr);

myArr.shift(); // 배열 맨 앞에 있는 요소를 삭제
myArr.unshift("minhyeok"); // 배열 맨 앞에 요소를 추가함.
