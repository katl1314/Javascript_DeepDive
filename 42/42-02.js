const sleep = (callback, delay) => {
    const delayUtil = Date.now() + delay;
    while (Date.now() <= delayUtil);
    callback(delay);
};

const foo = () => {
    console.log("3초 뒤에 실행함.");
};

const bar = () => {
    console.log("bar");
};

// 3초 뒤에 foo함수를 호출함.
// sleep(foo, 3000);

// 동기 처리 : 특정 업무가 완료될때 까지 대기하는 방식
// bar(); // sleep메서드가 호출이 완료되고 bar함수가 동작함.

// setTimeout을 이용하여 비동기 처리를 구현해보자
// 비동기 처리 : 특정 업무가 진행하는 순간에도 다른 업무를 처리하도록 하는 방식

setTimeout(() => {
    // console.log("비동기 처리 3000초 후에 실행");
    foo();
}, 3000);

bar(); // WEB API setTimeout는 비동기 처리를 위한 메서드로 bar함수를 먼저 실행하고 3초 이후에 콜백함수를 실행하여 foo함수를 호출함.
