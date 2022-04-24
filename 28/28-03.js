/**
 * Number 메서드
 * 1. Number.isFinite(number) : 전달한 인자가 유한수인지 무한수인지 검사한다. true or false으로 반환함.
 */

console.log(`Number.isFinite(1) ------- ${Number.isFinite(1)}`); // 1은 유한수이므로 true(유한수)을 반환함.
console.log(`Number.isFinite(NaN) ----- ${Number.isFinite(NaN)}`); // 함수의 인자가 숫자가 아닌 문자(NaN 포함)이면 false를 반환함.
console.log(`Number.isFinite(1 / 0) --- ${Number.isFinite(1 / 0)}`); // 1/0의 결과값은 Infinity(무한수)이므로 false를 반환
console.log(`Number.isFinite(-1 / 0) -- ${Number.isFinite(-1 / 0)}`); // -1/0의 결과값은 -Infinity(무한수)이므로 false를 반환

/**
 * 2. Number.isInteger(number): 함수의 인자가 정수인지 검사함. 정수이면 true, 이외는 false를 반환함.
 */
console.log(`Number.isInteger(1) ------- ${Number.isInteger(1)}`); // true
console.log(`Number.isInteger(1.5) ----- ${Number.isInteger(1.5)}`); // false
console.log(`Number.isInteger(NaN) ----- ${Number.isInteger(NaN)}`); // false
console.log(`Number.isInteger(Infinity) ----- ${Number.isInteger(Infinity)}`); // false

/**
 * 3. Number.isNaN(number): 함수의 인자가 NaN인지 검사함.
 * ex) Number.isNaN(NaN) => true
 *
 * 4. Number.isSafeInteger(number): 함수의 인자가 안전한 정수인지 검사한다.
 *    Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
 * ex) Number.isSafeInteger(10); => true
 *
 * 5.Number.prototype.toExponential(number) : 함수로 전달한 인수를 지수표기법으로 변환하여 문자열로 반환 (77.1234).toExponential(4) -> 7.7123e+1
 * 정수 -> 지수 표기법으로 변환하여 문자열로 반환
 */
console.log((8.1234).toExponential(2)); // 8.12e+0
console.log((8.1234).toExponential(1)); // 8.1e+0
console.log((128.1234).toExponential(1)); // 1.3e+2

/**
 * Number.prototype.toFixed(degree) : 함수로 전달한 인수까지 소수점 반올림한다.(인수 생략시 0이 지정)
 */
console.log((1.123).toFixed()); // 1
console.log((1.123).toFixed(1)); // 1.1
console.log((1.123).toFixed(2)); // 1.12
console.log((1.123).toFixed(3)); // 1.123
console.log((1.123).toFixed(4)); // 1.1230

/**
 * Number.prototype.toString(진법) : 숫자를 문자열로 변환함.
 * 함수의 인자로 진법을 받을 수 있음(2 ~ 36)
 * 인자가 생략되어 있으면 10진법 문자열 반환함.
 */
console.log((1.123).toString(), typeof (1.123).toString()); // 1.123 string
