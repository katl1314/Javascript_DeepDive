/**
 * 엄격 모드(strict mode)는 ES6이전 불안정한 문법들이 웹페이지에 남아있는 경우가 있었다.
 * 해당 사항을 극복하더라도, 호환성 문제를 극복하기 위해 엄격모드에서만 변경사항이 활성화되도록 하였다.
 * "use strict"은 코드의 최상단에 위치해야하며, 엄격모드를 취소할 수 없다.
 * 모던자바스크립트 문법(class, ...)에서는 엄격모드가 자동으로 적용됨.
 */
"use strict";
console.log(1);

// 변수 admin, name 만들기
var admin;
var name;

// 변수 name에 문자열 "John"을 할당
name = "John";

// name값을 admin에 복사
admin = name;

console.log(admin);
