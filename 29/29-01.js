/**
 * Math : 자바스크립트 빌트인 객체로, 수학적인 상수와 함수를 위한 프로퍼티와 메서드가 제공됨.
 * => 다만 이전에 배운 Number 빌트인 객체처럼 생성자 함수가 아니므로, 정적 메서드와 정적 프로퍼티만 제공함.
 * 정적 프로퍼티
 */

console.log(Math.PI); // 원주율

// 정적 메서드
console.log(Math.abs(-1)); // 절대값 (음수 든 양수든 무조건 양수로 반환함.)

console.log(Math.round(1.6)); // 반올림

// 올림 Math.ceil(x)
console.log(Math.ceil(1.2)); // 올림 후 반환
// 내림 Math.floor(x)
console.log(Math.floor(1.8)); // 함수로 전달한 값을 내림후 반환

// 제곱근을 반환 Math.sqrt(x)
console.log(Math.sqrt(5)); // 인자로 전달한 값의 제곱근을 반환

// 랜덤값 반환 Math.random() (0 ~ 1사이의 값이 반환됨)
console.log(Math.floor(Math.random() * 10) + 1); // 이렇게 사용하여 1부터 10까지 반환하도록 설정이 가능하다.

// 지수 연산 메서드 Math.pow(x, y) => x^y
console.log(Math.pow(2, 3)); // 8
// ES7에 도입한 지수 연산자 **를 이용하면 간편하게 사용한다. x ** y;
console.log(2 ** 3); // Math.pow(2, 3)와 같은 결과를 가진다.

// 전달받은 함수 인자들 중 최대값을 반환함.
// 배열로 전다시 함수의 인자는 반드시 스프레드 문법을 이용한다.
// 진짜 배열로 전달하고자 할 경우 apply함수 호출을 이용하여 배열을 넘길 수 있음.
console.log(Math.max(...[1, 2, 4, 3, 2, 5]));
// 전달받은 함수 인자들 중 최솟값을 반환함.
console.log(Math.min(...[1, 2, 4, 3, 2, 5]));
console.log(Math.max.apply(this, [1, 2, 4, 2, 3])); // apply(thisArg, argument:[])를 이용하여 전달해도 상관없음.

console.log(Math.max()); // Math.max함수에 인자가 없으면 -Infinity를 반환한다.
console.log(Math.min()); // Math.min함수에 인자가 없으면 Infinity를 반환한다.
console.log(Math.min.call(null, ...[1, 2, 3, 4, 5]));
console.log(Math.max.call(null, 1, 2, 3, 4, 5));
/**
 * apply, call: 함수의 간접 호출로 함수 내 바인딩된 this를 바꿀때 사용됨.
 * 다만 두 함수의 차이는 매개변수의 전달이 다름
 * call의 경우 두번째 인자로 매개변수를 전달하는데, 값들을 일일히 나열(스프레드 문법 이용)해야함.
 * apply의 경우 두번째 인자로 매개변수를 전달하는 건 똑같으나, 배열 통째로 전달함.
 */

function add(a, b, c) {
    console.log(this, a, b, c);
}

// add(...[1, 2, 3]);
add.call({}, ...[1, 2, 3]);
add.apply({}, [1, 2, 3]);
