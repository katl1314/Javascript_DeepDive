/**
 * String 메서드
 * 문자열 처리를 위한 수많은 메서드를 제공한다.
 *
 * 1. String.prototype.indexOf(str, pos)
 * 해당 위치(default 0)에서 부터 첫번째 인자로 전달한 값을 검색하여 가장 먼저 검색된 요소의 인덱스를 반환, (검색 결과 없으면 -1를 반환하더라.)
 */

const target = "javascript";
console.log(target.indexOf("a")); // 문자열 내 "a"를 검색하여 먼저 검색된 요소의 인덱스를 반환. => 1
console.log(target.indexOf("a", 2)); // 2번째 위치부터 문자열내 "a"를 검색하여 먼저 검색된 요소의 인덱스를 반환. => 3
console.log(target.indexOf("z")); // 문자열 내 "z"가 없으므로 -1을 반환한다.

/**
 * String.prototype.startsWith(str, pos) : 대상 문자열이 인수로 전달받은 문자열로 시작하는지 boolean타입으로 반환함.
 */
console.log(target.startsWith("java"));
console.log(target.startsWith("script"));
console.log(target.startsWith("script", 4));
/**
 * String.prototype.endsWith(str) : 대상 문자열이 인수로 전달받은 문자열로 종료하는지 boolean타입으로 반환함.
 */
console.log(target.endsWith("java"));
console.log(target.endsWith("script"));

/**
 * String.prototype.search(searchValue) : 대상 문자열에서 인수로 전달받은 문자열을 가지고 검색하여 일치하는 문자열의 인덱스를 반환함. (검색 실패시 -1를 반환함.)
 */
console.log(target.search("java")); // 0
console.log(target.search("script")); // 4
console.log(target.search("script1")); // 검색 결과가 없으므로 -1를 반환함.

// String.prototype.includes(searchValue): 대상 문자열에서 인수로 전달받은 문자열이 포함되는지 boolean타입으로 반환함.
// ES6에 도입되었음.
console.log(target.includes("java")); // true
console.log(target.includes("script")); // true
console.log(target.includes("script1")); // false

/**
 * String.prototype.charAt(index) : 문자열 내 해당 인덱스에 해당하는 문자를 반환
 */
console.log(target.charAt(target.length - 2)); // "p"
console.log(target.charAt(100)); // "" 인덱스가 문자열의 길이보다 클 경우 공백문자를 반환함.

for (let ch in target) {
    console.log(target.charAt(ch));
}
