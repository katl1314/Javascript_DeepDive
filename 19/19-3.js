/* eslint-disable no-prototype-builtins */
/**
 * 자바스크립트 객체는 [[Prototype]] 이라는 내부슬롯을 가지고 있다.
 * 다만 외부에서는 내부 슬롯을 직접 호출할 수 없고, __proto__를 통해 간접 호출한다.
 *
 * __proto__는 접근자 프로퍼티(setter, getter, enumerable, configurable)로, 순환 참조를 통해 프로토타입 체인이 생성되는 것을 방지하기 위함이다.
 * 데이터 프로퍼티 값
 * value, writable,enumerable,configurable
 *
 * var parent = {};
 * var child = {};
 * parent.__proto__ = child;
 * child.__proto__ = parent; // (에러 발생)
 *
 * 프로토타입 체인은 반드시 단방향 링크드 리스트 구조이어야만 한다. 무조건 빠져나갈 수 있게 해야함.
 * 순환 참조를 통해 프로토타입 체인이 생성되면 원하는 검색이 없을때 무한루프에 빠질 위험이 있기 때문이다.
 *
 * __proto__는 표준 자바스크립트 객체 프로퍼티가 아니기 때문에(IE같은 브라우저에서 지원하지 않음.)
 * Object.setPrototypeOf(prototypeObj) 또는 Object.getPrototypeOf(obj)를 통해 객체의 프로토타입을 변경하거나, 반환할 수 있음.
 *
 *
 * 자바스크립트 함수에는 [[Prototype]]이라는 내부 슬롯이 있음(일급 객체이기 때문에),
 * 근데 function키워드를 사용한 함수 선언문 또는 함수 표현식일 때는 constructor함수로 호출이 가능함.(Prototype)프로퍼티가 있기 때문에
 * 근데 ES6에서 나온 클래스의 메서드, 화살표 함수는 내부 프로퍼티 Prototype이 존재하지 않기 때문에 생성자 함수로 사용할 수 없다.(철저히 함수 본연의 기능에 충실해라...)
 *
 * 프로토타입은 생성자 함수가 생성되는 시점에 만들어진다.
 * 프로토타입과 생성자 함수는 한 쌍으로 존재함. 반드시 1개일 수가 없다.
 */

const person = {
    name: "Lee",
};

console.log(Object.getPrototypeOf(person));

/**
 * 객체 리터럴에 의해 생성된 person객체는 Object.prototype을 상속받는다.
 */
console.log(person.constructor, Object, person.constructor === Object);
console.log(person.__proto__.constructor); // person.__proto__.constructor === person.constructor와 같다.

// 객체 person에 프로퍼티 name이 존재여부를 확인한다.
console.log(person.hasOwnProperty("name")); // Object.prototype.hasOwnProperty(name)를 상속받았다.
console.log("name" in person);
