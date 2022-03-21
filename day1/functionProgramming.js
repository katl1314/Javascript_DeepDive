/**
 * 함수형 프로그래밍(Functional Programming)
 * 함수형 프로그래밍은 객체지향 프로그래밍과 다름.
 * 지금까지는 객체지향 프로그래밍을 했었음. 즉 객체가 기본이 되는 프로그래밍.
 *
 * 1. 순수 함수(원본 데이터가 변하면 안됨)
 * 2. 부산물이 없어야함.
 * 3. 함수와 데이터 중점으로 생각함.
 *
 * 반드시 하나 이상의 인자를 받고, 받은 인자를 처리하여 반드시 결과물을 돌려주어야 합니다.
 * 인자를 제외한 다른 변수는 사용해서는 안된다.
 *
 */

const numArr = [1, 2, 3, 4, 5, 5, 3, 2];

// 1. 배열 중복 요소 제거
// eslint-disable-next-line no-unused-vars
console.log(
  numArr.filter((v, i, numbers) => {
    return i == numbers.indexOf(v);
  })
);

// 2. 배열 요소 합계
console.log(numArr.reduce((prev, curr) => prev + curr, 0));

console.log(numArr.map((d) => d ** d));

const mySet = new Set(numArr); // Array -> Set
console.log("Set -> Array", Array.from(mySet)); // Set -> Array

// 3. 배열 요소 중 짝수만
console.log(numArr.filter((v) => !(v % 2)));
