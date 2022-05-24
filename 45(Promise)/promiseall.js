const fnPromise1 = () => {
    return new Promise((resolve) =>
        setTimeout(() => resolve("fnPromise1"), 3000)
    );
};

const fnPromise2 = () => {
    return new Promise(
        (resolve, reject) => setTimeout(() => reject("fnPromise2"), 2000) // pending => rejected
    );
};

const fnPromise3 = () => {
    return new Promise(
        (resolve) => setTimeout(() => resolve("fnPromise3"), 1000) // pending => fulfilled
    );
};

/**
 * Promise.all은 Promise 정적 메서드로 모든 프로미스의 상태가 fulfilled이면 종료 후 후속처리 메서드
 * then호출,
 * 만약 하나라도 rejected상태이면 즉시 종료 후 catch메서드 호출함.
 */
/* Promise.all([fnPromise1(), fnPromise2(), fnPromise3()])
    .then((d) => console.log(d))
    .catch((err) => console.error(">>", err)); */

/**
 * Promise.race은  여러 프로미스중, 가장 먼저 처리된 프로미스의 상태가 fulfilled이면 then을 호출.
 * rejected이면 catch를 호출
 */
/* Promise.race([fnPromise1(), fnPromise2(), fnPromise3()])
    .then((d) => console.log(d))
    .catch((e) => console.error(e));
 */

/**
 * Promise.allSettled메서드는 모든 프로미스의 상태가 fulfilled이든, rejected이든 결과를 then메서드의
 * 인자로 전달함.
 */
Promise.allSettled([fnPromise1(), fnPromise2(), fnPromise3()])
    .then((d) => console.log("1", d))
    .catch((e) => console.error("2", e));
