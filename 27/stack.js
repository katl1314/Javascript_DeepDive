const Stack = (function () {
    // 생성자 함수 정의
    function Stack(numbers) {
        if (!Array.isArray(numbers)) {
            throw new TypeError("numbers is not Array");
        }
        this.numbers = numbers;
    }

    /**
     * ES6메서드로 프로토타입 메서드를 동적으로 추가할 경우 다음과 같이 작성해야 한다.
     * 생성자함수.prototype으로 객체 리터럴을 추가함.
     * 객체 리터럴 내 constructor는 Stack을 가리키도록 해야함.
     * Stack.prototype.constructor == Stack
     */
    Stack.prototype = {
        constructor: Stack,
        push(data) {
            // Stack.prototype.push메서드로 전달한 인자가 배열인지 아닌지 검사
            // 배열 인 경우 spread문법을 이용하여 배열을 확장한다.
            if (Array.isArray(data)) {
                return (this.numbers = [...this.numbers, ...data]);
            }
            return (this.numbers = [...this.numbers, data]);
        },
        pop() {
            return this.numbers.pop();
        },
        get length() {
            // 접근자 프로퍼티
            return this.numbers.length;
        },
    };
    return Stack;
})();

// export { Stack };

const myStack = new Stack([1, 2]);
console.log(myStack.push([3, 4]));
myStack.pop();
