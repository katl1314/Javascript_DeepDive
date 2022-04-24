/**
 * Array.prototype.reduce(callback(previousValue, currentValue, currentIndex, array), initialValue);
 * 1. 배열 요소를 순회하면서 첫번째 인수로 전달받은 콜백함수를 반복 호출한다.
 * 2. 콜백함수의 반환값을 콜백함수의 첫번째 인자(acc)로 전달, cur는 배열 요소를 순회하면서 전달함.
 * 3. 처음 콜백 함수 호출시 acc는 initialValue를 가리킴.
 *
 * 콜백함수를 호출하면서 하나의 결과값을 반환하는 함수임.
 *
 * 원본 배열은 변경되지 않음.
 */

// 배열 요소를 모두 합하여 반환한다.
const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce(
    // eslint-disable-next-line no-unused-vars
    (previousValue, currentValue, currentIndex, array) =>
        previousValue + currentValue,
    0
);

console.log(sum);
// 평균값을 구해보자.
const avg = numbers.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        return currentIndex < array.length - 1
            ? previousValue + currentValue
            : previousValue / array.length;
    },
    0
);
console.log(avg);

// 최대값을 구해보자 (Math.max를 이용하면 더 편함.)
const max = [1, 3, 2, 5, 4, 1].reduce((previousValue, currentValue) => {
    return previousValue >= currentValue ? previousValue : currentValue;
}, 0);
console.log(max, Math.max(...numbers)); //  spread문법
// console.log([1, 1, 1].every((v) => v !== 0));

const fruits = ["banana", "apple", "orange", "orange", "apple"];

const count = fruits.reduce((previousValue, currentValue) => {
    previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
    return previousValue;
}, {});

console.log(count);