console.log(fn(10, 2));

/**
 * 런타임 이전에 자바스크립트 엔진에서 함수 선언문과 변수 선언문을 먼저 실행함.
 * 그리고 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 생성된 함수 객체를 할당함.
 * 반대로 변수의 경우 런타임 이전에 실행시 같은 이름의 식별자를 생성한 다음 값을 undefined로 초기화함.
 *
 * 함수 선언문과 변수 선언문을 코드 최상단에 올려놓은것처럼 동작하는 것을 호이스팅
 */

function fn(n, m) {
  // 함수 선언시 사용한 매개변수 길이보다 많이 전달되면 이외의 매개변수는 무시됨.
  console.log(arguments); // 함수 호출시 사용하는 인자들을 이터러블 객체로 저장되어있음.
  return n ** m;
}

/**
 * 화살표 함수는 function키워드를 대신하여 =>으로 함수를 구현할 수 있다.
 * 기존 함수에 비해 간략하게 사용할 수 있음.
 * ES6부터 지원함.
 *
 * 단점 함수 선언문 또는 함수 표현식 객체에 저장된 arguments(함수 호출시 인자를 이터러블 객체로 저장됨.), this, super는 상위 스코프를 참조한다.
 */

fn(1, 2, 3, 4, 5, 6, 7, 8);

// 자바스크립트 함수를 정의할 때 적절한 인수가 들어왔는지 함수 몸통에서 확인을 해야함.
// ex) typeof 이용한 타입체크

function add(a, b, c) {
  a = a || 0; // 단축평가를 이용하여 기본값을 설정한다.
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add()); // 0
console.log(add(1)); // 1
console.log(add(1, 5)); // 6
console.log(add(1, 5, 10)); // 16

// 다만 ES6이후에는 함수 선언시 매개변수에 기본값을 설정할 수 있다.

function add2(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add2()); // 0
console.log(add2(1)); // 1
console.log(add2(1, 5)); // 6
console.log(add2(1, 5, 10)); // 16

var obj = {
  name: "Lee",
};

function objChange(obj) {
  //   obj["name"] = "kim";

  var temp = { ...obj }; // 얕은 복사 또는 깊은 복사를 이용하면 1단계까지는 값이 안바뀐다.
  temp.name = "kim";
  console.log("temp", temp);
}

objChange(obj);
console.log("obj", obj); // 원본 배열도 변하는데...

/**
 * 원시값을 함수로 전달할 경우 call-by-value
 * 참조값을 함수로 전달할 경우 call-by-reference
 * 참조값으로 전달할 경우 객체가 저장되어 있는 참조값(주소)를 함수로 전달하기 때문에 함수 내 obj와 함수 외 obj가 같은 참조값을 바라본다.
 * -> 해결하기 위해서는 불변객체(Object.freeze) 또는 얕은복사/깊은복사를 해서 원본객체가 변하지 않도록 해야한다.
 */

// 즉시 실행함수 function 표현문 또는 표현식에 소괄호()를 감싸야함.
// 단 한번만 호출하며, 재 호출이 불가능
// 함수명 생략 가능
let a = (function say() {
  console.log("say");
  // 암묵적으로 undefined를 반환함.
  return 5;
})(); // 단 한번만 호출함

console.log(a);
