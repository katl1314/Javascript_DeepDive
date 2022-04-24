/**
 * 빌트인 전역 프로퍼티
 * - 전역 객체의 프로퍼티를 의미함.
 * Infinity : 무한대를 의미함.(number)
 */
console.log(Infinity, typeof Infinity); // Infinity number
console.log(3 / 0, -3 / 0); // Infinity, -Infinity

/**
 * NaN : Not-a-Number: 숫자가 아님을 나타냄.
 */
console.log(NaN, typeof NaN); // NaN number
console.log("asd" / 1, "1" / 1); // 문자열이 숫자가 아니면 NaN, 문자열이 숫자면 자바스크립트 엔진에서 암묵적으로 Number으로 형변환함.
console.log(true / 1); // true은 1이므로, 1을 나누면 1이 반환됨.
console.log("" / 1); // ""은 falsy이므로 0

/**
 * undefined는 null과 달리 자바스크립트 엔진에서 암묵적으로 초기화를 한 값.
 */

var foo; // 호이스팅으로(변수 선언을 코드 상단으로 끌어올리는 것처럼 동작) 초기화의 경우 자바스크립트 엔진에서 undefined으로 초기화를 하게됩니다.
// var는 변수 선언과 초기화를 동시에 하기 때문에 undefined으로
