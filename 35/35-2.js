/**
 * 이터러블 객체를 배열로 변환
 * 1. Array.prototype.slice.call(iterable) 또는 Array.from(iterable)메서드를 통해 이터러블 객체를 배열로 변환가능함.
 * 2. 스프레드 문법을 이용해도 배열 변환이 간편하게 됨.
 */

function sum() {
    /**
     * 이터러블 객체내 Symbol.iterator메서드가 정의되어 있어 이터러블 프로토콜을 준수함.
     * 이터러블 객체는 스프레드 문법, 배열 디스트럭처링, for...of같은 기능을 이용할 수 있음.
     */
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
    console.log(Array.prototype.slice.apply(arguments));
    console.log([...arguments]); // spread문법을 이용하여 이터러블 객체를 배열로 변환했다.
    console.log(Array.from(arguments));

    // 유사배열 객체는 이터러블 객체가 아니기 때문에 스프레드 문법을 이용하여 배열 변환이 불가능
    // Array.prototype.slice.call, apply를 이용하던지 Array.from을 이용하자.

    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Rest 파라미터: 스프레드 문법과 비슷하게 생겼으나, 스프레드 문법과 정반대임
// Spread 문법은 하나로 뭉쳐진 값들을 펼쳐 각자 개별적인 값으로 나누어 분리한 형태이면
// Rest 파라미터는 함수 인자 전달시 여러 값들을 하나의 배열로 합치는 용도로 사용됨
// Rest 파라미터는 반드시 함수의 마지막 인자에 위치해야함.


function sum2 (isOk, ...numbers) {
    // 첫번째 인자가 true이면 우변에 있는 함수를 호출한다.
    return isOk && sum(...numbers);
}

console.log(sum2(true, 1, 2, 3, 4, 5));