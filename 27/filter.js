/**
 * Array.prototype.filter(callback:(value, index, array), thisArg?)
 * 배열 요소를 순회하면서 콜백함수의 반환값이 true인 요소를 가지고 새로운 배열로 만든다.
 * 원본 배열은 훼손되지 않음.
 * 앞서 설명한 Array.prototype.forEach, map처럼 두번째 함수 인자로 this를 바인딩할 값을 전달 할 수 있음.
 */

const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter((v, i, array) => {
    return v % 2; // 홀수인 요소를 가지고 새로운 배열로 만든다.
});
console.log(oddNumbers, numbers);

class User {
    constructor() {
        this.users = [
            { id: 1, name: "Lee" },
            { id: 2, name: "Choi" },
        ];
    }

    findById(id) {
        return this.users.filter((v) => v.id === id);
    }
    remove(id) {
        this.users = this.users.filter((v) => v.id !== id);
    }
}

/* User.prototype = {
    constructor: User,
    findById(id) {
        return this.users.filter((v) => v.id === id);
    },
    remove(id) {
        this.users = this.users.filter((v) => v.id !== id);
    },
}; */

const users = new User();
let user = users.findById(1);

console.log(user); // [ { id: 1, name: 'Lee' } ]

users.remove(1); // id가 1인 요소를 삭제
console.log(users.findById(1));

const User2 = (function () {
    function User2() {
        this.users = [
            { id: 1, name: "Lee" },
            { id: 2, name: "Choi" },
        ];
    }
    // 생성자 함수에서 ES6메서드를 동적으로 추가하기 위해서는 생성자함수 프로토타입 객체에 다음과 같이 정의한다.
    User2.prototype = {
        constructor: User2,
        findById(id) {
            return this.users.filter((v) => v.id === id);
        },
        remove(id) {
            this.users = this.users.filter((v) => v.id !== id);
        },
    };

    return User2;
})();

const users2 = new User2();
let user2 = users2.findById(1);

console.log(user2); // [ { id: 1, name: 'Lee' } ]

users2.remove(1); // id가 1인 요소를 삭제
console.log(users2.findById(1));
