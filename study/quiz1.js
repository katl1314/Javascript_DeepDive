var person = {
  "last-Name": "Lee",
  1: 10,
};
// 브라우저 : person.last를 먼저 찾음. person객체에 last해당하는 프로퍼티가 없기 때문에 undefined,
// name의 경우 전역 변수, 로컬 변수가 없으면 window객체에서 찾아서 사용하기 때문에 ''
// 즉 undefined - '' = NaN(산술 불가능한 숫자)
// 브라우저에서 var변수를 사용하게 되면 자동으로 전역 객체에 추가됨.
// 근데 window.a으로 전역 객체에 a를 추가하고 delete로 a를 지우면 삭제가 되는데, var로 하면 삭제가 안되!!!!

// Node.js의 경우 global전역객체의 name을 참조하지 않기 때문에, 전역 변수 name까지 찾는다.
// 전역 변수 name이 선언되지 않음.

// 프로퍼티값 재 상신(할당)
person[1] = 20;
console.log(person);

// 프로퍼티 값 추가(동적 생성)
person.a = person[1];
console.log(person);

// 프로퍼티 삭제 delete
// 프로퍼티가 없으면 undefined로 나와,
delete person.a;
console.log(person);

/**
 * Object.defineProperty(obj, key, { value : 20, configurable : false, ... })
 * - configurable이 false이면 delete로 프로퍼티를 아무리 삭제하려고 해도 삭제되지 않음.
 * value: value(프로퍼티 값)
 * writable: true (프로퍼티 값 변경 여부)
 * enumerable: true (프로퍼티 확인 가능 여부 for...in같은 기능으로)
 * configurable: true (프로퍼티 삭제 가능 여부)
 */

// 프로퍼티 정의 Object.defineProperty(object, key, {...options})
Object.defineProperty(person, "test", {
  value: "choi",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(person["test"]); // 값은 반환되나, 객체 전체에서는 해당 프로퍼티는 enumerable이 false이므로 숨겨져서 나옴.

// ES6 프로퍼티 축약 표현
var x = 1;
var y = 2;

var test = { x, y }; // var test = { x : x, y : y }; 프로퍼티 키와 값이 같으면 축약 표현이 가능함.

console.log(test);

// 계산된 프로퍼티 이름
// 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용하여 프로퍼티 키를 동적으로 생성이 가능하다.
// ES6이후에는 객체 안에서 Key를 대괄호를 이용하여 동적으로 생성이 가능함.
// ES6 이전
var prefix = "prop";
var i = 0;
var obj2 = {};

obj2[prefix + "-" + ++i] = i;
obj2[prefix + "-" + ++i] = i;
obj2[prefix + "-" + ++i] = i;
console.log(obj2);
// ES6 이후

i = 0;
obj2 = {};

obj2 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj2);

// 메서드 축약 표현
// 기존에는 key와 함수 사이에 :(콜론)을 추가하여 메서드를 정의하였다.
// ES6이후에는 :(콜론) 생략하고 메서드명() {}같은 형태로 선언이 가능하다.

var obj3 = {
  name: "choi",
  // ES6 이전의 객체 내 메서드 선언
  sayHi: function () {
    return this.name;
  },
};

var obj4 = {
  name: "choi",
  // ES6 이후의 객체 내 메서드 선언(메서드 축약 표현)
  sayHi() {
    return this.name;
  },
};

console.dir(obj3.sayHi); // prototype이 있고
console.dir(obj4.sayHi); // prototype이 없다. => 생성자 함수로 사용하려면 반드시 있어야함.
