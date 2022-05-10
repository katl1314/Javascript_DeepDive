/**
 * 사용자 정의 이터러블
 */

const fibonacci = {
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        const max = 10;

        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                // pre = cur;
                // cur = pre + cur;
                return {
                    value: cur,
                    done: cur >= max,
                };
            },
        };
    },
};

/* for (const item of fibonacci) {
    console.log(item);
} */

console.log([...fibonacci]); // 이터러블 객체는 spread문법 사용이 가능함.

const [one, two, ...other] = [...fibonacci];

console.log(one, two, other);
