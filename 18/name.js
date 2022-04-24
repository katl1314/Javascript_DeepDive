/**
 * 함수 객체의 프로퍼티
 *
 * - name : 함수 이름을 나타낸다.
 *   기존(ES6)에는 비표준이었으나, ES6이후는 표준이다.
 */

// 기명 함수는 함수명이 name프로퍼티 값으로 설정된다.
var namedFunc = function test1() {};
// 아래 결과를 보면 namedFunc이 반환된다고 생각했으나.
// 기명함수 이므로 함수명으로 갖는다.
console.log(namedFunc.name); // test1

// 익명함수는 함수명을 생략하였으니, 식별자를 갖는다.
var anonymousFunc = function () {};
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문은 함수명으로...
function say() {}

console.log(say.name);

// 화살표 함수는 익명 함수이므로 식별자를 갖는다.
const arrowFunc = () => {};

console.log(arrowFunc.name);

console.log(Object.getOwnPropertyDescriptors(arrowFunc));
console.log(Object.getOwnPropertyDescriptors(namedFunc));

// 익명함수는 anonymous 함수로 된다.

// bind으로 생성한 함수의 name값은 bound이 접두사로 온다.
const say1 = say.bind(null);

console.log(Object.getOwnPropertyDescriptors(say1));
