/**
 * await는 async로 정의된 함수 내에서 사용되어야함.
 * await는 Promise가 처리(Settled)될때까지 잠시 대기
 * await는 반드시 프로미스 앞에서 사용되야함.
 * ex) await Promise.resolve(true)
 *
 * 프로미스가 Settled상태가 되면 프로미스가 resolve된 결과를 변수에 할당받는다.
 * const response = await fetch(url); fetch함수를 통해 Promise가 처리되면 resolve한 프로미스를 변수에 저장.
 */

// ES6방식의 모듈 불러오기
import fetch from "node-fetch";

// CommonJS방식의 모듈 불러오기
// const fetch = require("node-fetch");

const getGithubUserName = async (userId) => {
    /**
     * await는 프로미스가 Settled(수행)될때 까지 잠시 대기하고, 프로미스가 수행되면 계속 진행함.
     */
    // try {
    /**
     * async/await는 reject한 프로미스가 반환시 try-catch를 통해 에러 처리를 할 수 있음.
     * 다만 async/await함수가 Promise를 반환하기 때문에 프로미스 후속 메서드 catch를 통해서도 가능함.
     */
    const res = await fetch(`https://wrong.url/${userId}`);
    const { id, url, name } = await res.json();
    return { id, url, name };
    // } catch (e) {
    //console.error(e); // 에러 강제 발생
    // }
};

// async함수는 프로미스를 반환한다.
const myGithubInfo = getGithubUserName("katl1314");
// 프로미스 후속 메서드 then을 호출하여 데이터를 확인해보자.
myGithubInfo.then((d) => console.log(d)).catch((e) => console.error("!!", e));
