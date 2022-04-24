/**
 * scope : 변수의 유효 범위
 * 매개변수 x, y에서는 함수 내부에서만 참조 가능, 외부에서는 참조 불가
 *
 */

// 전역 실행 컨텍스트 생성
var var1 = 1;

// 전역 렉시컬 환경 > Environment Recode > Object Environment Recode에 할당함.
// var1, var2, var3, foo함수

// 블록 렉시컬 환경 생성하지 않음.
if (true) {
    var var2 = 2;
    if (true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4; // foo함수 안에서만 참조할 수 있음.
    function bar() {
        var var5 = 5; // bar함수 안에서만 참조할 수 있음, 즉 외부에서 var4, var5를 참조할 수 없음(ReferenceError)
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4);
// console.log(var5);

/**
 * var 키워드는 중복 선언해도 문제가 없음. 자바스크립트 엔진에서 재할당 부분은 변경해줌,
 * 다만 이렇게 사용하는 것은 부적절해 보임.
 * let, const는 변수 중복 선언이 불가능함.
 */

/**
 * 렉시컬 스코프(정적 스코프) : 함수가 어디서 정의했는지에 따라 상위 스코프가 결정됨
 * 다이나믹스코프(동적 스코프) : 함수가 어디서 호출했는지에 따라 상위 스코프가 결정됨
 *
 * 자바스크립트에서의 함수는 렉시컬 스코프다.(어디서 정의했는가)
 */
