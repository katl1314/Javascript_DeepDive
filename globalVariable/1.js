/**
 * CH14. 전역 변수의 문제점
 *
 * - 지역변수의 생명주기는 함수의 생명주기와 같다.
 *
 */

var x = "global";
function foo() {
    var x = "local";
    console.log(x); // local
    return x;
}

foo();

/**
 * 전역 변수로 선언한 변수 x가 없기 때문에.
 * foo함수내 선언한 지역변수 x는 foo함수 내부에서만 참조할 수 있다.
 * 반대로 전역 변수는 var로 선언시 전역객체의 생명주기(window)와 일치함.
 *
 * 호이스팅은 스코프 단위로 동작함.
 * 호이스팅은 변수 선언이 스코프의 선두로 끌어올린 것처럼 동작하는 자바스크립트의 특성
 *
 * 전역 변수는 생명주기가 엄청 길다. 오랫동안 메모리를 잡아먹음.
 * 변수 이름이 중복되면 재할당이 이뤄짐.
 */
console.log(x); // global

// 함수 정의
function add(x, y) {
    return x + y;
}
/**
 * 다음 과 같이 함수 호출을 두 함수 add의 정의 사이에서 할 때,
 * 함수 정의와 변수 선언(undefined로 초기화)이 스코프 상단으로 끌어올리는 것처럼 동작하는 호이스팅이 발생하기 때문에
 * 마지막에 정의한 add함수가 호출된다.
 */
console.log(add(2, 3));

// 함수 정의
function add(x, y) {
    var result = x + y;
    return `${x} + ${y} = ${result}`;
}
