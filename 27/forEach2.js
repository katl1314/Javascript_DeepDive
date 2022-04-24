/**
 * ES6메서드 안에, 고차 함수를 사용하여 화살표 함수가 아닌 콜백 함수 정의 시 this는 undefined임.
 * 만약 콜백 함수의 this를 바인딩하기 위해서는 고차함수의 마지막 요소로 this를 전달 하여 콜백 함수의 this에 바인딩 할 수 있음.
 *
 * => 콜백 함수를 화살표 함수로 정의할 경우 상위 스코프의 this를 참고하기 때문에 더욱 좋다.
 */
class Numbers {
    // constructor생략함.
    numbersArray = [];
    multiply(numbers) {
        numbers.forEach(function (v) {
            this.numbersArray.push(v ** 2);
        }, this);
    }
    entries(numbers) {
        if (this.numbersArray.length > 0) {
            this.numbersArray = [];
        }
        numbers.forEach((v) => this.numbersArray.push(v)); // 콜백 함수를 화살표 함수로 정의시 상위 스코프 entries의 this를 참고함.
    }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(" > ", numbers.numbersArray); // [1, 4, 9]

numbers.entries([1, 2, 3]);
console.log(" > ", numbers.numbersArray); // [1, 2, 3]

/**
 * Polyfill(폴리필) : 특정 브라우저에서 메서드가 지원되지 않을 때, 해당 메서드를 사용 할 수 있도록 기능을 직접 추가하는 것.
 */
