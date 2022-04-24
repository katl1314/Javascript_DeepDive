import { myObj } from "./object.js";
/**
 * 프로퍼티 어트리뷰트 
 *  - 데이터 프로퍼티 : 프로퍼티 값을 의미
 *     프로퍼티 어트리뷰트
 *     - value : 프로퍼티 값
 *     - enumerable : 프로퍼티 열거 가능 여부
 *     - writable : 프로퍼티 값 변경 가능 여부
 *     - configurable : 프로퍼티 재정의 가능 여부(false시 프로퍼티 삭제 및 프로퍼티 어트리뷰트 변경 불가능)
 * 
 *  - 접근자 프로퍼티 : 프로퍼티 값을 읽거나, 조작할 수 있음.
 *  a: {
        value: "a",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    b: {
        value: "b",
        writable: false,
        enumerable: true,
        configurable: true,
    },
    c: {
        value: "c",
        writable: true,
        enumerable: true,
        configurable: false,
    },
    d: {
        value: "d",
        writable: true, // true이면, 프로퍼티 값 변경 가능.
        enumerable: false,
        configurable: false, // false시 데이터 프로퍼티 재정의 불가(프로퍼티 삭제와 프로퍼티 어트리뷰트 값 변경 불가.)
    },
    e: {
        value: "e",
    },
 */
// delete myObj["c"]; // configurable이 false이면 절대 프로퍼티가 삭제가 안됨.
// myObj.b = "bb"; // writable이 false이면 데이터 프로퍼티 변경 불가능.
myObj.c = "cc"; // configurable이 false이어도, 데이터 프로퍼티 변경은 가능한듯.

console.log(myObj); // 프로퍼티 어트리뷰트 enumerable이 false인 데이터 프로퍼티는 제외.

/**
 * in 연산자
 * - 객체 내 프로퍼티 존재 여부를 확인함.
 * '프로퍼티키' in 객체
 * enumerable이 false이든 아니든 무시됨.
 */
console.log("a" in myObj);
console.log("b" in myObj);
console.log("c" in myObj);
console.log("d" in myObj);
console.log("e" in myObj);

/**
 * in 연산자는 프로토타입 체인상의 프로퍼티도 검색이 가능함.
 */

console.log("length" in myObj);
console.log("hasOwnProperty" in myObj);
