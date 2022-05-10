/**
 * 이전에는 이터러블에 대해서 정리해보았다.
 * 이터러블은 쉽게 말하면 이터러블 프로토콜을 지킨 객체를 의미함.
 * 이터러블은 Array, String, Set, Map과 같이 각 빌트인 객체의 prototype의 Symbol.iterator 메서드가 정의되어 있음.
 * 이터러블은 for...of로 순회가 가능하고, 배열 디스트럭처링과 스프레트 문법을 사용할 수 있음.
 *
 *
 * 이터레이터: 이터레이터 프로포콜을 준수한 이터레이터를 반환함.
 * Symbol.iterator메서드가 반환한 이터레이터는 next메서드를 갖는다.
 * next는 이터레이터 리절트 객체(value와 done 프로퍼티)를 반환함.
 */

const numbers = [10, 20, 30];

// 이터레이터 생성
// 생성된 이터레이터는 next메서드를 호출하여 이터레이터 리절트 객체를 반환받는다.
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true } 이터레이터 리절트 객체의 done이 true면 순회를 종료함

// Set도 이터러블 객체임
for (const item of new Set(numbers)) {
    console.log(item);
}

const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);

for (let [k, v] of myMap) {
    // for...of와 배열 디스트럭처링를 이용하여 key와 value를 각각 받는다.
    console.log(k, v);
}

// 사용자 정의 유사 배열 객체는 prototype에 Symbol.iterator메서드가 없기 때문에 for...of를 사용할 수 없음.
// 그래서 Array.from이나 Array.prototype.slice.call를 통해 배열(이터러블 객체)로 변환하여 사용한다.
// arugments와 같은 유사 배열 객체는 Symbol.iterator가 있기 때문에 사용 가능함.

function sum() {
    // arguments는 이터러블 객체이므로 Symbol.iterator를 통해 이터레이터 생성 가능함.
    console.log(arguments[Symbol.iterator]); // arguments는 유사배열 객체이지만 Symbol.iterator가 있기 때문에 for...of사용 가능함.
    for (let it of arguments) {
        console.log(it);
    }
}

sum(1, 2, 3, 4, 5);
