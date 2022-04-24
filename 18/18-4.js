/**
 * length 프로퍼티
 * - 함수 객체의 프로퍼티으로, 함수의 매개변수 개수를 가리킴
 */

function sum(a, b, c, d) {
    console.log(a, b, c, d);
    console.log(arguments); // 함수 호출시 전달한 인수를 담고있는 유사 배열 객체(이터러블한 객체)
    // 함수 내부에서만 사용 가능. ES3 이후 비표준
    // REST파라미터를 이용하자.
    // return numbers.reduce((prev, current) => prev + current, 0);
}

console.log(Object.getOwnPropertyDescriptor(sum, "length")); // 함수 객체의 length 프로퍼티
