/**
 * 매개변수와 인수
 * 함수의 매개변수는 함수 내부에 변수를 선언한것처럼 취급한다. (undefined로 초기화)
 * 함수 호출 인자는 함수 정의 파라미터 순서대로 들어가야 한다.
 * 함수 매개변수의 스코프는 함수 내부이다.
 * 지정된 파라미터 개수보다 초과되는 인자는 제외한다. 함수 객체의 arguments프로퍼티 확인 가능.
 */

function add(x, y) {
    console.log(arguments);
    console.log(x, y);
}

add(1, 2, 3, 4, 5);

// 함수 매개변수에 reat파라미터 무조건 맨뒤에 선언해야함.
function add2(x, y, ...args) {
    console.log(args);
}

add2(1, 2, 3, 4, 5); // x = 1, y = 2, args = [3, 4, 5]

// 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 체크를 하지 않는다.
// 자바스크립트는 동적 타입 언어로, 매개변수의 타입을 사전에 지정할 수 없다.
// 동적 타이핑 언어 : 타입이 사전에 설정하는 것이 아닌 값이 할당될 때 자바스크립트 엔진에서 타입을 확인한다.

// ||을 이용하여 default값을 만들어 놓을 수 있다. (단순 평가) [구방식]
// ES6에서는 함수 매개변수에 디폴트 값을 설정할 수 있다.
// 함수의 매개변수는 최소한으로 작게 만드는것을 권장한다.(작가 권장 3개정도 적당한듯)

// return문은 반드시 함수 몸체에서만 사용한다.
