function Person(name, age) {
    // 생성자 함수로 호출을 했는지?
    if (new.target) {
        this.name = name;
        this.age = age;
    } else {
        return null;
    }
}

Person.prototype = {
    constructor: Person,
    sayHi: function () {
        return `Hi My name is ${this.name}. ${this.age}`;
    },
};

console.log(Person()); // 일반 함수(this는 전역객체)
const person = new Person("lee", 25);
console.log(person); // 생성자 함수(this는 Person생성자 함수의 인스턴스)
console.log(Object.getOwnPropertyDescriptor(Person, "prototype")); // Person은 함수 객체(생성자 함수 생성 가능)으로 prototype프로퍼티가 존재한다.
console.log(person.__proto__, Person.prototype);
console.log(Object.getPrototypeOf(person));
/**
 * Person.prototype.constructor는 Person클래스를 가리킨다.
 */
console.log(Person.prototype.constructor === Person);
console.log(person.__proto__.constructor); // Person
