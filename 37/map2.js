/**
 * Map객체의 요소 순회
 * Map.prototype.forEach를 통해 Map객체의 요소를 순회할 수 있음.
 * Map.prototype.forEach(callback(value, key, map))
 */

const map = new Map([
    ["name", "Lee"],
    ["age", 25],
]);

// Map객체 요소 추가
map.set("job", "programmer").set("merry", false);

/* map.forEach((value, key) => {
    console.log(`key : ${key}, value : ${value}`);
}); */

// Map객체는 이터러블 객체이므로 for...of를 통해 요소 순회 가능함.
// 디스트럭처링을 통해 key와 value변수에 할당한다.
for (const [key, value] of map) {
    console.log(`key : ${key}, value : ${value}`);
}

console.log(...map);

/**
 * Map.prototype.keys : Map객체에서 key값을 갖는 이터러블이자 이터레이터를 반환함.
 * Map.prototype.values : Map객체에서 value값을 갖는 이터러블이자 이터레이터를 반환함. 즉 next메소드를 호출하여 이터레이터 리절트 객체를 반환함.
 * Map.prototypel.entries : Map객체에서 key와 value 쌍을 갖는 이터러블이자 이터레이터를 반환.
 *
 * Map과 Set은 기본적으로 순서에 의미를 부여하지 않음. 다만 forEach 또는 for...of를 통한 요소 순회시 추가한 순서에 따라 출력됨.
 */
