/**
 * 빌트인 전역 함수
 * - 애플리케이션 전역에서 호출할 수 있는 함수.
 * - eval, isNaN, isFinite, parseFloat, parseInt, ...
 */

/**
 * 빌트인 전역 프로퍼티
 * - 애플리케이션 전역에서 참조할 수 있는 프로퍼티
 * - Infinity, NaN, undefined
 */

/**
 * eval함수 자바스크립트 코드를 나타내는 문자열을 인자로 전달받는다. 표현식인지 자바스크립트 엔진에서 평가, 값을 생성함.
 * 표현식이 아닌 문이면 런타임에 실행함.
 *
 * eval은 보안에 취약하기 때문에, 사용을 금지, 자바스크립트 엔진에 최적화를 수행하지 않음.
 */
// 표현식
console.log(eval("1 + 2"));

// 문
eval("var x = 5;");

// console.log(x);

/**
 * isFinite(number): 빌트인 전역 함수로, 전달받은 인수가 무한대(Infinity)인지 평가함.
 * 유한수(finite) : true
 * 무한수(infinite) : false
 *
 * NaN은 number type이지만 Not a Number이므로 false가 반환됨.
 */
console.log(`isFinite(3 / 0) : ${isFinite(3 / 0)}`); // false (3 /0의 결과값은 Infinity이므로 유한대가 아니기 때문에 false)
console.log(`isFinite(-3 / 0) : ${isFinite(-3 / 0)}`); // false
console.log(`isFinite(3) : ${isFinite(3)}`); // true
console.log(`isFinite(-4) : ${isFinite(-4)}`); // true
console.log(`isFinite(true) : ${isFinite(true)}`); // true -> 1
console.log(`isFinite(false) : ${isFinite(false)}`); // true -> 0
console.log(`isFinite(NaN) : ${isFinite(NaN)}`); // false
console.log(`isFinite({}) : ${isFinite({})}`); // false

/**
 * isNaN: 빌트인 전역 함수로, 함수로 전달받은 값이 NaN이면 true, 아니면 false를 반환함.
 * 숫자가 아닌 문자열(숫자 미포함)일 경우도 true으로 반환함.
 */
console.log(`isNaN("asd" / 3) : ${isNaN("asd" / 3)}`); // true
console.log(`isNaN("10") : ${isNaN("10")}`);
console.log(`isNaN(true) : ${isNaN(true)}`);
console.log(`isNaN(10) : ${isNaN(10)}`);
console.log(`isNaN("12za") : ${isNaN("12za")}`);
console.log(`isNaN({}) : ${isNaN({})}`);

/**
 * parseFloat : 빌트인 전역 함수로 함수로 전달한 인수를 부동 소숫점 숫자로 변환하여 반환한다.
 * parseInt : 빌트인 전역 함수로 함수로 전달한 인자를 정수형으로 변환 (16진수(0x16), 8진수(0o10), 2진수(0b1010) 모두 가능), 두번째 인자로 변환할 지수를 입력함.(10진수는 생략)
 */

console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("10.00")); // 10  소숫점 이하 숫자가 모두 0이면 생략함.
console.log(parseFloat("24 30 45")); // 숫자로 구성된 문자열이 공백으로 구분되어 있으면 첫번째 문자열만 반환
console.log(parseFloat("24 years")); // 첫번째 문자열이 숫자일 경우 반환
console.log(parseFloat("Hi my 40")); // 공백으로 구분할 때 첫번째 문자열이 숫자가 아니므로 NaN반환
console.log(parseFloat("  60  ")); // 앞 뒤 공백은 무시됨.

/**
 * window 또는 global (전역객체)는 직접 프로퍼티를 추가하여 delete을 이용해 프로퍼티를 삭제가 가능하나,
 * var를 이용하여 전역 변수로 선언하여 전역 객체에 프로퍼티로 추가되면 delete를 이용하여 프로퍼티를 삭제 할 수 없음. (전역 변수는 삭제 불가)
 */

const uri = "https://www.example.com?name=이응모&job=programmer&teacher";
/**
 * 프로토콜 : https
 * 도메인(domain): example.com
 * url : URL + URN
 * URL : https://example.com
 * URN : www.example.com?name=이응모&job=programmer&teacher
 * queryString : name=이응모&job=programmer&teacher
 */
console.log(encodeURI(uri));

// 인코딩 : URL 문자들을 이스케이프 처리하는 것(시스템에서 해석할 수 있도록 영어, 기타 문자, 숫자를 제외한 나머지를 아스키 문자로 세팅함.)
// 이스케이프 : 네트워크를 통해 정보를 공유시 어떤 시스템에서도 읽을 수 있도록 아스키 문자 셋으로 변환, UTF-8 한글 표현의 경우 1문자당 3바이트,
// 영어 또는 숫자 일부 기호(-,_,.,!,~,*',(,)를 제외한 한국어, 기타 문자들은 url으로 포함할 수 없기 때문에 이스케이프 처리가 필요함.

// 이스케이프한 문자열을 디코딩함.
const decode = decodeURI(encodeURI(uri));
console.log(decode);

const encode = encodeURIComponent(uri);
console.log(encode);
