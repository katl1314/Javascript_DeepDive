const mygenerator = function* () {
    let x = yield 1;
    console.log(x); // mg1.next(2);
    let y = yield 2;
    console.log(y); // mg1.next(3);
    let z = yield 3;
    console.log(z); // z = mg1.next(4);
    yield x + y + z;
};

const mg1 = mygenerator(); // 제너레이터 객체 반환, 실행 제어 양도

// 제너레이터 함수는 next메서드를 호출하여 yield를 실행함.
console.log(mg1.next()); // 첫번째 next메소드 호출 시 첫번째 yield 표현문을 실행 후 중단, 변수 x에는 할당하지 않음.
console.log(mg1.next(2)); // 두번째 next메소드 호출 시 두번째 yield 표현문을 실행 후 중단, 변수 x에 함수 인자 2를 할당받음.
console.log(mg1.next(3)); // 세번째 next메소드 호출 시 세번째 yield 표현문을 실행 후 중단, 변수 y에 함수 인자 3을 할당받음.
console.log(mg1.next(4)); // 네번째 next메소드 호출 시 네번째 yield 표현문을 실행 후 중단, 변수 y에 함수 인자 4을 할당받음.

// 다음 next메서드 호출 시 yield를 실행하여 중단되기 때문에 이터레이터 리절트 객체를 반환 시 value는 yield의 값, done은 false를 반환(아직 끝나지 않음)

console.log(mg1.next()); // 제너레이터 함수 내 실행할 yield가 없으면 종료. 이터레이터 리절트 객체의 done은 true를 반환함.

const infiniteFibonacci = (function* () {
    let [pre, cur] = [0, 1];
    while (cur < 100) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
})();

/* for (const item of infiniteFibonacci()) {
    if (item > 100) break;
    console.log(item);
} */

const generator = infiniteFibonacci;
// console.log(generator.next());
// console.log(generator.next());

console.log([...generator]); // 제너레이터는 이터러블 객체이자 이터레이터임
