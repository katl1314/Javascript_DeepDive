export const myObj = Object.create(Object.prototype, {
    a: {
        value: "a1",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    b: {
        value: "b1",
        writable: false,
        enumerable: true,
        configurable: true,
    },
    c: {
        value: "c1",
        writable: true,
        enumerable: true,
        configurable: false,
    },
    d: {
        value: "d1",
        writable: true, // false시 데이터 프로퍼티의 값 변경이 불가능.
        enumerable: false,
        configurable: false, // false시 데이터 프로퍼티 변경 불가능.
    },
    e: {
        value: "e1",
    },
});
