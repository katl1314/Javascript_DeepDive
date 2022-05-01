/**
 * 자바스크립트에는 숫자형, 불리언, 문자열, null, undefined, 객체(Object, Date, RegExp, ...), 그리고 ES6에 추가된 Symbol 총 7가지가 있으며
 * 이번에는 Symbol에 대해서 알아보고자 한다.
 *
 * Symbol은 유일하고 불변성을 가진 값이다. (불변성 => 값 변경 불가능), 즉 중복되지 않은 고유한 값임.
 *
 * Symbol은 중복될 수 없는 프로퍼티 키에 사용됨.
 *
 * 프로퍼티 키는 빈문자열을 포함한 모든 문자열과 심볼값이다.
 */

// Symbol생성 방법은 생성자 함수 호출 방식으로 하면 안됨
// Symbol(description);
const mySymbol = Symbol("이것은 심볼");
console.log(mySymbol, typeof mySymbol);

const obj = {
    [mySymbol]: 10,
};

console.log(obj);

console.log(obj[mySymbol]); // 10
// Symbol은 유일하고 불변성을 갖기 때문에 중복될 수 없음.
// Symbol함수의 인자는 해당 심볼에 대한 description으로 어떠한 영향은 주지 않음.(주석 : 프로그램 동작에 아무런 영향을 주지 않음.)
console.log(mySymbol == Symbol("이것은 심볼"));

// description 출력
// 원시값을 참조할 경우 래퍼 객체를 생성하여 호출한다.
console.log(mySymbol.description); // 이것은 심볼

console.log(mySymbol.toString()); // Symbol(이것은 심볼)

// !! 또는 Boolean함수를 통해 불리언 형변환은 가능함.
console.log(!!mySymbol); // 불리언 타입으로 형 변환
console.log(Boolean(mySymbol)); // 불리언 타입으로 형 변환

// Symbol타입은 숫자와 문자열로 형변환 불가능
// console.log(+mySymbol); // TypeError: Cannot convert a Symbol value to a number
