/**
 * Array.prototype.splice(start, deleteCount?, ...addValue?)
 * 원본 배열의 중간에 요소를 추가하거나, 삭제할 때 사용하는 메서드입니다.
 * Array.prototype.push, unshift, pop, shift처럼 원본 배열을 훼손하는 메서드입니다.
 *
 * 첫번째 인자는 필수이며, 두번째 인자는 사용자 선택사항임.
 *
 * splice메서드 사용시 삭제 또는 추가한 요소를 담긴 배열을 반환함.
 */

const numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 3); // 시작점 0에서 3개의 요소를 삭제함. ==> 원본 배열에서 1, 2, 3을 삭제함.
console.log("numbers", numbers); // [4, 5]

const numbers2 = [...numbers, 6, 7, 8];
console.log("numbers2", numbers2); // [4, 5, 6, 7, 8]

numbers2.splice(3, 1, "javascript", "es6"); // 시작점 3을 기준으로 1개 요소(7)를 삭제하고, 그 자리에 "javascript", "es6"을 배열 요소로 추가함.
console.log("numbers2", numbers2); // [ 4, 5, 6, 'javascript', 'es6', 8 ]

const fruits = ["apple", "grape", "banana", "orange"];
console.log(fruits.splice(1, 0, "berry"));
console.log(fruits); // apple과 grape사이에 berry를 추가한다.

// berry를 삭제한다.
console.log(fruits.splice(1, 1));
console.log(fruits);

// banana를 삭제하고 그 자리에 mango, peach를 추가해보자.
fruits.splice(2, 1, "mango", "pearch");
console.log(fruits);
