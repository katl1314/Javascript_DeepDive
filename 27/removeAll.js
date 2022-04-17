// 배열 내 전달한 요소내 두번째 인자값 모두 삭제한다.
// Array.prototype.filter(callback, thisArgs?)를 이용하여 배열을 순회하면서 조건식을 설정한다.
const arr = [1, 2, 3, 1, 2];

function removeAll(arr, value) {
    return arr.filter((v) => v != value); // v와 value가 동일한 경우를 제외하고 배열을 생성한다.
}

console.log(removeAll(arr, 2));

const arr2 = [1, 2, 3];
const shallowCopied = arr2.slice(); // Array.prototype.slice함수를 사용하여 인자가 없을 경우 얕은 복사됨.
console.log(shallowCopied, arr2);

shallowCopied[1] = 10;
console.log(shallowCopied, arr2);

const arr3 = arr2; // 얕은 복사 발생하지 않음. 배열 값 조작(추가, 변경, 삭제)시 원본 배열도 변경된다.
arr3[arr3.length] = 10;
console.log(arr3, arr2);
