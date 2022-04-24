/* eslint-disable no-prototype-builtins */
/**
 * Object.prototype.hasOwnProperty메서드
 * 객체에 해당 프로퍼티가 존재하는지 확인할 수 있음.
 * ex)
 * Object.hasOwnProperty(key); // true or false
 *
 * 객체 고유의 프로퍼티만 true를 반환하고, 프로토타입의 프로퍼티 키는 false가 반환된다.
 * 프로퍼티 어트리뷰트의 enumerable이 false일지라도 무시하는듯.
 */

import { myObj } from "./object.js";

/**
 * 우항 객체 프로토타입에 바인딩된 객체가 좌항 객체의 프로토타입 체인에 있는 경우 체크
 */
console.log(`myObj instanceof Object : ${myObj instanceof Object}`);
console.log('myObj.hasOwnProperty("a")', myObj.hasOwnProperty("a"));
console.log('myObj.hasOwnProperty("b")', myObj.hasOwnProperty("b"));
console.log('myObj.hasOwnProperty("c")', myObj.hasOwnProperty("c"));
console.log('myObj.hasOwnProperty("d")', myObj.hasOwnProperty("d"));
console.log('myObj.hasOwnProperty("e")', myObj.hasOwnProperty("e"));

/**
 * 프로토타입 프로퍼티는 false를 반환함.
 */
console.log('myObj.hasOwnProperty("length")', myObj.hasOwnProperty("length"));
