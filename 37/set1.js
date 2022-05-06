/**
 * Set 집합 : 중복되지 않는 값들의 집합으로 이터러블 객체이며
 * Spread 문법, 배열 디스트럭처링, for...of같은 이터레이션 프로토콜을 준수함.
 *
 * 이터레이션 프로토콜
 * 1. 이터러블 프로토콜 : Symbol.iterator메서드를 구현, 프로토타입 체인을 통해 상속받은 객체를 의미하며.
 * Spread 문법, 배열 디스트럭처링, for...of와 같은 기능을 사용할 수 있음.
 * (이터러블 객체를 제외한 나머지 객체는 프로토타입 체인상에서 Symbol.iterator메서드를 상속받지 않기 때문에 이터러블 프로토콜을 준수한 객체가 아님.)
 * 2. 이터레이터 프로토콜 : Symbol.iterator메서드의 next를 호출하여 이터레이터 리절트 객체를 반환하는 형태를 준수하였을때 이터레이터 프로토콜이라고함.
 */

// Set: 중복되지 않는 값들의 집합으로 자바스크립트 빌트인 객체임
// 생성자 함수 형태로 호출하여 함수 인자로 이터러블 객체를 전달한다.
// 그러면 이터러블 객체 내 중복되지 않는 값들로 다시 구성하는 형태임
// Set 생성자 함수로 전달하는 인자가 없을 경우 빈객체만 생성함.

const array = [1, 1, 2, 2, 3, 3, 4, 4, 5]; // 배열이자 이터러블 객체임(이터러블 프로토콜을 준수함.[프로토타입 체인을 통해 Symbol.iterator를 상속받는 객체])

const setA = new Set(array); // Set생성자 함수로 이터러블 객체를 전달하여 객체를 생성함.
/**
 * Set(5) { 1, 2, 3, 4, 5 },
 * [
        1, 1, 2, 2, 3,
        3, 4, 4, 5
    ]
 */
console.log(setA, array);
console.log(Array.from(setA)); // Set객체를 배열로 변환할 때 사용함.
console.log([...setA]); // Spread문법을 이용하여 Set객체를 배열로 변환함.

/**
 * Set의 특징
 * 1. 요소 순서가 중요하지 않음.
 * 2. 인덱스를 통해 배열 요소에 접근할 수 없음.
 * 3. 중복된 값은 제거됨.
 */

const setB = new Set([3, 4, 5, 6, 6, 7]);
console.log(setA, setB);

// Set객체의 프로토타입 프로퍼티 & 메서드

// 1. Set.prototype.size : Set객체내 요소의 개수를 반환
console.log(setA.size);

const { size: length } = setA; // Set객체의 size프로퍼티를 객체 디스트럭처링을 통해 추출.
console.log(length);

// 2. Set.prototype.add(value) : Set객체에 새로운 값을 전달함. 만약 인수로 전달한 값이 Set객체에 있으면 무시함.

setB.add(1);
console.log(setB);

// 3. Set.prototytpe.delete(value) : Set객체에 인수로 전달한 값이 있으면 삭제함.

setB.delete(1);
console.log(setB);

// 4. Set.prototype.clear() : Set객체의 모든 요소를 삭제함.
setB.clear();

console.log(setB);

// Set객체는 메서드 체이닝을 통해 add 메서드를 연속으로 호출하여 값을 추가함. 만약 인수로 전달한 값이 Set객체에 있으면 무시함.
setB.add(3).add(4).add(5).add(6);
console.log(setB);
// Set.prototype.has(value) : Set객체에 값이 존재하는지 검사함 boolean타입으로 반환
console.log(setB.has(3));
console.log(setB.has(7));

for (let i of setB) {
    console.log(i); // Set객체는 이터러블 프로토콜(이터레이블 프로토콜)을 준수하기 때문에 for...of를 통한 요소 순회가 가능함.
}

setB.forEach((d) => console.log(d));
