/**
 * 원시 값과 객체의 비교
 * 1. 원시값은 변경 불가능한 값이다.(불변값), 값 자체를 바꾸지 않는다.(메모리를 건들지 않아...)
 *
 */
// const로 선언한 상수는 재할당이 불가능하다.
const o = {};

// o = 10; // 에러가 발생

// 객체 o는 상수로 선언했으나, 객체의 프로퍼티 동적 추가, 삭제는 가능하다.
o.a = 1;
console.log(o);

var score; //  score -> 0x000000F2 -> undefined
score = 80; // score -> 0x00001332 -> 80
// 0x000000F2 -> 메모리 해제(가비지 컬렉터)
score = 90; // score -> 0x0669F913 -> 90
// 0x00001332 -> 메모리 해제(가비지 컬렉터)

// 문자열 (자바스크립트는 원시값) => 변경 불가능
// 유사배열 객체(Symbol.iterator가 있으면 이터러블한 객체임.)
// 배열 처럼 인덱스로 접근이 가능하고, length프로퍼티가 있는 경우 이터러블 객체라고 한다. 즉 문자열도 두가지 조건이 일치하기 때문에 이터러블 객체이다.
// 래퍼 객체 생성 new String(value) => 끝나면 폐기
var str1 = "";
var str2 = "Hello";
console.log([...str2]);
str2[0] = "S";
console.log(str2); // 변경되지 않음. Hello

// 원시 값을 객체처럼 사용하면, 자동으로 래퍼 객체로 변환된다.
// var str2 = ''; 원시값
// str2.slice(index, end) ===> new String(str2).slice(index, end)같은 래퍼객체 형태로 변환한다.

// Object.freeze(obj): 불변객체(한번 만든 객체는 건들지 않고, 새로 생성한다.)

var obj = {
  name: "choi",
};

var obj2 = {
  name: "choi",
};

/**
 * 객체 리터럴은 객체를 생성하는데, 객체 내용은 같으나 서로 다른 메모리 주소를 가지고 있기 때문에 false이다.
 * 원시값의 경우 메모리에 해당 값이 있을 경우 해당 값의 주소를 참조하기 때문에 true로 반환된다.
 */
console.log(obj === obj2); // false
console.log(obj.name === obj2.name, obj.name, obj2.name); // true (원시값을 비교하면 서로 같다.)
