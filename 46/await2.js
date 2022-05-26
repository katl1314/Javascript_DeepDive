foo().then((d) => console.log(d));
/**
 * async와 await는 단짝친구임.
 */
async function foo() {
    /**
     * await키워드는 Promise앞에 사용해야함.
     * await는 비동기 처리를 동기처리처럼 순서대로 처리하므로 총 6초 뒤에 async함수는 종료됨.
     */
    /* const a = await new Promise((resolve) =>
        setTimeout(() => resolve(1), 1000)
    );

    const b = await new Promise((resolve) =>
        setTimeout(() => resolve(2), 2000)
    );

    const c = await new Promise((resolve) =>
        setTimeout(() => resolve(3), 3000)
    ); */
    try {
        /**
         * Promise.all메서드는 모든 프로미스 상태가 fulfilled될때 까지 처리하며, 모든 프로미스 상태가 fulfilled이면 즉시 결과값을 resolve한 프로미스를 반환(then 후속 메서드)
         * 만약 하나의 프로미스의 상태가 rejected인 경우 에러를 reject한 프로미스 반환(catch후속 메서드)
         */
        const res = await Promise.all([
            new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
            new Promise((resolve, reject) =>
                setTimeout(() => resolve(2), 2000)
            ),
            new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
        ]);
        console.log(res);
    } catch (error) {
        // Promise상태가 fulfilled가 아닌 rejected이면 reject한 프로미스를 반환
        console.error("에러 발생", error);
    }
}

/**
 * 비동기 함수의 콜백 함수를 호출하는 것은 일반 함수의 호출이 끝났기 때문에 함수내에서 에러를 캐치할 수 없음.
 */

try {
    setTimeout(() => {
        // 타이머 함수의 콜백함수내 변수 a는 별도로 참조하지 않기 때문에 예외처리가 발생하여야 하나
        // 타이머 함수의 콜백함수는 기본적으로 catch에서 에러를 캐치할 수 없음.
        console.log(a);
    }, 1000);
} catch (error) {
    console.error(">>", error);
}
