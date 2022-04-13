const x = 1;

function outerFunc() {
    const x = 20;
    // 기존 중첩함수 정의를 outerFunc함수 내에서 정의하지 않고, 전역 스코프에서 정의한다.
    innerFunc();
}

// 전역 스코프에서 정의함.
function innerFunc() {
    console.log(x); // innerFunc함수는 전역 스코프 상에서 정의하였기 때문에 렉시컬 스코프에 따라 전역 변수 x를 참조한다.
}

outerFunc();
innerFunc();

/**
 * 렉시컬 스코프 : 함수가 어디서 정의하였는지에 따라 상위 스코프를 결정하기 때문에, 함수 호출쪽을 기준으로 잡지 않는다.
 */

function outer() {
    const x = 10;
    const inner = function () {
        console.log(x); // 렉시컬 스코프에 따라 outer함수의 변수 x를 참조한다.
    };
    return inner;
}

const inner = outer();
inner(); // 10

/**
 * 클로저는 외부 함수의 호출이 종료되어도, 중첩함수 호출 시 외부 함수의 변수를 참조할 수 있다.
 * 모든 함수는 상위 스코프를 기억함. 함수는 상위 스코프의 변수를 참조하거나 변경이 가능함.
 * 함수는 상위 스코프를 내부슬롯 [[Enviorment]]에 저장하여, 함수가 존재하는한 상위 스코프는 유지함.
 */
