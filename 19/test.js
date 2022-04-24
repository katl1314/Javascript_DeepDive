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

for (const key in myObj) {
    // 프로토타입 프로퍼티 포함한 객체를 순회함.
    // eslint-disable-next-line no-prototype-builtins
    if (myObj.hasOwnProperty(key)) {
        // 객체 내 프로토타입 프로퍼티를 제외한 프로퍼티를 출력한다.
        console.log(key, myObj[key]);
    }
}

/**
 * 객체와 이터러블한 객체는 객체이므로 for...in을 이용하여 순회가 가능함.
 * 다만 배열은 Array.prototype.forEach를 이용하여 순회하면 좋을듯, for...of도 가능할듯.
 */
