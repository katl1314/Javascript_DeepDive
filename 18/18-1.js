/**
 * 18장. 함수와 일급 객체
 * - 일급 객체 : 무명의 리터럴 생성 가능,
 *  변수나 자료구조(객체, 배열)에 저장 가능
 *  함수의 매개변수로 전달 가능
 *  함수의 반환값으로 가능
 *
 *
 * 함수는 일급객체
 * 함수를 객체와 동일하게 사용할 수 있음. 객체는 값이므로, 함수도 값으로 취급할 수 있으니...
 */

// 1. 함수는 무명의 리터럴으로 생성 가능(일급객체)
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 2.함수는 객체(자료구조), 변수에 저장 가능(일급객체)
const obj = {
    increase,
    decrease,
};

// 3. 함수의 매개변수로 함수를 전달 가능(일급객체)
function makeCounter(callback) {
    let counter = 0;
    // 4. 함수를 반환값으로 사용 가능(일급객체)
    return function () {
        counter = callback(counter);
        return counter;
    };
}

let counter = makeCounter(obj.increase);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

counter = makeCounter(obj.decrease);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log(Object.getOwnPropertyDescriptors(makeCounter));
