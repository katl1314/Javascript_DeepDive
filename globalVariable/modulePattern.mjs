/**
 * 모듈 패턴은 클로저를 이용하는 것으로
 * 즉시 실행 함수로 감싸 하나의 모듈을 구현한다.
 */

// 해당 함수를 호출하게 되면 객체가 반환됨.
// 객체는 private한 변수 counter를 증가하거나, 감소하는 기능(메서드)가 있음.
var Counter = (function () {
    // private한 변수
    // 외부에서 호출할 수 없다. (정보은닉)
    var count = 0;

    return {
        increase: function () {
            return ++count;
        },
        decrease: function () {
            return --count;
        },
    };
})();
console.log(Counter);
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.decrease());
