const Queue = (function () {
    function Queue(numbers) {
        if (!Array.isArray(numbers)) {
            throw new TypeError("parameter's is not Array");
        }
        this.numbers = numbers;
    }

    Queue.prototype = {
        constructor: Queue,
        enqueue(...value) {
            // 배열의 마지막에 데이터를 추가한다.
            return this.numbers.push(...value);
        },
        dequeue() {
            // 배열의 맨 앞에 위치한 데이터를 삭제하고 반환한다.
            return this.numbers.shift();
        },
        entries() {
            // 배열의 spread문법을 사용하여 복사본을 반환함.
            return [...this.numbers];
        },
    };
    return Queue;
})();

/**
 * Array.prototype.unshift(...value) => 배열 맨 앞에 요소들을 추가한다.
 * Array.prototype.shift() => 배열 맨 앞에 위치한 요소를 삭제 후 반환한다.
 */

const myQueue = new Queue([1, 2, 3, 4, 5]);
console.log(myQueue.enqueue(6, 7)); // 배열의 맨 뒤에 요소를 추가한다.
console.log(myQueue.dequeue()); // 배열 맨 앞에 위치한 요소를 반환 후 삭제
console.log(myQueue.entries()); // 배열 복사본을 반환함. spread문법 사용하여 얕은 복사를 이용함.
