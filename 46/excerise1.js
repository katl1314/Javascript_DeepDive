import fetch from "node-fetch";

/**
 * 문제 출처
 * https://ko.javascript.info/async-await#tasks
 * async와 await를 사용하여 코드 변경하기
 * 프라미스 체이닝 챕터의 예시 중 하나를 .then/catch 대신 async/await를 사용해 다시 작성해봅시다.
 * function loadJson(url) {
        return fetch(url)
            .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
            })
        }

        loadJson('no-such-user.json')
            .catch(alert); // Error: 404
 */
async function loadJson(url) {
    try {
        const resource = await fetch(url); // Promise가 처리될때 까지 대기
        if (resource.status !== 200) {
            throw new Error(resource.statusText);
        }
        const jsonData = await resource.json();
        console.log(jsonData);
    } catch (error) {
        console.error("에러", error);
    }
}

loadJson("https://jsonplaceholder.typicode.com/todo1s/1");
