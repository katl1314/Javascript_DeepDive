const fibonacci = function (max = 10) {
    // 객체를 반환
    return {
        // 객체 내 Symbol.iterator메소드를 정의해야함.
        // 객체 내 Symbol.iterator메서드가 있으면 이터러블 객체가 됨.
        [Symbol.iterator]() {
            let [prev, cur] = [0, 1];
            return {
                next() {
                    [prev, cur] = [cur, prev + cur];
                    return {
                        value: cur,
                        done: cur >= max,
                    };
                },
            };
        },
    };
};

const myFibonacci = fibonacci(20);
console.log([...myFibonacci]);

for (const item of myFibonacci) {
    console.log(item);
}
