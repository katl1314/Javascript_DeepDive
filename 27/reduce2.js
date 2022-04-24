const values = [1, [2, 3], 4, [5, 6]];
console.log(values.flat(2));
const result = values.reduce((previousValue, currentValue) => {
    previousValue = previousValue.concat(currentValue);
    return previousValue;
}, []);

console.log(result);

/**
 * 중첩 배열의 평탄화는 ES2019이후 제공하는 Array.prototype.flat메서드를 이용하여 간편하게 구현 가능함.
 */
