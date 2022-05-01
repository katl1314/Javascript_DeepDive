/**
 * 심벌과 상수
 */

const Direction = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
};

const myDirection = Direction.UP;
console.log(myDirection);

if (myDirection === Direction.UP) {
    console.log("You are going up");
}

// 객체를 상수로 정의할지라도, 프로퍼티 값 변경은 가능하다.

Direction["UP"] = 4; // 프로퍼티 UP에 4라는 값을 바인딩하면, RIGHT에 바인딩된 값이랑 같아짐
console.log(myDirection, Direction.UP);
console.log(Direction.RIGHT, Direction.UP);

// 객체의 프로퍼티 값을 심볼을 사용하여 프로퍼티 값이 중복되지 않도록 한다.
const Direction2 = {
    UP: Symbol("UP"),
    DOWN: Symbol("DOWN"),
    LEFT: Symbol("LEFT"),
    RIGHT: Symbol("RIGHT"),
};

const myDirection2 = Direction2.UP;
if (myDirection2 === Direction2.UP) {
    console.log("You are going Up");
}

// 타입스크립트에서는 enum(열거형)을 지원함.
/**
 * enum Direction {
 *  A1, B1, C1, D1
 * }
 */

// 객체 동결 : 확장 및 프로퍼티 삭제, 재정의 싹다 불가
const freezeObj = Object.freeze(Direction2);
freezeObj["RIGHT"] = Symbol("UTURN"); // Direction2은 객체 동결되었기 때문에 프로퍼티 추가 불가
delete freezeObj["RIGHT"]; // 프로퍼티 삭제도 불가.
console.log(Object.getOwnPropertyDescriptor(Direction2, "RIGHT"));

const preventExtensionsObj = Object.seal({ a: 1, b: 2 }); // 객체 확장 금지 (객체 추가만 불가, 재정의 및 삭제는 가능함.)
preventExtensionsObj["c"] = "go"; // 프로퍼치 추가는 불가
preventExtensionsObj["b"] = "go"; // 프로퍼치 변경 가능
delete preventExtensionsObj["a"]; // 프로퍼티 삭제는 가능함.
console.log(Object.getOwnPropertyDescriptors(preventExtensionsObj));
