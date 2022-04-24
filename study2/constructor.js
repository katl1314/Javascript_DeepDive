/**
 * Function 생성자 함수
 * - 이러한 방식으로 함수를 생성하지 않기를 권장함.
 * - 클로저를 생성하지 않고, 함수 표현식과 함수 선언식과 다르게 동작하기 때문에 그렇다.
 */

/* var add = new Function("x", "y", "return x + y");

var add2 = function (x, y) {
    return x + y;
}; */

// 함수 선언문
var add1 = (function () {
    var a = 10;
    return function (b) {
        return a + b;
    };
})();

console.log(add1(20)); // 함수 선언문이나 함수 표현식은 클로저를 생성하기 때문에 중첩함수 호출시 외부 함수의 변수를 참조할 수 있음.

// Function 생성자 함수 정의

/* var add2 = (function () {
    var a = 10; // 외부 함수의 변수
    return new Function("b", "return a + b"); // ReferenceError: a is not defined
})(); */

/* console.log(add2(10)); */ // Function생성자 함수는 클로저를 생성하지 않기 때문에 외부 함수의 변수를 참조할 수 없음.
