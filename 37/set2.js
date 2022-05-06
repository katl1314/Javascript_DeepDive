/**
 * Set을 이용하여 집합 연산 (합집합, 교집합, 차집합)을 구현해보기
 */

Set.prototype.intersection = function (set) {
    return new Set([...this].filter((d) => set.has(d)));
};

Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
};

Set.prototype.difference = function (set) {
    return new Set(
        [...set].filter((d) => {
            return !this.has(d);
        })
    );
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// 교집합
console.log(setA.intersection(setB));
console.log(setB.intersection(setA));
// 합집합
console.log(setA.union(setB));
console.log(setB.union(setA));
// 차집합
console.log(setA.difference(setB));
console.log(setB.difference(setA));

// 부분집합과 상위 집합
// Array.prototype.every를 이용하여 배열 요소를 순회할때마다 콜백함수의 반환값이 모두 true이면 true를 반환
Set.prototype.inSuperset = function (set) {
    return [...set].every((d) => this.has(d));
};
// 상위 집합
console.log(setA.inSuperset(setB)); // this : [1, 2, 3, 4] > set : [2, 4]
console.log(setB.inSuperset(setA)); // this : [2, 4] > set : [1, 2, 3, 4]
