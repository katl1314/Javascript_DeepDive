/**
 * for...in의 문제점은 상속받은 프로토타입 프로퍼티도 열거가 된다.
 * 그래서 별도로 Object.prototype.hasOwnProperty를 이용하여 프로토타입 프로퍼티를 제외해야한다.
 * 객체 고유의 프로퍼티를 열거하기 위해서는 Object.keys, Object.values, Object.entries를 이용하는 것을 권장한다.
 *
 * Object.key는 객체 고유 프로퍼티의 키를 이터러블한 객체(배열)로 변환한다.
 */
const myObj = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    a: "a1",
    b: "b1",
    __proto__: {
        c: true,
        d: {},
    },
};

console.log(Object.keys(myObj)); // [ '2', '3', '4', '5', 'a', 'b' ]

/**
 * Object.values는 객체 고유의 프로퍼티 값을 배열로 변환한다.
 */

console.log(Object.values(myObj)); // [ 2, 3, 4, 5, 'a1', 'b1' ]

/**
 * Object.entries는 객체 고유의 프로퍼티 키와 값을 한 쌍으로 배열을 구성한다.
 */
/* [
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["a", "a1"],
    ["b", "b1"],
]; */
console.log(Object.entries(myObj));
