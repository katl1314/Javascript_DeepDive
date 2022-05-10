/**
 * 이터러블 : 순회 가능한 객체를 의미함.
 * 이터레이션 프로포톨 : ES6에서 도입된 순회 가능한 객체를 만들기 위해 미리 약속한 규칙임.
 *
 * 이러터블 객체는 for...of와 forEach를 이용하여 순회가 가능함.
 * ES6에서는 for...of또는 스프레드 문법, 디스트럭처링 가능하도록 일원화함.
 *
 * 1. 이터러블 프로토콜 : for...of 또는 forEach를 통해 순회가 가능하며, spread문법이나 디스트럭처링 할당의 대상이 되기도 함.
 * 2. 이터레이터 프로토콜 : 이터러블 프로토콜을 준수하며, Symbo.iterator를 호출하면 이터레이터를 반환.
 * 이터레이터는 next메소드를 갖고 있으며 next메소드의 반환값으로는 프로퍼티 value와 done을 가진 객체를 반환함.
 *   value는 순회중인 요소, done은 순회 완료 여부를 의미함.
 */

// 이터러블
// 이터러블 프로토콜을 준수한 객체를 이터러블이라고함(순회 가능 객체 for...of 또는 forEach으로 순회가 가능함.)
const isIterabler = (arr) =>
    arr !== null && typeof arr[Symbol.iterator] === "function";

console.log(isIterabler([])); // 배열은 이터러블 객체임
console.log(isIterabler([1, 2, 3])); // 배열은 이터러블 객체임
console.log(isIterabler(new Set())); // Set은 이터러블 객체
console.log(isIterabler(new Map())); // Map은 이터러블 객체
console.log(isIterabler({})); // 일반 객체는 이터러블 객체가 아니다.

console.log(isIterabler({ 0: "a", 1: "2", 2: "c", length: 3 })); // 유사 배열 객체도 이터러블 객체 아님.

// 배열은 Array.prototype의 Symbol.iterator를 상속받음.
// 즉 for...of이나, 배열 디스트럭처링, spread문법을 사용할 수 있다.

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
// 배열 디스트럭처링
const [apple, ...other] = fruits;
console.log(apple, other); // apple [ 'banana', 'orange' ]

console.log([...fruits]); // spread 문법
