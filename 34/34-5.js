const fibonacci = function () {
    let i = 0;
    let max = 5;

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    return {
                        value: ++i,
                        done: i > max,
                    };
                },
            };
        },
    };
};

const myFibonacci = fibonacci(); // 이터러블 객체
// for...of를 통해 이터러블 객체를 순회할 수 있음
/* for (const item of myFibonacci) {
    console.log(item);
} */
console.log(fibonacci()[Symbol.iterator]());
// 이터레이터 생성
const iterator = myFibonacci[Symbol.iterator]();
// 이터레이터의 next메서드를 호출하여 이터레이터 리절트 객체를 반환함.
/* console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

// eslint-disable-next-line no-constant-condition
while (true) {
    // 객체 디스트럭처링을 통해 iterator의 next메서드를 호출하여 이터레이터 리절트 객체를 반환함.
    const { value, done } = iterator.next();
    if (done) {
        break;
    }
    console.log(`value = ${value}, done = ${done}`);
}

// 제너레이터
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const myGenerator = generator();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());

/**
 * 데이터 공급자        ------>            인터페이스           ------> 데이터 소비자
 *     배열                                                              for...of
 * 이터러블 객체(String)------>       이터레이션 프로토콜       ------>  Spread 문법
 *    Set/Map                                                         배열 디스트럭처링
 *      DOM                                                           Set, Map 생성자 함수
 */

const iterator2 = {
    [Symbol.iterator]() {
        let i = 0;
        let max = 10;

        return {
            next() {
                return {
                    value: ++i,
                    done: i > max,
                };
            },
        };
    },
};

// iterator2는 이터러블한 객체입니다.
console.log(iterator2[Symbol.iterator], [...iterator2]);
