/**
 * 전역 객체
 *
 * 자바스크립트 최상위 객체
 * 자바스크립트 엔진에 의해 누구보다도 먼저 생성되는 객체임
 * - browser : window, self, frames, this(함수의 호출 방식에 따라 달라짐.), 전역 스코프상의 this
 * - node.js : global
 *
 * - globalThis: ES11(ECMAScript2020)에 도입된 globalThis는 브라우저 환경과 Node환경에서 전역 객체를 가리키는 다양한 식별자를 통일한 식별자
 * node에서는 global, browser환경에서는 window등 전역객체를 가리키는 식별자가 다르기 때문에 globalThis으로 통일한듯함.
 */

console.log(globalThis === global);

// 전역 실행 컨텍스트의 thisBinding된 this는 전역객체를 가리킴.
console.log(globalThis === this);

/**
 * 전역 객체는 표준 빌트인 객체(Number, String, Boolean, Object, Date, RegExp, Symbol, ...)과 호스트 객체(브라우저와 Node같은 자바스크립트 환경에서 제공하는 객체(Web API, HOST API)),
 * var 키워드를 사용한 전역 변수, 전역 함수를 프로퍼티로 삼는다.
 *
 * 전역 객체는 window(브라우저) 또는 global(노드)을 생략하고 프로퍼티를 참조할 수 있음.
 */
global.a = "1"; // 전역 객체의 프로퍼티

console.log(a, global.a); // 전역 객체의 프로퍼티 a는 global생략하여 참조할 수 있음.

// b = function () {};
console.log(global);
