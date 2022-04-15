/**
 * 배열 : 여러 개의 값을 순서대로 나열한 자료구조입니다.
 * 배열 리터럴 방식으로 배열을 만들어보자.
 */

const fruits = ["apple", "banana", "orange"]; // 배열 리터럴

// 배열 요소(배열을 구성하는 값)를 접근하기 위해서 인덱스를 사용해야함.
// 0이상의 인덱스를 가진다.
// 대괄호와 인덱스를 입력하여 배열 요소를 참조할 수 있음.
console.log('fruits[0]',fruits[0]); // 0번째 요소 'apple'
console.log('fruits[1]',fruits[1]); // 1번째 요소 'banana'
console.log('fruits[2]',fruits[2]); // 2번째 요소 'orange'

// 배열은 length프로퍼티를 이용하여 배열 길이를 확인 할 수 있음.
console.log('배열의 길이', fruits.length);

// for문을 이용하여 배열 요소를 순회한다.
for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits[${i}] : ${fruits[i]}`);
}

// 자바스크립트에는 배열 타입이 없으며, 반드시 객체 타입임.
console.log('typeof fruits', typeof fruits); // 'object'
console.log(Array.isArray(fruits)); // Array.isArray메서드를 이용하여 함수 인자가 배열인지 검사한다.
console.log(fruits.constructor === Array);
console.log(Object.getPrototypeOf(fruits) === Array.prototype);