/**
 * 객체 변경 금지
 * - 객체는 변경 가능한 값으로, 재할당 없이 값 변경이 가능하다.
 * 쉽게 말하자면 프로퍼티를 추가하거나, 삭제할 수 있고 갱신이 가능함.
 * Object.defineProperty 또는 Object.defineProperties메서드를 호출하여 프로퍼티 어트리뷰트를 정의/재정의
 * 가 가능하다.
 *
 * 자바스크립트는 객체의 확장 금지, 변경을 방지하는 3가지 메서드를 지원함.
 *
 * Object.preventExtension: 객체 확장 금지[프로퍼티 추가만 불가]
 *                                      ^
 * Object.seal: 객체 밀봉[프로퍼티 추가, 프로퍼티 어트리뷰트 재정의 불가]
 *                                      ^
 * Object.freeze: 객체 동결[프로퍼티 추가, 삭제, 프로퍼티 어트리뷰트 재정의 불가]
 */

// 객체 확장 금지(Object.preventExtension)
// 프로퍼티 추가만 불가능함.

const person = {
    name: "Choi",
    age: 26,
};

Object.preventExtensions(person); // 객체 확장 금지

// 프로퍼티 추가
// Object.preventExtension을 통해 객체 프로퍼티 추가가 금지되므로 에러가 발생함.
// Object.defineProperty(person, "gender", {
//     value: "m",
//     enumerable: true,
// });

// 프로퍼티 삭제
delete person["age"]; // Object.preventExtension호출 후 객체의 프로퍼티 삭제는 가능함.

console.log(person);

// 프로퍼티 어트리뷰트 재정의
Object.defineProperty(person, "name", {
    value: "Lee",
    enumerable: true,
});

console.log(person);

console.log(Object.isExtensible(person)); // 확장 가능한 객체인지 확인 Object.isExtensible(object)
