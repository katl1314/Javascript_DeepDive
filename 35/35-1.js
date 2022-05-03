// spread 문법을 이용하여 concat(배열 결합) 구현하기
const array1 = [1, 2];
const array2 = [3, 4];

console.log(array1.concat(array2)); // [1, 2, 3, 4]
console.log([...array1, ...array2]); // [1, 2, 3, 4]

const array3 = [1, 4];
const array4 = [2, 3];

// splice : 배열 중간에 요소를 추가, 삭제, 변경이 가능함.
array3.splice(1, 0, ...array4); // [1, 2, 3, 4]
console.log(array3);

const test = [1, 4];
Array.prototype.splice.apply(test, [1, 0].concat(array4));
console.log(test);

// spread문법을 이용한 배열 복사
// slice메서드를 이용하여 얕은 복사를 할 수 있으나, 스프레드 문법을 이용하여 더욱 간단하게 얕은 복사가 가능하다.

const copiedArray = [...array3];
copiedArray[0] = 10;
console.log(copiedArray, array3);

const copiedArray2 = test; // 스프레드 문법 사용하지 않고 다음과 같이 사용시 원본 배열이 변경됨.
copiedArray2[0] = 10;
console.log(copiedArray2, test);

console.log(...[1, 2]); // 1 2