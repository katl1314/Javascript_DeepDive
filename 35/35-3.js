/**
 * Spread 문법은 이터러블 객체 뿐만 아니라 일반 객체도 이용이 가능하다!!!
 * Rest 파라미터와 함께 2021년 1월 객체 Spread문법도 사용이 가능하다.
 *
 * 기존에는 이터러블 객체에 한에서 지원하였으나, 현재는 일반 객체도 사용 가능함.
 */

const pos = { x: 1, y: 2 };
const pos2 = { a: 10, b: true };
const copy = { ...pos, ...pos2 }; // 객체 얕은 복사

// console.log(pos, copy); // { x: 1, y: 2 } { x: 1, y: 2

// 기존 객체 복사 Object.assign(target, ...src)를 간략하게 정의한 것이다.
const test = Object.assign({}, pos, pos2);
// console.log(test);

const obj = {
    a: 1,
    b: 2,
    c: {
        f: [1, 2],
    },
};

function cloneDeep(target) {
    let copied = {};
    for (let key in target) {
        const value = target[key];
        if (typeof value === "object") {
            if (!Array.isArray(value)) {
                // value가 일반 객체이면 재귀함수를 통해 처리한다.
                copied[key] = cloneDeep(value);
            } else {
                // 배열에 대한 처리는 spread문법으로 배열 복사를 한다.
                copied[key] = [...value];
            }
        } else {
            // 객체 및 배열을 제외한 나머지 값은 객체의 key에 값을 할당한다.
            copied[key] = value;
        }
    }
    return copied;
}

const copied = cloneDeep(obj);

copied["c"].f = [2, 4];

console.log(copied, obj);
function sum(...iterable) {
    // 이터러블 객체를 배열로 변환하기 위해서는
    // Array.prototype.slice.call, apply
    // Array.from
    // Spread문법 => 유사 배열 객체는 에러 발생 (Symbol.iterator 메서드가 있는 이터러블 객체[배열, 문자열, Set/Map, DOM등]에서만 지원함.)
    console.log([...arguments], ...iterable);
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));

const merged = { ...{ x: 1, y: 10 }, ...{ z: 20 }, x1: 100 };
console.log(merged);
