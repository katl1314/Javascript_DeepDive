/**
 * 함수 호출 방식과 this Binding
 * 함수의 호출 방식에 따라 this 바인딩이 동적으로 결정된다.
 */

// 1. 일반 함수의 this Binding
// 전역 객체를 가리킴(node.js => global)
// 단, 함수 스코프 상단에 "use strict"선언되어 있을 경우 undefined로 반환한다.
function foo() {
    console.log("this", this === global);
}

function bar() {
    console.log("this", this === obj);
}

function bar2() {
    console.log(new.target || false); // 단축 평가(논리 연산자를 이용하여 구현한다.) 앞 조건이 undefined인 경우 뒷 값으로 평가한다.
}

foo();

// 2. 객체내 메서드 호출
// 메서드를 포함하는 객체 obj를 참조한다.
const obj = {
    bar,
};

obj.bar();
// 3. 생성자 함수
// 생성자 함수로부터 만들어진 인스턴스를 가리킴.
new bar2();
bar2();

// Function.prototype.apply/call/bind 메서드에 의한 간접 호출
bar.bind(obj)(); // bar함수를 재정의(this -> 객체 obj으로 바인딩.)
