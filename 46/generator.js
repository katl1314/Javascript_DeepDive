/*
 * Generator(제너레이터) : 코드 블록의 실행을 일시 중지, 필요 시점에 재개할 수 있도록 하는 특수 함수
 * function키워드 앞에 별표(*)를 붙여서 제너레이터 함수를 생성함
 *
 * 제너레이터 함수와 일반 함수는 다음 차이를 갖는다.
 *
 * 1. 제너레이터 함수는 함수 호출자에게 함수 실행 제어권을 양도.
 * 2. 제너레이터 함수는 함수 호출자와 함수 상태를 주고받을 수 있음.
 * 3. 제너레이터 함수는 제너레이터 객체를 반환
 */

function* myGenerator() {
    /*
        제너레이터 함수는 코드 블록 실행을 일시 중단하고, 필요한 시점에 재개할 수 있는 함수
    */
    for (let i = 0; i < 10; ) {
        yield i++; // 함수의 호출자에게 함수 실행권을 양도함.
    }
}

const generator = myGenerator(); // 제너레이터 객체를 반환
console.log(generator);

// console.log([...generator]); // generator객체는 이터러블한 객체이다.

/* for (const item of generator) {
    console.log(item);
} */

// generator 객체는 이터러블 객체이자 이터레이터임
// next메서드를 호출하여 요소들을 순회 후 리절트 객체 반환
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// 제너레이터 함수 표현식
const genExpFunc = function* () {
    yield 1;
};

console.log([...genExpFunc()]);
console.log(Symbol.iterator in genExpFunc()); // Symbol.iterator메서드를 상속받는지 확인
console.log("next" in genExpFunc());

// 객체 내 제너레이터 메서드(ES6)
const obj = {
    // 제너레이터 메서드 메서드명 앞에 *를 추가한다.
    *myGenerator() {
        yield 1;
        yield 2;
    },
};

console.log([...obj.myGenerator()]);

// 클래스 내 제너레이터 메서드
class Adapter {
    // 제너레이터 메서드 메서드명 앞에 *를 추가한다.
    *myGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }
}

console.log([...new Adapter().myGenerator()]);

/**
 * 제너레이터 함수는 화살표 함수로 정의할 수 없음.
 * 제너레이터 함수는 생성자 함수로 사용 불가.
 *
 * const myGenerator = function* () {}
 * new myGenerator() (X)
 *
 * const generator = * () => {} (X)
 *
 * 제너레이터 객체는 Symbol.iterator메서드를 상속받는 이터러블 객체이자, value와 done가 담긴 리절트 객체를 반환하는
 * next메서드를 포함하는 이터레이터임.
 *
 * 즉 제너레이터 함수를 호출하여 제너레이터 객체를 반환시 for...of, Spread문법을 사용하고, next메서드도 바로 사용 가능함.
 *
 * 이터러블 프로토콜 : Symbol.iterator메서드를 상속받는 객체를 의미
 * 이터레이터 프로토콜 : 프로퍼티 value, done로 구성된 리절트 객체를 반환하는 next메서드를 포함하는 객체
 */

function* generator2() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.error(e);
    }
}

// 제너레이터 객체 반환
const myGenerator2 = generator2();
console.log(myGenerator2.next()); // 제너레이터 객체의 next메소드 호출, 리절트 객체 반환
// console.log(myGenerator2.return()); // done이 true, value undefined를 갖는 리절트 객체 반환
console.log(myGenerator2.throw("에러")); // 제너레이터 함수에 try - catch문 사용시 강제 예외 처리함. done이 true, value가 undefined인 리절트 객체를 반환함.

/**
 * 제너레이터는 yield 키워드와 next메소드를 통해 코드 실행을 중단, 원하는 시점에 재개할수 있다.
 * 일반 함수의 호출 이후 제어권은 함수가 독점, 제너레이터 함수는 제어권을 함수 호출자에게 양보함. => next메소드를 통해 제어가 가능하다. 다음 yield까지 계속 진행함.
 */
