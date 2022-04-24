/**
 * Array.prototype.forEach의 Polyfill
 * 만약 특정 브라우저에서 최신 메서드를 지원하지 않을 경우 해당 메서드를 직접 구현하고 추가하는 것.
 */

Array.prototype.forEach = function (callback, thisArg) {
    // callback이 함수 타입인지 검사
    if (!typeof callback === "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    // thisArg이 undefined이면 this를 바인딩.
    thisArg = thisArg || this;

    for (let i = 0; i < thisArg.length; i++) {
        callback.apply(thisArg, [thisArg[i], i, thisArg]); // 배열 요소 순회시 callback를 실행한다.
    }
};

[1, 2, 3].forEach((v, i, array) => {
    console.log(v, i, array);
});
