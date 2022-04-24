const flatArr = [1, [2, 3], [3, 4, 5]];
console.log(flatArr.flat(1), flatArr); // 배열을 평탄화(원본 배열은 변경되지 않는다.)

/**
 * Array.prototype.flat(depth)
 * ES10(2019)에서 지원하는 함수임.
 * 함수로 전달한 depth만큼 재귀적으로 배열을 평탄화한다.
 * 원본 배열은 변경되지 않는다.
 * (default값은 1이며 모든 depth한에 평탄화 하기 위해서는 Infinity를 인자로 전달한다.)
 */

const deepArray = [1, [2, 3, [4, 5, [6, 7, [8, 9, [10, [11, [12], [13, 14, [15]]]]]]]]];
console.log(deepArray.flat()); // 1 depth까지만 평탄화
console.log(deepArray.flat(1)); // 1 depth까지만 평탄화
console.log(deepArray.flat(2)); // 2 depth까지만 평탄화
console.log(deepArray.flat(Infinity)); // 모든 depth 평탄화