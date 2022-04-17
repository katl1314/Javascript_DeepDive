/**
 * length 프로퍼티와 희소 배열
 * length프로퍼티는 배열 객체의 프로퍼티로서, 배열 요소의 개수를 반환함.
 *
 * Array.prototype.push, pop, slice 등등을 이용하여 배열 요소를 추가하거나, 삭제 시 자동으로 갱신됨.
 *
 * length프로퍼티에 명시적으로 배열 길이를 설정할 수 있으며, length값보다 배열 요소의 개수가 적을 경우 나머지는 empty으로 매꾼다.
 *
 * empty로 매꾼 배열을 희소배열이라고 함.
 * 희소배열은 실제로 추가된 배열요소는 아님. 실제로 메모리를 확장하지 않으며, 빈 요소를 생성조차 하지 않는다.
 * 즉 실제 배열에는 아무런 영향을 미치진 않는다. ===> 최대한 무조건 희소배열은 사용하지 않는것이 좋으며, 여러 값을 순차적으로 나열하는것이 가장 좋은 방법이다.
 */

// length프로퍼티 :배열 요소 개수를 반환함.
console.log([].length); // 0
console.log([1, 2, 3].length); // 3

var numbers = [1, 2, 3];
console.log("number", numbers.length);

// Array.prototype.push(value) : 배열 뒤에 요소를 추가한다. => 원본값이 변경됨.
numbers.push(4);
console.log("numbers.push(4)", numbers.length);

// Array.prototype.pop() : 배열 맨 뒤 요소를 삭제함.
numbers.pop();
console.log("numbers.pop()", numbers.length);

// Array.prototype.shift() : 배열 맨 앞 요소를 삭제함.
numbers.shift();
console.log("numbers.shift()", numbers.length);

// Array.prototype.unshift(value) : 배열 맨 앞에 요소를 추가함.
numbers.unshift(1);
console.log("numbers.unshift(1)", numbers.length);

// length프로퍼티를 사용자가 명시할 수 있음. [].length = 3

var testNums = [1, 2, 3, 4, 5]; // length가 5인 배열을 선언
testNums.length = 3; // 사용자가 배열 길이를 명시함.
console.log(testNums); // 명시한 길이만큼 배열 길이가 줄어듬.

var arr = [1];
arr.length = 3;
console.log(arr); // [1, empty, empty]

// 희소배열 : 배열의 요소 개수보다. length프로퍼티값이 더 클경우(실제 배열 요소의 개수와 length 프로퍼티가 다를 경우), 또는 배열 요소가 연속적이지 않을 경우를 의미함.

// var test = [, 1, , 3]; // 희소배열의 예
