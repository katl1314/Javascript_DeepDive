/**
 * 화살표 함수
 * ES6에서 지원함.
 *
 * const add = () => { return; }
 * or const add = () => 1 + 2;  // 리턴만 있을 경우
 * or const add = x => ++x;     // 매개변수가 1개일때(0개 또는 2개 이상은 소괄호로 감싸야 함.)
 *
 * Arrow함수가지고 생성자 함수로 호출 할 수 없다 (함수 객체에 prototype이 없기 때문에)
 * 함수의 기능만 충실해라!!
 * argument, this, super, ...는 상위 스코프를 참고함.
 *
 * 1.메서드, 2.생성자함수, 3.이벤트 핸들러(addEventListener) 에 화살표 함수를 사용하지 마!!!!!!!!!!!!!!
 */

var person = {
    name: "James",
    sayHi: function () {
        console.log(this);
    },
};

person.sayHi();
