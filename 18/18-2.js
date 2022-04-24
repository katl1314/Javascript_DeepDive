function square(number) {
    return number ** 2;
}

console.log(Object.getOwnPropertyDescriptors(square));
console.log(Object.getOwnPropertyDescriptors(Object.prototype));

/**
 * argument, caller, name, prototype, length
 * 해당 프로퍼티는 함수 객체의 프로퍼티이다.
 * __proto__는 Object.prototype의 프로퍼티 이므로 함수 객체에서는 사용할 수 없다.
 */
