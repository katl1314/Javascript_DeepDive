/**
 * 자바스크립트 빌트인 객체
 * - 자바스크립트 객체
 * 
 *   1. 자바스크립트 빌트인 객체
 *      ECMAScript에 정의된 객체를 의미함.
 *      애플리케이션 전역의 공통 기능을 제공함.
 *      그래서 별도의 선언 없이 전역 변수처럼 어디서든지 사용이 가능함.
 *      ex) String, Boolean, Object, Date, RegExp, Set, Map, Number, Function, Array, Math, Symbol, Promise, Reflect, Proxy, JSON, Error등 총 40개 빌트인 객체가 있음.
 *      전역의 공통적인 기능을 제공함.
 *   2. 호스트 객체
 *      브라우저 또는 Node.js에서 별도로 제공하는 객체 (자바스크립트 실행환경에서 제공하는 객체)
 *      ECMAScript에서 정의한 객체는 아님.
 *   3. 사용자 정의 객체
 *      사용자가 직접 정의한 객체
 *      ex) 생성자 함수를 이용하여 객체를 생성하는 경우
 */

// 생성자 함수 객체인 표준 빌트인 객체는 인스턴스 메서드와 정적 메서드 모두 제공
// 생성자 함수 객체가 아닌 표준 빌트인 객체는 정적메서드만 제공
// Reflect, JSON, Math는 인스턴스를 생성할 수 없는 생성자 함수 객체가 아님.

/* console.log(JSON.prototype); */ // TypeError: JSON is not a constructor

// 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스 프로토타입은 표준 빌트인 객체의 prototype에 바인딩된 객체
const myString = new String('Lee');
console.log(Object.getPrototypeOf(myString) === String.prototype);

// 표준 빌트인 객체의 prototype에 바인딩된 인스턴스는 표준 빌트인 객체의 prototype을 상속받을 수 있음.
console.log(myString.concat(" Ungmo")); // String생성자 함수의 인스턴스로 String.prototype.concat을 호출한다.
/**
 * 원시값과 래퍼 객체
 * 원시값(문자, 숫자, 불리언 등)은 객체가 아니므로 사실상 프로퍼티를 호출할 수 없다.
 * 근데, 자바스크립트에서는 원시값에 대한 생성자 함수가 존재한다.
 * 
 * 원시값을 이용하여 length. toString등 프로퍼티와 메서드를 접근할 수 있는데 이것은 래퍼 객체 때문이다.
 * 
 * 래퍼 객체(임시 객체)는 원시값이 프로퍼티 또는 메서드를 호출하는 순간 원시값을 래퍼 객체로 변환하고 호출이 완료되면 다시 원상태로 되돌린다.
 */

// 숫자 원시값 선언
const number = 1.5;

// 원시값을 암묵적으로 래퍼 객체(임시 객체)로 만든 후 인스턴스 메서드 호출
console.log(number.toFixed());

console.log(number); // 래퍼 객체에서 다시 원시값으로 변환.