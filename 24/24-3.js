const funcs = [];

for (let i = 0; i < 3; i++) {
    /* funcs[i] = (function (n) {
        return function () {
            return n;
        };
    })(i); */

    funcs[i] = function () {
        return i;
    };
}

for (let i = 0; i < 3; i++) {
    console.log(funcs[i]());
}
/*
    Array.from(iterable, mapfn:(v: any, k: number) => {}, thisArg)
    첫번째 파라미터 : 배열 같은 이터러블한 객체
    두번째 파라미터 : 콜백 함수 배열 요소를 순차적으로 호출함.
    세번째 파라미터 : 콜백함수의 this에 바인딩할 객체를 전달함.
*/

const numbers = Array.from(new Array(5), (v, k) => k * k);
console.log(numbers);
for (const i of numbers) {
    console.log(i);
}

/**
 * for문의 var키워드로 선언한 변수는 전역변수이자, 함수 레벨 스코프이다.
 * 전역 변수 i는 0, 1, 2 순차적으로 할당하며, funcs배열의 함수를 호출할 경우 전역변수 i를 호출하기 때문에 3이 됨.
 * 즉시 함수를 이용하여 for loop시 var키워드 변수를 계속 할당해야 한다.
 *
 * let와 const는 함수 레벨 스코프가 아닌 블록 레벨 스코프으로 loop돌때 마다 별도의 스코프를 생성하기 때문에 funcs배열내 함수를 호출할 경우 순서대로 반환된다.
 */
