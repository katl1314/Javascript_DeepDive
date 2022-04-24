/**
 * Array.prototype.findIndex(callback(value, index, array), thisArg)
 * 배열을 순회하면서, 콜백함수를 호출하여 콜백함수의 반환값이 true인 첫번째 요소의 인덱스를 반환함.
 */

const users = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Choi" },
    { id: 4, name: "Park" },
];

// 배열 요소 순회하면서 콜백함수를 호출하고, 콜백함수의 반환값이 true인 첫번째 요소의 인덱스를 반환
// 배열내 프로퍼티의 id가 짝수인 첫번째 요소의 인덱스를 반환함.
console.log(users.findIndex(({ id }) => !(id % 2)));
