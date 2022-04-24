/**
 * Array.prototype.includes(searchValue, fromIndex?) : 배열 요소 검색을 위한 메서드
 * Array.prototype.indexOf와 비슷하나 indexOf는 요소의 인덱스를 반환하고, 검색 결과 없을 시 -1을 반환함.
 * 해당 메서드는 true, false으로 boolean값으로 반환함.
 * ES7이후에 지원되는 메서드
 * IE에서 지원하기 위해서는 BABEL을 사용해보도록 하자.
 * fromIndex는 음수값으로도 사용 가능 (length + fromIndex)부터 검색함.
 */

const numbers = [1, 2, 3, 2, 5];    // 배열을 선언하고
const searchValue = 2; // 나는 배열 에서 2를 찾을거야.

console.log(`numbers.includes(${searchValue}) ------${numbers.includes(searchValue)}`); // 배열 0번째부터 2를 검색한다. 결과는 true으로...
console.log(`numbers.includes(${searchValue}, 1) ---${numbers.includes(searchValue, 1)}`); // 배열 1번째부터 2를 검색한다. 결과는 true으로...
console.log(`numbers.includes(${searchValue}, 2) ---${numbers.includes(searchValue, 2)}`); // 배열 2번째부터 2를 검색한다. 결과는 true으로...
console.log(`numbers.includes(${searchValue}, 3) ---${numbers.includes(searchValue, 3)}`); // 배열 3번째부터 2를 검색한다. 결과는 true으로...
console.log(`numbers.includes(${searchValue}, 4) ---${numbers.includes(searchValue, 4)}`); // 배열 4번째부터 2를 검색한다. 결과는 false으로...
console.log(`numbers.includes(${searchValue},-2) ---${numbers.includes(searchValue,-2)}`);// 배열 3번째(length + fromIndex)부터 2를 검색. 결과는 true