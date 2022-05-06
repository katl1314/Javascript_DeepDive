/**
 *  Map : 키와 값의 쌍으로 구성된 컬렉션
 *  자바스크립트의 빌트인 객체임
 *  자바스크립트의 객체와 비슷하나. 일부 다름
 *  객체의 프로퍼티 개수 반환의 경우 Map은 Map.prototype.size를 통해 확인 가능함.
 *  일반객체는 이터러블 프로토콜을 준수하지않아 이터러블 객체가 아니며, Map은 이터러블 객체로 스프레드 문법, 디스트럭처링, for...of같은 기능 사용가능함.
 *  일반 객체의 프로퍼티 키는 문자열 또는 심벌 값만 가능하며, Map은 자바스크립트의 모든 값이 가능함.
 */

// 일반 객체
// 일반 객체는 이터러블 객체가 아니며, 키는 문자열 또는 심볼값만 올 수 있음
const mySymbol = Symbol("test");
const obj = {
    age: 100,
    name: 20,
    [mySymbol]: true,
};

console.log(obj, obj[mySymbol]);
// 프로퍼티 개수
console.log(Object.keys(obj).length); // 프로퍼티 키가 Symbol이면 제외됨.
console.log(Object.getOwnPropertyDescriptor(obj, mySymbol));

for (let i in obj) {
    console.log(obj[i]); // 프로퍼티 키가 심볼이면 반복문에서 제외됩니다.
}

// Map 생성자함수
const myMap = new Map();
console.log(myMap);
// Set과 마찬가지로 생성자 함수로 이터러블 객체를 전달한다.
console.log(
    new Map([
        ["name", "Lee"],
        ["age", 30],
    ])
);

const map1 = new Map([
    ["name", "Lee"],
    ["age", 20],
]);

console.log(...map1);

// Map 요소 개수 확인
console.log(map1.size); // Map.prototype.size

// Map 요소 추가
// Map.prototype.set메서드는 메서드 체이닝으로 연속으로 호출 할 수 있음.
map1.set("job", "programmer"); // Map.prototype.set(key, value)
map1.set({}, "programmer").set(() => {}, "programmer"); // Map의 key는 자바스크립트 모든 값이 올 수 있음(일반 객체는 문자열과 심볼값만)
console.log(map1);

// Map 요소 취득
// Map.prototype.get(key)
// set메서드처럼 메서드 체이닝 사용 불가
console.log(map1.get("job"));

// Map요소 여부 확인
// Map.prototype.has(key) 키를 함수로 전달하여 Map객체에 key에 매칭되는 값이 있으면 true, 없으면 false를 반환함.
console.log(map1.has("job")); // true
console.log(map1.has("job2")); // false

map1.delete("job"); // 인수로 전달한 key가 Map객체에 있으면 삭제하고, 없으면 무시함. 결과는 boolean타입으로 반환함.

map1.clear(); // Map객체의 요소 일괄 삭제 Map.prototype.clear()
console.log(map1);
/* const iterator = map1.entries();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
 */
