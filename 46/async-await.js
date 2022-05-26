import fetch from "node-fetch";

const url = "https://jsonplaceholder.typicode.com/todos/1";

/**
 * @description 기존 Promise 또는 callback으로 비동기 처리 대신 async/await를 이용하여 처리함.
 * @param {string} url - 조회하고자 하는 Resource(URL)을 전달함
 * @param {Function} callback - 후속처리에 대한 콜백함수 전달
 */
(async function (url, callback) {
    try {
        // await로 호출한 함수 내 처리 중 에러 발생 시 catch문에서 처리함.
        const response = await getJSON(url); // Response 객체 반환
        const value = await response.json(); // Response객체의 json메소드 호출
        callback(value); // JSON데이터 전달
    } catch (e) {
        // getJSON내 Promise then메서드에서 예외 처리가 발생 할경우 또는 코드 에러 발생 시 실행함.
        console.error("개같이 멸망", e);
    }
})(url, function (data) {
    console.log(data);
});

function getJSON(url) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            // Response객체의 프로퍼티 ok의 값이 false인 경우 에러 발생
            throw new Error("error");
        }
        return response; // Response객체 반환
    });
}

/**
 * Async/Await는 ES8부터 지원된 기능으로, 기존 제너레이터보다 가독성있게 비동기 처럼 동작하도록 구현함.
 *
 * Async/await는 프로미스 기반으로 동작하며, async/await사용하면 프로미스 then, catch, finally 후속 처리 메서드에 콜백 함수를 전달하여,
 * 후속처리 필요없이, 동기 처리처럼 프로미스 사용 가능.
 *
 * 쉽게 말하면 async/await는 비동기식 처리를 동기식 처리 처럼 동작하여 프로미스 결과를 반환
 * 제너레이터도 동기 처럼 동작하는 방식 => 더욱 간단하고, 가독성이 좋은 async/await가 추가
 */
