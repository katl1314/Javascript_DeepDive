/**
 * Array.prototype.join(separator): 배열 요소와 구분자를 각각연결하여 새로운 문자열을 만든다.
 * 함수의 인자가 없을 경우 기본 구분자는 콤마(,)이다.
 * 원본 배열의 훼손은 없음.
 */

const test = ["Hello", "World"];
console.log(test.join()); // Hello,World
// 공백 문자를 구분자로 설정함
console.log(test.join(" "), test); // Hello World

/**
 * Array.prototype.reverse(): 배열 요소의 순서를 변경함. 
 * 원본 배열의 훼손이 있음.
 */

const numbers = [1, 11, 2, 22, 3, 5];
console.log(numbers.reverse(), numbers);

/**
 * Array.prototype.fill(value, start?, end?): 배열내 모든 요소를 특정 값으로 가득 채운다.
 * 만약 start, end값이 있을 경우 해당 범위에 한에 요소를 채운다.
 * 만약 start, end값이 없을 경우 모든 요소를 변경한다.
 * => 원본 배열이 변경됨(pop, push, unshift, shift, splice, reverse, fill, ...)
 * => 원본 배열 미 변경(indexOf, concat, slice, join, ...)
 */

numbers.fill(1);
console.log(numbers);

// 시작점 1에서 3까지 10으로 채운다.
numbers.fill(10, 1, 4); // value, start, end
console.log(numbers)

// 시작점 4이후에는 모든 요소를 6으로 채운다.
numbers.fill(6, 4);
console.log(numbers);


const temp2 = [...numbers, ...test];
console.log(temp2);

function sum(...iter) { // Rest문법은 함수 매개변수에 사용한다.
    console.log(Array.isArray(iter));
    return iter.reduce((p, v) => p + v, 0);
}

console.log(sum(1, 2, 3, 4, 5));
