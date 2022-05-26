// eslint-disable-next-line no-unused-vars
const infiniteFibonacci = (() => {
    let [prev, cur] = [0, 1];
    return {
        // [Symbol.iterator]() {return this;},
        [Symbol.iterator]() { // Symbol.iterator메소드 호출 시 이터레이터 객체(next메소드 포함하는 객체) 반환.
            return {
                next() {
                    [prev, cur] = [cur, prev + cur];
                    return {
                        value : cur,
                    };
                }
            };
        }
    };
})();


/* for (const num of infiniteFibonacci) {
    if (num > 100) break;
    console.log(num);
} */
// cur, prev + cur
// 0 1
// 1 1
// 1 2
// 2 3
// 3 5

function* infiniteFibonacci2() {
    let [prev, cur] = [0, 1];
    while (true) {
        [prev, cur] = [cur, prev + cur];
        yield cur;
    }
}

for (const item of infiniteFibonacci2()) {
    if (item > 100) break;
    console.log(item);
}
