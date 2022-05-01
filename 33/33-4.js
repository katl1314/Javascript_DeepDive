/**
 * 자바스크립트의 심볼을 가지고 프로퍼티 키로 사용해보자.
 * 객체 리터럴 사용하여 프로퍼티를 생성할 때 key와 value를 한쌍으로 표시함.
 * key는 공백문자열을 포함한 문자열이 올수 있으나, 심볼도 추가가 가능함.
 * 다만 심볼은 대괄호([])로 감싸야 함.
 *
 * const obj = {
 *     [Symbol("a")] : 1
 * }
 */

const mySymbol1 = Symbol.for("a"); // 전역 심볼 레지스트리에 키 a에 매핑된 심볼값이 없으면 새로 생성함.
const mySymbol2 = Symbol.for("b"); // 전역 심볼 레지스트리에 키 b에 매핑된 심볼값이 없으면 새로 생성함.

// 전역 심볼 레지스트에 저장된 심볼값의 키를 프로퍼티 값으로 바인딩
// 프로퍼티 키로 심볼을 사용하게 되면 대괄호로 감싸야 하며, 이는 객체의 고유의 key가 된다.
const myObj = {
    [mySymbol1]: Symbol.keyFor(mySymbol1),
    [mySymbol2]: Symbol.keyFor(mySymbol2),
};

console.log(Object.getOwnPropertyDescriptors(myObj));

for (let item in myObj) {
    console.log(">>", item); // 키가 심볼인 프로퍼티는 enumerable이 false이므로 for...in으로 열거시 표시하지 않음.
}

/**
 * 표준 빌트인 객체에 사용자 정의함수를 생성하는 것은 권장하지 않음. ==> Polyfill땜에 사용하긴 함.
 * 만약 새로운 버전에 동일한 이름의 함수가 생성되면 함수명이 중복되는 문제가 발생함.
 * 다만 함수명을 심볼으로 정의하게 되면 절대 중복될 수 없기 때문에 사용하긴 함.
 */

Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2, 3].sum());

// 빌트인 객체의 함수명을 심볼값으로 사용해보자.
Array.prototype[Symbol.for("sum")] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2, 3][Symbol.for("sum")]()); // 함수 호출

console.log(Symbol.keyFor(Symbol.for("sum"))); // sum
