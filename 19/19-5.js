/**
 * instanceof 연산자
 * 피연산자가 두개인 이항 연산자.
 * 생성자 함수를 가리키는 식별자를 피연산자로....
 * 우변의 피연산자가 함수가 아닌경우 TypeError가 발생
 *
 * 객체(좌변) instanceof 생성자 함수(우변)
 *
 * ==> return type : boolean
 * 우변의 생성자 함수의 prototype에 바인딩된 객체가, 좌변의 프로토타입 체인 상에 존재하면 true, 그렇지 않으면 false를 반환한다.
 */

// 생성자 함수
function Person() {
    Person.prototype.sayHi = function () {
        console.log("hi");
    };
}

// 객체를 생성함.
const me = new Person();

console.log(me instanceof Person);
console.log(me instanceof Object);

const test = {};
Object.setPrototypeOf(me, test); // 프로토타입 객체 변경

console.log(me instanceof Person);
console.log(me instanceof Object);
console.log(me == Person.constructor);
console.log(me.constructor, Person);
