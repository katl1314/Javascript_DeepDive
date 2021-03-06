/**
 * 자바스크립트의 함수
 *
 */

// f(x, y) = x + y;
// function : 함수 키워드
// add : 함수명
// (x, y) : 매개변수(인자)
// 함수 정의(함수명)
function add(x, y) {
    // 함수 객체 name : add
    return x + y; // 반환값(return 사용[기본적으로 undefined를 반환함.])
}

// f(2, 5)
// 함수 호출
add(2, 5); // 7

/**
 * 함수를 사용하게 되면 반복적인 코드를 중복해서 사용하기 보단 하나의 함수를 정의하고, 함수를 여러번 호출하는 코드의 재사용이 용이하며
 * 유지보수하는데도 더 간편해진다.
 */

// 변수 리터럴
// 함수 선언문은 표현식이라고 하더라...
// 함수는 객체다. 다만 일반 객체({})와 다름
// 함수 객체만의 프로퍼티를 갖는다.(arguments[파라미터값],caller, name[함수명|식별자])
// 함수 객체의 name은 기명 함수 일 경우 함수명을 나타내고, 익명 함수일 경우 해당 함수 표현식의 식별자를 가리킨다.
// 기명 함수를 호출할 경우 식별자로 호출한다.
var f = function add(x, y) {
    // 함수 객체 name : add
    return x + y;
};

console.log(add.name, f.name);

// 함수 선언문은 무조건 기명 함수로 해야함.
// 익명 함수로 선언시 에러가 발생.

// 함수 표현식 (익명/기명 함수 모두 가능)
let fn2 = function () {
    return 1;
}; // 이렇게 사용하면 함수 표현식
