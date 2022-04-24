/* eslint-disable no-prototype-builtins */
/**
 * 자바스크립트 객체에는 내부 슬롯으로 [[Prototype]]이 존재하는데,
 * 내부 슬롯은 외부에서 접근이 불가능하기에 '__proto__'를 이용하여 외부에서 간접적으로 접근해야 한다.
 */

const obj = { a: 1 };

console.log(obj.__proto__, Object.prototype);
console.log(obj.__proto__ === Object.prototype);

console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("__proto__")); // 일반 객체는 __proto__를 갖지 않으며, Object.prototype객체 내 __proto__가 존재한다.

console.log(Object.prototype.hasOwnProperty("__proto__"));
