const obj = {};

Object.defineProperties(obj, {
    lastName: {
        value: "Lee",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    firstName: {
        value: "Ungmo",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    age: {
        value: 26,
    },
    fullName: {
        set fullName(fullName) {
            [this.firstName, this.lastName] = fullName.split(" ");
        },
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        enumerable: true, // 객체 프로퍼티 어트리뷰트 열거 가능 여부
        configurable: true, // 객체 프로퍼티 어트리뷰트 값 및 writable 변경 여부
    },
});

console.log(obj, Object.keys(obj));
