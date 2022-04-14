function Person(name) {
    this.name = name;
}

// Person.prototype.getName = () => {
//     // this는 전역 객체를 가리킴
//     // 이유: 해당 프로토타입 메서드는 화살표 함수로 정의됨. 즉 this, arguments, super는 기본적으로 스코프 체인상 가장 가까운 일반 함수의 this를 참조하는데
//     // 스코프 체인 상 가장 가까운 함수가 없기에, 전역 스코프의 this(window)를 참조함.
//     return this.name;
// };

// ES6메서드를 동적으로 추가하기 위해서는 객체 리터럴을 바인딩하고, 프로토타입 constructor를 생성자 함수와 연결해야함.
Person.prototype = {
    constructor: Person, // prototype.constructor를 생성자 함수와 연결해야함.
    // ES6 메서드 동적 추가.
    setName(name) {
        this.name = name;
    },

    getName() {
        return this.name;
    },
};

console.log(Person === Person.prototype.constructor); // prototype.constructor와 생성자 함수간 연결 확인 true시 연결 O

// 프로토타입 메서드는 반드시 일반 함수로 정의할 것.
const myPerson = new Person("최민혁");

console.log(myPerson.getName()); // undefined

// 프로퍼티 동적 추가 시 화살표 함수 사용하지 말자.

myPerson.setName("이웅모");
console.log(myPerson.getName());
