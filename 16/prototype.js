/**
 * 모든 자바스크립트 객체는 내부슬롯 [[Prototype]]을 갖는다.
 * 다만 내부슬롯은 외부에서 접근할 수 없기에 __proto__을 이용하여 접근해야한다.
 *
 * 다만 ES6가 도입되면서 Object.prototype.__proto__는 비표준으로 사용에 권장하지 않는다.
 * __proto__ ===> 없엔다.
 *
 * 대체 메서드
 * Object.getPrototypeOf(obj);
 */

const o = {};

o.name = "Choi";
o.age = 30;
// { value: 'Choi', writable: true, enumerable: true, configurable: true }
// 프로퍼티 어트리뷰트에 접근하기 위한 메서드 :  Object.getOwnPropertyDescriptor(obj, key);
console.log(Object.getOwnPropertyDescriptor(o, "name"));

console.log(Object.getOwnPropertyDescriptors(o)); // 객체 내 모든 프로퍼티 어트리뷰트 정보를 확인함.
