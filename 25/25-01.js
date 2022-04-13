/**
 * 자바스크립트는 프로토타입 기반 객체지향 언어.
 * 자바스크립트는 강력한 객체지향 프로그래밍 능력을 가지고 있음.
 *
 * ES6 이전에는 생성자 함수(Function.prototype)으로 객체지향 프로그래밍을 한 반면
 * ES6이후에는 class가 추가되었다.
 */

/* 생성자 함수로 정의한 객체지향 프로그래밍 */

const Person = (function () {
    // 정보은닉을 위한 상태값 추가
    let hiddenValue = true;
    function Person(name) {
        // 생성자 함수 정의
        this.name = name; // 프로퍼티
    }

    // 프로토타입 함수
    Person.prototype.getName = function () {
        return this.name;
    };

    // 정적 메서드 (Person함수 객체의 메서드)
    Person.getHiddenValue = function () {
        return hiddenValue;
    };
    return Person;
})();

const person = new Person("James");
console.log(person, Object.getPrototypeOf(person));

console.log(
    person.hasOwnProperty("name")
); /* Object.prototype.hasOwnProperty메서드 사용 가능 */

console.log(person.getName()); // 인스턴스 메서드 호출
console.log(Person.getHiddenValue());

/**
 * function의 경우 함수 객체내 prototype 프로퍼티가 있으면 생성자 함수로 사용이 가능, arrow function은 없기에 생성자 함수로 사용 불가
 * new연산자 없이 함수를 호출할 경우 함수 객체 내 내부 슬롯 [[Call]]을 호출하여 일반 함수로 호출함.(this는 전역 객체를 가리킴)
 * new연산자 사용하여 함수를 호출할 경우 내부 슬롯 [[Construct]]를 호출하여 생성자 함수로 호출함.(this는 생성자 함수로 만들어진 인스턴스를 가리킨다.)
 *
 * class는 super, extends를 지원하여 상속받거나, 부모 클래스로 전달할 수 있으나, 생성자 함수는 super, extends를 지원하지 않는다.
 *
 * 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅, 함수 표현문으로 정의한 생성자 함수는 변수 호이스팅이 발생, 클래스는 호이스팅이 발생하지 않는것처럼 동작함.
 *
 * class 내부는 "strict mode"가 지정되어 잇음 별도로 해제 불가.
 */

// 클래스의 정의
class Student {}

// 클래스도 함수와 같이 일급객체임. (클래스는 값으로 사용 가능함.)
// 클래스는 함수 표현식처럼 사용 가능함.
const Student2 = class Student2 {}; // 기명 클래스
const Student1 = class {}; // 익명 클래스

// 클래스 내부에 프로퍼티, 인스턴스 메서드, 정적 메서드를 모두 선언이 가능하다.

class Test {
    // 생성자 : new연산자를 이용하여 Test클래스 호출할 때 가장 먼저 동작함.(초기화)
    constructor(name) {
        this.name = name;
    }

    // 프로토타입 메서드 (생성자 함수의 프로토타입 메서드 처럼 동작함.)
    // 프로토타입 체인의 일원이 된다.
    getName() {
        return this.name;
    }

    // 정적 메서드: static키워드를 사용하여 정적 메서드임을 알린다.
    // 정적 메서드 내부의 this는 메서드를 포함하는 class를 가리키지 않음.
    // 인스턴스로 접근이 불가능하고, Test클래스로 직접 접근해야한다.
    static getTest() {
        console.log(this.name); // 정적메서드를 포함하고 있는 Person객체를 가리킴.(즉 인스턴스 프로퍼티 참조가 불가능.)
        return "이 것은 정적 메서드";
    }

    // 기본적으로 this를 반환함.
    // 명시적으로 원시값을 반환할경우 무시되고, this를 반환함.
    // 참조값을 반환하면 this는 무시되고 참조값을 반환함.
}

const test = new Test("a"); // Test클래스의 생성자를 호출함.
console.log(test.getName()); // 인스턴스 메서드
console.log(Test.getTest()); // 정적 메서드 호출

// 클래스는 함수이고 일급 객체
// 클래스도 함수와 마찬가지로 런타임 이전에 먼저 평가되어 함수 객체를 생성.
// 런타임 이전에 생성된 함수 객체는 constructor이다. 프로토타입과 생성자 함수는 함깨 존재한다.
// 클래스는 let, const와 마찬가지로 일시적 사각지대로 인해 실제로는 호이스팅이 발생하나, 호이스팅이 발생하지 않는 것처럼 동작함.

// constructor는 생성자 함수로 new연산자와 함깨 호출하면 인스턴스를 생성하고 초기화한다.(초기값을 세팅) 무조건 1개만 존재함.
// constructor는 클래스 함수 객체의 프로토타입 메서드

// 클래스 내에서 원시값을 반환하면 무시되고 this를 반환, 참조값을 반환하면 this를 반환하지 않고, 참조값을 반환한다.
