/**
 * 배열 디스트럭처링(구조 분해) : 배열 요소를 분해하여 각 변수에 개별적으로 할당함.
 * 배열 요소에서 필요한 부분만 추출할 때 사용함.
 */

// ES5
const arr = [1, 2, 3];

const one = arr[0];
const two = arr[1];
const three = arr[2];

console.log(one, two, three); // 1 2 3

// ES6 배열 디스트럭처링
const [one1, two1, three1] = arr; // 배열 요소를 분해하여 각 변수 one1, two1, three1에 각각 바인딩합니다.

console.log(one1, two1, three1); // 1 2 3

const [test1, , test3] = arr; // 이렇게 사용하여 필요한 요소만 받을 수도 있다.
console.log(test1, test3); // 1 3

// 이터러블 객체를 디스트럭처링시 좌변에도 이터러블 객체이어야함.
// const [prop1, prop2] = { prop1: 10, prop2: 20 };

// 좌변의 변수 개수와 우변의 배열 개수가 동일하지 않아도 됨.
let [a, b] = [1, 2, 3];
console.log(a, b); // 1 2

let [c, d] = [1]; // 우변의 배열은 값이 1개가 있으므로, 좌변의 첫번째 변수에 저장하고, 두번째 변수에는 undefined으로 초기화
console.log(c, d);
