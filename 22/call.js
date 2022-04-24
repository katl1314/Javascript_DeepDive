/**
 * Function.prototype.call : 함수를 간접호출함.
 * - call메서드의 첫번째 인자로 this에 바인딩함.
 * - 2 ~ n번째 인자 : 함수에 전달할 인자.(arguments으로 처리하던가...) (n > 2)
 */

function getThisBinding() {
    return this;
}
// 일반 함수
console.log(getThisBinding());

// apply, 함수로 전달한 인자는 배열로 전달한다.
console.log(getThisBinding.apply({ name: "choi" }, [1, 2]));

// call, 함수로 전달하는 인자는 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call({ name: "choi" }, 1, 2));

// bind : apply, call처럼 간접 호출하는 것이 아닌 새로운 함수를 재정의한다.
const fn = getThisBinding.bind({ name: "kim" });
console.log(fn());

/**
 * apply, call을 사용하는 대표적인 용도는 유사배열객체(이터러블 객체)에서 배열 메서드를 사용하는 경우
 * Array.prototype.slice.call(arguments)
 */
