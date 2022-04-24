/**
 * 객체 변경 금지
 *
 * 2. Object.seal(object) : 객체 밀봉
 *  - 프로퍼티 추가와, 프로퍼티 삭제 불가능.
 */

var person = {
    name: "choi",
    age: 32,
};

Object.seal(person);

// 객체 밀봉 여부 확인 Object.isSealed(object)
console.log(Object.isSealed(person));

// 프로퍼티 어트리뷰트 추가
person.gender = "m"; // 프로퍼티가 추가되지 않음.

// 프로퍼티 어트리뷰트 재정의
person.name = "Lee";
console.log(person);

delete person["name"];
console.log(person);
