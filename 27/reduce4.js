/**
 * 배열 요소 중복제거는 Array.prototype.reduce로 처리가 가능하나
 * Array.prototype.filter와 Set를 이용하여 중복을 제거할 수 있음.
 */
const numbers = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const exceptionduplicate = numbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(exceptionduplicate);

const exceptionduplicate2 = Array.from(new Set(numbers));
console.log(exceptionduplicate2);

const tempNumbers = numbers.reduce((prev, curr, index, array) => {
    prev = array.indexOf(curr) === index ? [...prev, curr] : [...prev];
    return prev;
}, []);

console.log(tempNumbers);

console.log([...new Set(numbers)]); // new Set(iterable)
