/**
 * async함수 : await키워드는 반드시 async함수 내부에서 사용한다.
 * async함수는 async키워드를 사용하며, 언제나 프로미스를 반환함.
 * async함수는 명시적으로 반환하지 않더라도 암묵적으로 resolve한 프로미스를 반환.
 */
// 함수 선언문을 이용한 async-await
async function foo() {
    return 1; 
}
const promise1 = foo();
console.log(promise1); // Resolve한 프로미스를 반환
promise1.then(d => console.log(d));

// 함수 표현식을 이용한 async-await
const promise2 = async function(n) { return n; }
promise2(2).then(d => console.log(d));

// 화살표 함수 이용한 async-await
// generator에서는 화살표 함수로 사용 불가
const promise3 = async (n) => n;

promise3(3).then(d => console.log(d));

// 객체 메소드의 async-await
const obj = {
    async test(n) {
        return n;
    }
}

console.log(obj.test(10).then(d => console.log(d)));

// async 클래스 메소드

class MyAdapter {
    async bar(n) {
        return n;
    }
}
const promise4 = new MyAdapter().bar(20);
promise4.then(d => console.log(d));
console.log(promise4); // 프로미스(then에서 호출하지 않으면 먼저 종료되고 이벤트루프가 마이스터태스크큐를 참조하여 콜스택이 비어있을때 마이스터태스크 큐의 콜백함수를 then으로 전달)


// 제너레이터와 다르게 화살표 함수로는 async함수 정의가 가능하다. 다만 공통점으로는 생성자 함수(constructor)로써 사용은 불가능.
// 제너레이터 함수 => 제너레이터 객체(이터러블 하면서 이터레이터인 객체)
// async/await함수 => promise객체 반환
