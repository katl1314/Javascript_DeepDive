const person = ((name) => ({
    sayHi() {
        return `Hi, My name is ${name}`;
    },
}))("Lee");

console.log(person.sayHi());

const personFunc = (function (name) {
    // 즉시 실행함수를 실행하면 sayHi메서드가 담긴 객체를 반환함.
    // 객체를 통해 메서드 sayHi를 호출해보자.
    return {
        sayHi() {
            return `Hi, My name is ${name}`;
        },
    };
})("Choi");

console.log(personFunc.sayHi());

/**
 * 객체 리터럴을 반환하기 위해서는 {}중괄호 밖에 소괄호로 감싸야한다.
 * 소괄호를 감싸지 않으면 함수의 몸체로 해석하기 때문.
 */
const obj = () => ({ a: 1, b: 2 });

console.log(obj());

/**
 * ES6 이전 함수와 화살표 함수의 차이
 * 1. 화살표 함수나 ES6 메소드 축약 표기법으로 정의한 메서드는 Non-constructor임. => 생성자 함수로서 사용이 불가능함.
 * 2. 매개변수명 중복시 에러가 발생함. es6이전 함수의 경우 메서드명이 중복되도 에러가 발생하지 않음. (es6 메서드도 에러 발생)
 *    아마 ES6 문법 사용시 암묵적으로 strict mode가 발생하기 때문에 그런가 추측됨.
 * 3. 화살표 함수는 자체적으로 this, arguments(유사 배열 객체[이터러블]), super, new.target(해당 함수가 생성자 함수로 호출되었는지 확인)을 갖고 있지 않고,
 * 스코프체인상 가장 가까운 일반 함수(화살표 함수 X)의 this, arguments, super, new.target을 참조함.
 *
 * 4. 화살표함수는 생성자 함수로 사용할 수 없어 함수 객체에 prototype 프로퍼티가 없고, 프로토타입이 생성되지 않음
 * 일반 함수에는 prototype프로퍼티가 존재하여 프로토타입이 생성되고, 생성자 함수로서 사용이 가능함.
 *
 * 생성자 함수로 사용하려면 prototype프로퍼티가 있어야 하고 prototype이 있어야 프로토타입이 생성된다.
 */

console.log(obj.hasOwnProperty("prototype"));
console.log(function () {}.hasOwnProperty("prototype"));
