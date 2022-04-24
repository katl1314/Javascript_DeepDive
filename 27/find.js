const users = [
    { id: 1, name: "Kim" },
    { id: 2, name: "Choi" },
    { id: 3, name: "Park" },
    { id: 4, name: "Lee" },
];

// Array.prototype.find(callback, thisArg?)
// 배열 요소를 순회하며, 콜백함수의 반환갑이 true인 요소가 있으면 즉시 반환함.
console.log(users.find(({ id }) => !(id % 2))); // 배열을 순회하며, 프로퍼티의 id가 짝수인 요소 중 가장가까운 요소를 반환한다.

// 콜백함수 반환값이 모두 false시 최종적으로 undefined를 반환한다.
console.log(users.find(({ id }) => id > 5));
