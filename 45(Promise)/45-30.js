const requestPromise1 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("a"), 1000));
};

const requestPromise2 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("b"), 2000));
};

const requestPromise3 = () => {
    return new Promise((_, reject) => setTimeout(() => reject("c"), 3000));
};

const res = [];

requestPromise1()
    .then((d) => {
        res.push(d);
        return requestPromise2(); // Promise객체를 반환값으로... 다음 then을 처리함.
    })
    .then((d) => {
        res.push(d);
        return requestPromise3(); // Promise객체를 반환값으로... 다음 then을 처리함.
    })
    .then((d) => {
        res.push(d);
        console.log(res); // 6초뒤에 결과 출력
    });

Promise.all([requestPromise1(), requestPromise2(), requestPromise3()])
    .then((arr) => console.log(arr))
    .catch((err) => console.error(err));
