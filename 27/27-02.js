/**
 * 자바스크립트의 배열은 배열이 아니다.
 * 배열의 정의 : 여러 개의 값을 순차적으로 나열한 자료구조
 * 일반적인 배열은 동일한 데이터 크기를 가지며, 빈틈없이 연속적으로 이루어짐.
 */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            // 배열 요소와 target이 일치하는 경우 인덱스를 반환.
            return i;
        }
    }
    return -1; // 배열 요소 중 target이 없는 경우 -1을 반환.
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));

/**
 * 배열의 위치를 변경하기 위해서는 배열요소의 이동시켜야 하는데, 자바스크립트 배열은 그렇지 않다.
 * 배열 요소의 사이즈도 정해지지 않음. int numArr[10] = {1, 2, 3, 4, 5, 6, ...}
 * c언어나, 자바는 배열의 사이즈를 정해둠.
 * 
 * 자바스크립트의 배열은 흉내를 낸 것이다. ===> 실제로는 배열은 아님.
 * 자바스크립트 배열은 인덱스를 나타내는 문자열으로 프로퍼티 키를 가짐.
 * length 프로퍼티를 갖고 있음.
 * 자바스크립트 배열의 값은 자바스크립트 모든 값이 들어올 수 있음
 */
/*
{ 
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false } 
}
*/
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));