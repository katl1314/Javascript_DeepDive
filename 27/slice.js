/**
 * Array.prototype.slice(start, end) : 배열을 복사하기 위해서 사용함.
 * 지정한 범위를 가지고 새로운 배열을 생성함.
 * 즉 원본 배열이 변경되지 않음.
 *
 * 1. start : 시작 위치: 배열의 끝에서 인덱스를 나타냄 (start)
 * 2. end : 복사를 종료할 위치, 실제로는 해당 인덱스 전까지 복사됨. (end - 1)
 *    생략 시 start이후 모든 배열 요소를 복사한다.
 * 3. 모든 인자를 설정하지 않으면 배열 전체를 복사함.
 */

const arr = [1, 2, 3, 4, 5];

// 0번째에서 2번째 배열 요소를 복사한다.
const oneCopied = arr.slice(0, 3);
console.log("0번째에서 2번째 배열 요소를 복사한다.");
console.log(`원본 배열 : ${arr}`);
console.log(`복사본 배열 : ${oneCopied}`);

console.log("2번째 포함한 이후 배열 요소를 모두 복사한다.");
const twoCopied = arr.slice(2);
console.log(`원본 배열 : ${arr}`);
console.log(`복사본 배열 : ${twoCopied}`);

console.log("배열 전체를 복사해보자");
const threeCopied = arr.slice();
console.log(`원본 배열 : ${arr}`);
console.log(`복사본 배열 : ${threeCopied}`);

/**
 * Array.prototype.slice함수의 모든 인자는 양수와 음수를 가질 수 있음.
 * 양수의 경우 배열의 맨 앞에서부터 복사함.
 * 음수는 반대로 배열의 맨 뒤에서부터 복사함.
 *
 * Array.prototype.slice은 무조건 얕은 복사(shallow copy)임 즉 1 depth까지만 복사됨.
 * 깊은 복사를 사용하기 위해서는 recursive function을 구현하던지, Loadsh 라이브러리 cloneDeep메서드를 이용해야함.
 */
const test = arr.slice(-3, -2);
console.log(test);

/**
 * 해당 메서드가 기존 배열을 복사한다는 점을 이용하여
 * Array.prototype.slice.call(arguments)를 이용하여 이터러블 객체를 배열로 변환할 수 있음.
 *
 * 다만 Array.from(arguments)를 이용하는것이 더 편할 듯. 이 함수도 이터러블 객체를 배열로 변환함.
 *
 * spread문법을 이용하여 이터러블 객체를 배열로 변환도 가능함. (유사 배열은 불가능)
 */

const test2 = { 0: "a", 1: "b", length: 2 }; // 이터러블 객체
console.log(Array.from(test2)); // Array.from을 이용한 배열 생성
console.log(Array.prototype.slice.call(test2)); // Array.prototype.slice을 이용한 배열 생성

function test3() {
    console.log([...arguments]); // 유사 배열 객체를 제외하고 이터러블 객체는 배열로 변환이 가능하더라.
}

test3(1, 2, 3, 4, 5);
