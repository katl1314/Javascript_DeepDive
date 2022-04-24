/**
 * Array.prototype.forEach(callback:(value, index, array) => {})
 * 배열 요소를 순회하는 고차함수.
 * 기존의 반복문의 복잡성을 해소하며, 변수 사용을 억제함. => 함수형 프로그래밍을 추구함.
 *
 * 쉽게 생각하면 기존의 for문을 대체한다고 보면 될듯.
 * 배열 요소를 순회하면서 콜백을 호출한다.
 *
 * 기본적으로는 원본 배열을 변경하지는 않는다. 다만 콜백 함수의 3번째 인자를 이용하여 Array.prototype.push와 같은 원본 배열 변경하는 메서드 사용시
 * 원본 배열이 변경됨.
 *
 * 반환값은 없음(undefined)
 *
 * forEach는 for문, while과 같은 반복문에서 사용하는 break와 continue를 사용할 수 없음.(무조건 모든 배열 요소를 순회한다.)
 */

const numbers = [1, 2, 3];
const pows = [];
for (let i = 0; i < numbers.length; i++) {
    console.log(`i = ${i}, numbers[${i}] = ${numbers[i]}`);
    // pows[i] = numbers[i];
    pows.push(numbers[i] ** 2); // n^2 후 pows배열에 추가함.
}

console.log(numbers, pows);

const pows2 = [];

numbers.forEach((v) => pows2.push(v ** 2));
console.log(numbers, pows2);

/**
 * Array.prototype.forEach의 콜백함수 3번째 인자를 이용하여 원본 배열이 변경되는 경우
 */
const numbers2 = [1, 2, 3];

numbers2.forEach((value, index, array) => {
    array.push(value + array[2]);
});

console.log(numbers2); // 콜백 함수에서 원본 배열을 참조하여 변경시 원본 배열이 바뀐다.

// JSON.stringify(obj): 자바스크립트 객체를 JSON형태의 문자열로 변환함.
