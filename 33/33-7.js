/**
 * Well-Known Symbol
 * 자바스크립트가 기본 제공하는 빌트인 심벌 값이 있음.
 * 빌트인 심벌 값은 Symbol함수의 프로퍼티에 할당되어 있음.
 *
 * 이터러블 객체(Array, Set, Map, String, arguments, TypedArray, NodeList, HTMLCollection, ..)와 같이 for...of와 같은
 * 순회 가능한 빌트인 객체는 기본적으로 Symbol.iterator를 제공함.
 *
 * 이터레이터 구현 시 Symbol.iterator를 이용하여 구현한다.
 */

const iterable = {
    [Symbol.iterator]() {
        let cur = 5;
        let index = 0;

        return {
            next() {
                // next함수 반환값으로 객체를 반환함.
                // 객체는 value와 done으로 구성되며
                // done이 true시 순회가 종료됨.
                return { value: ++index, done: index > cur };
            },
        };
    },
};

for (const num of iterable) {
    console.log(num);
}
