/**
 * Javascript 객체 지향 프로그래밍
 * 객체지향 프로그래밍은 하나의 문제를 여러 개의 객체 단위로 나누어 작업하는 방식.
 * 현재 가장 많이 사용되고 있는 프로그래밍 방식임.
 * 클래스를 이용하여 메서드와 데이터부분을 하나의 인스턴스(객체)로 생성하여 사용함.
 * 독립적인 객체 단위로 분리하여 작업하기 때문에 유지보수에 유리함.
 *
 * 추상화, 캡슐화(관련있는 기능(데이터, 메서드)를 하나의 클래스로 묶음), 상속(부모와 자식의 상속), 다형성 4가지를 만족해야 객체지향 프로그래밍이라고 함.
 */

const Person = (function () {
  // 자바스크립트에서는 new 연산자를 사용하여 생성자 함수를 호출함.
  // 자바스크립트는 객체를 생성하는 생성자 함수를 제공함.
  // 새 객체를 this키워드 값으로 전달함.
  // 생성자 함수는 객체가 사용되기 전 필요한 프로퍼티를 설정하는 역할을 담당함.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * 자바스크립트 프로토타입
   * 자바스크립트의 모든 객체는 그것의 프로토타입 객체에 대한 내부 참조를 가짐.
   * 프로토타입 객체로부터 프로퍼티를 상속받음.
   * ES6이전에는 class기능을 지원하지 않아, prototype을 이용하여 객체 상속을 구현하였다.
   */
  Person.prototype = {
    constructor: Person,
    sayHello: function () {
      return `hi!`;
    },
    sayName: function () {
      return this.name;
    },
    sayAge: function () {
      return this.age;
    },
    sayIntroduce: function () {
      return `${this.sayHello()} My name is ${this.sayName()}. My age is ${this.sayAge()} old.`;
    },
  };

  return Person;
})();

const person = new Person("Kim", 30);
// console.log(person.__proto__, Person.prototype);

console.log(person.sayIntroduce());
