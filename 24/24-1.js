/**
 * closure(클로저): 함수가 일반 객체로 취급(함수형 프로그래밍 언어)에서 사용되는 특성
 */

// 함수가 선언된 렉시컬 환경

const x = 1;
// 외부 함수
function outerFunc() {
    const x = 10;
    // 중첩함수
    function innerFunc() {
        console.log(x); // innerFunc함수 내 변수 x가 선언되지 않아, 상위 스코프(outerFunc)에 변수 x를 참조한다.
    }

    innerFunc(); // 중첩 함수 호출
}

outerFunc(); // 외부 함수 호출
