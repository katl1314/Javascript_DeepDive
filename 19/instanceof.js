// 생성자 함수
function Person(name) {
    this.name = name;
}

// 생성자 함수의 인스턴스를 생성함.
const me = new Person("Lee");
const parent = {}; // 변경할 프로토타입 객체

Object.setPrototypeOf(me, parent); // 프로토타입 객체 변경

// parent객체를 Person.prototype 프로퍼티에 바인딩한다.
Person.prototype = parent;

console.log(me instanceof Person);
console.log(me instanceof Object);
console.log(Person.prototype);
