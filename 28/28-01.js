/**
 * Number생성자함수
 * 자바스크립트 빌트인 객체임.
 * 숫자에 관련된 프로퍼티와 메서드를 제공함.
 */

const number = new Number(10); // Number생성자함수를 통한 인스턴스 생성.
console.log(+number.toFixed(), number.toString()); // 10(Number), '10'

console.log(!!1, !!0, !!undefined);

/**
 * new연산자를 이용하여 Number생성자 함수 호출시 Number래퍼 객체를 생성
 * 만약 new연산자 없이 Number생성자 함수 호출시 인스턴스가 아닌 숫자가 반환됨(명시적 형변환)
 */

// Number.EPSILON : es6이후 도입됨.
// 1과 1보다 큰 숫자중에서 가장 작은 숫자와의 차이와 같다.

console.log(0.1 + 0.2 === 0.3); // false
console.log(`Number.EPSILON : ${Number.EPSILON}`);

console.log(Math.abs(0.3 - 0.3) < Number.EPSILON);

/**
 * 부동소수점 산술 연산은 정확한 결과가 나오지 않는 경우가 있음.
 * ex) 0.1 + 0.2 = 0.30000000000000004처럼 나오기 때문에 0.1 + 0.2 === 0.3은 false으로 반환됨.
 * Number.EPSILON은 부동소수점 산술 연산시 오차가 발생하는 문제를 해결하기 위해 사용됨.
 * @param {number} a
 * @returns boolean
 */
Number.prototype.isEqauls = function (a) {
    return Math.abs(+this.toString() - a) < Number.EPSILON;
};

console.log((0.1 + 0.2).isEqauls(0.3));
console.log((0.1 + 0.2).isEqauls(0.3));

console.log(Number.MAX_VALUE); // Number.MAX_VALUE : 자바스크립트에서 사용할 수 있는 최대값.
console.log(Number.MIN_VALUE); // Number.MIN_VALUE : 자바스크립트에서 사용할 수 있는 최소값.

console.log(Number.MAX_SAFE_INTEGER); // Number.MAX_SAFE_INTEGER : 자바스크립트에서 안전하게 표현할 수 있는 최대값. (9007199254740991)
console.log(Number.MIN_SAFE_INTEGER); // Number.MIN_SAFE_INTEGER : 자바스크립트에서 안전하게 표현할 수 있는 최소값 (-9007199254740991)

// 양의 무한대 (Infinity) Number.POSITIVE_INFINITY
console.log(1 / 0 === Number.POSITIVE_INFINITY);

// 음의 무한대 (-Infinity) Number.NEGATIVE_INFINITY
console.log(-1 / 0 === Number.NEGATIVE_INFINITY);

// NaN체크 Number.isNaN(number)
console.log(Number.isNaN(1 / 0)); // Infinity는 NaN이 아니므로 false
console.log(Number.isNaN("a" / 0)); // NaN이므로 true
console.log(true / 1); // true -> 1 -> 1
console.log(false / 1); // false -> 0 -> 0
console.log(!!"asd", !!{});
