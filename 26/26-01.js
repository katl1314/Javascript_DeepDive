// 함수 표현식
var foo = function() {
    return 1;
}

console.log(foo()); // 일반 함수로서 호출 1

// 생성자 함수로서 호출
console.log(new foo()); // 원시값은 무시하고, 인스턴스를 반환함.

// 메서드로서 호출
var obj = {
    foo, // ES6이전의 메서드 (생성자 함수 사용가능)
    test() {
        // ES6에서의 메서드 (생성자 함수 사용 불가, 인스턴스 생성 불가능으로 prototype 프로퍼티가 없음.)
    }
};

console.log(obj.foo()); // 객체의 메서드 호출
// new obj.test(); // ES6 메서드 축약형으로 정의한 메서드는 생성자 함수로서 사용이 불가능함.
/**
 * ES6이전의 함수는 일반 함수와 생성자 함수로서 호출이 가능함.
 * 내부 메서드 [[Call]]과 [[Construct]]가 있으면 사용이됨.
 */

// Non-constructor : 화살표 함수, ES6 메서드 축약형으로 정의한 객체 메서드
// constructor : ES6이전의 함수(선언문, 표현식), 객체 메서드