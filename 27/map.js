/**
 * 2. Array.prototype.map(callback, thisArg?)
 * 배열 요소를 순회하면서 콜백함수의 반환값 가지고 새로운 배열을 만든다.
 * 이전에 설명한 Array.prototype.forEach와 마찬가지로 두개의 함수 인자를 전달받는다.
 *  1. callback : 배열 요소를 순회하면서, 콜백함수를 호출한다. 콜백함수의 인자는 배열 요소, 인덱스, 배열원본
 *  2. thisArg : 콜백함수내 this를 변경시 전달할 인자임.
 *
 * 원본 배열은 훼손되지 않음(Array.prototype.forEach와 마찬가지.)
 */

const numbers = [1, 2, 3];

const test = numbers.map((v, i, array) => v ** 2); // 콜백함수 반환값으로 원본 배열 요소에 2를 제곱 후 새로운 배열에 추가한다.
console.log(numbers, test); // 원본 배열은 훼손되지않는다.

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (v) {
            return `${this.prefix}${v}`; // 1. 배열 요소 순회, 2.콜백함수 호출 및 반환 3. 콜백 함수 반환값으로 새로운 배열을 만듦.
        }, this);
    }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));
