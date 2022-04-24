const obj = Object.create(
    {
        name: "choi",
    },
    {
        x: {
            value: 10,
            writable: true,
            enumerable: true,
            configurable: true,
        },
        y: {
            value: 20,
            writable: true,
            enumerable: true,
            configurable: true,
        },
    }
);
console.log(Object.getPrototypeOf(obj), obj); // Object.create메서드로 생성한 객체는 함수의 인자로 프로토타입 객체를 전달하였다.
console.log(obj.hasOwnProperty("name")); // 객체 obj의 프로토타입 체인에 Object.prototype이 있으므로 Object.prototype메서드를 사용한다.
// 다만 Object.prototype.hasOwnProperty는 객체의 프로퍼티 여부를 평가하기 때문에 프로토타입의 프로퍼티는 평가하지 않는다.

console.log("name" in obj); // false

// 객체 내 모든 프로퍼티 열거(프로토타입의 프로퍼티도 포함.)
for (const key in obj) {
    console.log(key); // for...in의 경우 프로토타입의 프로퍼티도 열거함.
}
