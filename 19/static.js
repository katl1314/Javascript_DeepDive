/**
 * 정적 프로퍼티, 메서드
 * 인스턴스를 생성하지 않아도 생성자 함수(클래스이름)을 이용하여 호출할 수 있는 프로퍼티/메서드
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 프로토타입 메서드 선언
Person.prototype.prototypeMethod = function () {
    // 프로토타입 메서드는 인스턴스의 프로토타입 체인에 프로토타입 객체가 속해있으면 인스턴스로 프로토타입 메서드를 호출할 수 있다.
    const { name, age } = this;
    return `Hello! My name is ${name}, ${age}`;
};
// 정적 메서드 선언
Person.staticMethod = function ({ name, age }) {
    console.log(this instanceof Function); // this는 인스턴스를 가리키는것이 아닌 Person 생성자 함수 객체를 의미한다.
    // 정적 메서드에서는 생성자 함수로 생성된 인스턴스로 참조/호출할 수 없음.
    return `Hi! My name is ${name}, ${age}`;
};

// 정적 프로토타입
Person.staticPrototype = "OK!";

const me = new Person("aa", 10);

console.log(Person.staticMethod(me));
