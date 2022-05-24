/**
 * Promise 정적 메서드
 * Promise.resolve, Promise.reject : 기존의 값을 래핑하여 프로미스를 생성하는 정적 메서드
 * 해당 함수를 호출시 Promise객체를 반환함.
 */

const resolvePromise = Promise.resolve([1, 2, 3]);
console.log(resolvePromise);

// myPromise.then((arr) => arr.forEach((d) => console.log(d * d)));

const rejectPromise = Promise.reject("rejected"); // Promise객체 생성 프로미스 상태 : rejected
// rejectPromise.then(null, (e) => console.error(e));
console.log(rejectPromise);
rejectPromise.catch((e) => console.error(e));
