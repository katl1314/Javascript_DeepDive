/**
 * Promise : ES6에서 기존 비동기 처리 발식 콜백 함수의 문제점을 개선하기 위해 도입됨.
 * new연산자와 함깨 사용하여 Promsie객체를 생성
 *
 * Promise는 호스트 객체(자바스크립트 런타임 환경에서 제공하는 객체)가 아닌 ECMAScript사양에서 정의된 객체임
 *
 * 생성자 함수의 인자로 콜백함수를 갖으며 매개변수로 resolve, reject 함수를 갖음.
 */

const promise = new Promise((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    if (true) {
        // pending -> fullfilled
        resolve("fullfilled"); // Promise { 'fullfilled' }
    } else {
        // pending -> rejected
        reject(new Error("rejected")); // Promise { <rejected> 'rejected' }
    }
});

console.log(promise); // Promise 객체

/**
 * Promise의 후속 처리 메서드는 then, catch가 있음
 * then은 프로미스 상태 정보가 fullfilled이면 첫번째 콜백 함수 실행
 * 두번째 콜백 함수는 catch메서드가 정의되지 않을때 프로미스 상태가 rejected이면 두번째 콜백 함수 실행
 * catch 후속 메서드는 기본적으로 프로미스 상태가 rejected이면 실행하더라...
 */
/* promise
    .then(
        (d) => {
            // resolve(fullfilled) 이행 상태
            console.log(d);
        },
        (e) => {
            console.log(">>>", e);
        }
    )
    .catch((err) => {
        // reject(rejected) 실패 상태
        console.error(err);
    }); */

/**
 * Promise.prototype.then((data) => {}, (error) => {});
 * then메서드는 두 개의 콜백 함수를 인자로 전달 받음.
 *
 * new Promise(resolve => resolve('data')).then(v => console.log(v), e => console.error(e))
 *
 * 첫번째 콜백 함수는 resolve메소드의 인자를 전달함. (fullfilled)
 * 두번째 콜백 함수는 rejected메서드 호출시 해당 콜백 함수를 호출하는데, catch메서드를 대체함.
 */

/* promise
    .then(
        (v) => console.log(v), // resolve메서드 호출 할 경우 첫번째 콜백 함수를 호출(fullfilled)
        (e) => console.error(e) // reject메서드 호출 할 경우 두번째 콜백 함수를 호출(rejected)
    )
    .finally(() => {
        console.log("이것은 finally일때...."); // 단 하나의 콜백함수를 갖음.
        // 프로미스 상태가 resolve이든, reject이든 반드시 실행함.
    }); */

const myPromsise = new Promise((resolve) => resolve(1)); // Promise객체 생성

myPromsise
    .then((d) => {
        console.log(++d);
        return d;
    })
    .then((d) => {
        console.log(++d);
        return d;
    });

/**
 * Promise.prototype.then의 return시 다음 then메서드로 전달함.
 */
