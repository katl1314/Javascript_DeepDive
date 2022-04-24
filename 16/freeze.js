/**
 * 객체 동결 (Object.freeze(object));
 * - 프로퍼티 어트리뷰트 추가, 삭제, 재정의가 모두 불가능하며, 읽기전용임.
 * 다만 중첩 객체가 있을 경우 Object.freeze메서드는 1level까지 적용되기 때문에 재귀를 이용하여 모든 프로퍼티
 * 에 적용해야함.
 */

const person = {
    name: "choi",
    age: 32,
};

Object.freeze(person);

// 객체 동결 여부
console.log(Object.isFrozen(person));

// freeze된 객체의 writable, cofigurable은 모두 false(프로퍼티 추가, 삭제, 재정의가 안됨.)
person.gender = "m"; // 프로퍼티 어트리뷰트 추가

delete person["name"]; // 프로퍼티 어트리뷰트 삭제

person.age = 25; // 프로퍼티 어트리뷰트 재정의

console.log(person);

const person2 = {
    name: "Choi",
    address: {
        city: "Seoul",
    },
};

// Object.freeze(person2);
console.log(Object.isFrozen(person2)); // true
console.log(Object.isFrozen(person2.address)); // false

function deepFrozen(o) {
    if (o && typeof o === "object" && !Object.isFrozen(o)) {
        Object.freeze(o);
        Object.keys(o).forEach((key) => {
            deepFrozen(o[key]);
        });
    }
}

deepFrozen(person2);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person2.address));
