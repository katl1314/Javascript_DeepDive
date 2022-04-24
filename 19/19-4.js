/**
 * 객체 생성 방식과 프로토타입 결정
 *
 * 객체 생성 방법에는 다음과 같은 방법이 있다.
 *
 * 1. 객체 리터럴
 * 2. Object 생성자 함수
 * 3. 생성자 함수
 * 4. Object.create()함수
 * 5. 클래스(ES6)
 *
 * 5개 각각 다른 방법으로 객체를 생성한다고 하더라도 내부에서는 OrdinaryObjectCreate 추상연산자를 통해 객체를 생성함.
 *
 * OrdinaryObjectCreate에는 반드시 프로토타입으로 설정할 인수를 전달받는다.
 *
 * 인수로 전달한 프로토타입을 자신이 생성한 객체 내부 슬롯 [[Prototype]]에 저장하고, 생성한 객체를 반환한다.
 */

// 객체 리터럴에 의해 생성된 객체의 프로토타입

const obj = {
    x: 1,
};

// 객체 obj는 Object.prototype에 상속받는다.
// Object.prototype메서드, 기능을 obj가 사용이 가능함.
console.log(obj.constructor === Object);

// Object 생성자 함수로 생성한 객체의 프로토타입

const newObj = new Object();
// Object 생성자 함수 또한 Object.prototype에 상속받는다.
console.log(newObj.constructor === Object);

/**
 * 객체 리터럴은 리터럴 내부에 프로퍼티 추가가 가능함.
 * 근데 Object 생성자 함수는 빈 객체를 생성한 다음에 프로퍼티를 추가해야한다.
 */

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return `Hi! ${this.name}`;
};

const p1 = new Person("LEE");
console.log(p1.constructor === Person, p1.constructor === Object); // true false
// 생성자 함수로 호출할 경우 인스턴스는 Person.prototype의 상속을 받는다.
console.log(p1.__proto__, Person.prototype);

// Person 생성자 함수로 생성한 인스턴스는 Person.prototype뿐만 아니라, 프로토타입 체인으로 인해 Object.prototype 메서드도 호출할 수 있다.

console.log(p1.hasOwnProperty("name"));
console.log(p1.isPrototypeOf(Person.prototype)); // Person생성자 함수의 인스턴스는 Object.prototype.isPrototypeOf를 호출할 수 있음.

console.log(Object.getPrototypeOf(p1), Person.prototype); // Object.getPrototypeOf(p1) => p1.__proto__ => 객체 내부 슬롯 [[Prototype]] 간접 호출
console.log(Object.getPrototypeOf(Person.prototype), Object.prototype);

/**
 * 객체 내부에 참조할 프로퍼티가 없으면, 내부슬롯 [[Prototype]]을 통해 상위 프로토타입으로 순차적으로 이동하면서 검색함.(프로토타입 체인)
 * Object.prototype은 체인의 종점으로 Object.prototype의 [[Prototype]]은 null이 된다.
 */
