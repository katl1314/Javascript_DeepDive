/**
 * flat함수
 * 배열 내 중첩배열이 있을 때 평탄화하는 함수.
 */
const numArr = [1, 2, [3, 4, [5, 6], [7, 8]]];

function flat(numArr) {
  let numbers = [];
  for (let d of numArr) {
    if (typeof d === "object") {
      numbers = numbers.concat(flat(d));
    } else {
      numbers = numbers.concat(d);
    }
  }
  return numbers;
}

console.log(flat(numArr));
