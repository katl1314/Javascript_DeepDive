/**
 * 함수 객체 프로퍼티
 * 1. arguments : 함수 호출시 전달받은 인자를 유사 배열 형태로 저장됨.
 * 유사 배열 객체는 : 기본적으로 key값이 0부터 시작하는 숫자형태[인수의 순서]이고, length프로퍼티가 존재해야한다.
 * Symbol.iterator 프로퍼티가 있으면 이터러블한 객체이다.
 *
 * 이터레이터 기능 구현가능하고, for문을 이용하여 순회가 가능함.
 *
 * arguments를 배열로 바꾸기 위해서는
 * Array.prototype.slice.call(arguments): 함수 간접 호출 this -> arguments
 * 또는 Array.from(arguments);
 *
 * arguments는 비표준이므로 ES6에 등장한 Rest문법(...)을 이용하자.
 */

function test() {
    console.log(Array.from(arguments)); // 유사 배열 객체를 배열로 변환.
    console.log(Array.prototype.slice.call(arguments));
    console.log(Array.prototype.slice.apply(arguments));
    console.log(Array.prototype.join.apply(arguments));
}

test(1, 2, 3, 4, 5);

// ES6 REST파라미터를 이용하여 구현해보자.
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
