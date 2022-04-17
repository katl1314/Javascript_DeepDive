/**
 * 배열 생성 방법
 * 1. 배열 리터럴 방식 : 여러값을 연속적으로 순차적으로 나열 후 대괄호로 감싼 형태
 *   객체 리터럴의 경우 프로퍼티와 메서드를 중괄호로 감싼 형태
 *
 *   ex) var arr = [1, 2, 3];
 *
 * 2. 생성자 함수를 이용
 * // Array생성자 함수로 호출하여 배열을 생성한다. 함수 인자로 배열 요소 개수를 미리 설정한다.
 *   1. 함수 인자가 1개인 경우 배열 요소 개수를 정의함.
 *   ex) new Array(5) => [empty * 5]
 *   2. 함수 인자가 2개 이상인 경우, 각 인자라 배열 요소를 의미함.
 *   ex) new Array(1, 2) => [1, 2]
 */

var myArr = new Array(3); // length프로퍼티 = 3, 배열 요소는 실제로 존재하지 않음.
// Array생성자 함수로 선언시 배열의 요소는 정의한 개수만큼 빈 요소로 구성되어있음.
// 빈 요소(empty)의 경우 length에는 아무런 영향이 없으나, 실제로 데이터는 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(myArr));

var myArr2 = new Array(1, 2, 3, 4, 5); // 배열 내 요소가 5개 존재하고, length프로퍼티 값도 5임.
console.log(Object.getOwnPropertyDescriptors(myArr2));

// Array.of(...iter) : 함수의 인자로 구성된 배열을 생성한다.

console.log(Array.of(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(Array.of("smart", "gate", "choi")); // [ "smart", "gate", "choi" ]
console.log(Array.of(true)); // [ true ]

// Array.from: iterable한 객체(유사 배열 객체)를 배열로 변환하여 반환한다.
var iterable = { 0: "choi", 1: "min", 2: "hyeok", length: 3 };

console.log(Array.from(iterable)); // 유사 배열 객체를 배열로 변환하엿다.([ 'choi', 'min', 'hyeok' ])

// 만먁 함수의 인자로 문자열을 전달하면 어찌되는가?
console.log(Array.from("hello")); // 문자열도 이터러블한 객체이므로 [ 'h', 'e', 'l', 'l', 'o' ]과 같이 알파벳이 쪼개짐.
console.log(Object.getOwnPropertyDescriptors("HELLO")); // 문자열은 iterable한 객체임

// Array.from의 두번째 콜백함수를 통해 배열 요소를 채울 수 있음.
// 첫번째 파라미터에 전달한 객체 중 length프로퍼티에 따라 콜백함수를 처리함.
// 만약 첫번째 파라미터에 length프로퍼티가 정의되어 있고, 콜백함수를 정의하지 않은 경우 해당 length만큼 undefined으로 배열을 채운다.
console.log(Array.from({ length: 3 }));
console.log(Array.from({ length: 3 }, (value, index) => index));

// 유사배열 객체 : 실제로는 객체이지만, 배열처럼 사용할 수 있음.
// length프로퍼티를 갖는다
// for문을 이용하여 객체를 순회할 수 있음.
// 자바스크립트의 이터러블한 객체는 : Array, String, Map, Set, DOM컬렉션, arguments(유사 배열 객체)등이 있음.
