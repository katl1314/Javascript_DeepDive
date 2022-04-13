/**
 * 객체 리터럴의 상속 과정
 */

const base = {
    name: "lee",
    sayHi() {
        return `Hi! ${this.name}`;
    },
};

/**
 * 자바스크립트 모든 객체는 내부 슬롯 [[prototype]](프로토타입 체인을 생성시 사용함)을 가진다.
 * __proto__을 이용하여 객체의 프로토타입을 변경한다.
 * 객체 리터럴의 프로토타입은 기본적으로 Object.prototype을 가리킴.
 */
const derived = {
    __proto__: base,
    // es6의 메소드 축약 표현으로 정의한 메서드에서도 super 식별자 사용이 가능함.
    sayHi() {
        return `${super.sayHi()}`;
    },
};

console.log(derived.sayHi());
console.log(derived.__proto__);
