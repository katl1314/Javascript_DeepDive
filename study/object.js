/**
 * 자바스크립트는 객체 기반 프로그래밍이며, 자바스크립트 원시 값을 제외한 나머지 값이 객체이다.
 * 객체에는 0개 이상으 프로퍼티가 존재하는데 프로퍼티는 key와 value으로 구성된다.
 *
 * 인스턴스 -> 동작 -> 메서드
 *
 * 인스턴스 : 클래스에 의해 생성되서 메모리에 저장되는 실체
 * -> new 연산자를 이용하여 생성자를 호출하여 생성함.
 * 객체 리터럴은 : 중괄호 안에 0개 이상의 프로퍼티가 존재함. var obj = {}
 *
 */

var person = {
  name: "Lee", // 프로퍼티
  sayHello: function () {
    // sayHello은 person객체의 메서드
    // this는 해당 메서드를 호출하는 인스턴스를 가리킨다.
    return `Hello! My name is ${this.name}`;
  },
};

console.log(person.sayHello());
console.log(person.sayHello.call(person)); // this는 기본적으로 window객체임(person을 this로 전달하자.)

// 객체는 프로퍼티 집합이고, key와 value으로 구성됨.
// 프로퍼티를 나열할때는 쉼표(콤마)로 구분
// key에 하이픈(-)이 있으면 쌍따옴표로 묶는다.

var object2 = {
  a: 1,
  b: function () {
    return this.a;
  },
  "c-1": this.b, // 객체 프로퍼티 key에 하이픈이 포함되면 따옴표 및 쌍따옴표로 묶어야 에러가 발생하지 않아!!!!!!!!!!!!
};

// 대괄호(['key']와 점(.key)를 이용하여 객체의 프로퍼티 값에 접근할 수 있다.
// 추가적으로 위 사례를 이용하여 값을 참조할 수 있어, 근데 값 추가 및 변경도 가능해.
console.log(`person['name']`, person["name"]); // 대괄호를 이용하여 객체 프로퍼티 값 참조
console.log(`object2.a`, object2.a); // 점(.)을 이용하여 객체 프로퍼티 값 참조

// 대괄호를 이용하여 프로퍼티 name을 ['name'] = 'Choi';으로 변환해보자
person["name"] = "Choi";
console.log(person);

// .(점)을 이용해서 함수를 추가해보자.
object2.c = function () {
  console.log("object2.c");
};

console.log(object2);

// 프로퍼티 키는 공백문자로 사용이 가능하긴 함.
object2[""] = "공백문자";
console.log("객체 프로퍼티 키가 공백인경우", object2);

// 객체 리터럴(중괄호를 이용하여 0개 이상의 프로퍼티가 있는 값)에서
// 프로퍼티 key가 숫자가 올 수 있으나, 자바스크립트 엔진에 의해 자동으로 문자열로 변환함.
// { 0 : 'a', 1 : 'b' } => {'0' => 'a', '1' : 'b'} ==> obj['0'] or obj[0] 둘다 접근이 가능해.

// 동일한 프로퍼티의 경우 나중에 들어온 프로퍼티로 덮어씌운다.

let obj3 = {
  a: 1,
  a: 2,
  a: 3,
};

console.log(obj3); // { a : 3 }   ==> 객체 리터럴 생성시 a프로퍼티 3개를 선언했으나 마지막에 선언한 a만 남는다!

// 메서드
// 호출할 때에 따라 다르게 표현함.
var circle = {
  radius: 5,
  getDiameter: function () {
    // 메서드 (객체로 함수를 호출할때)
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
