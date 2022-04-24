/**
 * Array.prototype.sort(callback(a, b)): 배열 요소를 정렬하기 위한 함수.
 * 콜백 함수를 이용하여 오름차순과, 내림차순을 정렬 할 수 있음.
 * 다만 콜백 함수를 사용하지 않아도, 정렬은 가능하나, 문제가 발생 할 수 있음.
 * 숫자 정렬도 가능하며, 영문자, 한글도 정렬이 가능함.
 * 
 * 원본 배열이 변경됨.
 */

const arr = [1, 11, 2, 3, 22]; // Array.prototype.sort시 숫자는 일시적으로 문자열로 변환후 정렬한다. (유니코드 코드 포인트)
console.log(arr.sort((a, b) => a - b)); // 오름차순
console.log(arr.sort((a, b) => b - a)); // 내림차순

/**
 * 영문자는 알파벳 순으로 정렬
 */
const fruits = ['apple', 'orange', 'banana', 'mango'];
console.log(fruits.sort());

/**
 * 한글은 초성, 중성, 종성순으로 정렬함.
 */
const fruitsKr = ['나', '노', '냐', '뇨'];
console.log(fruitsKr.sort());

/**
 * Array.prototype.sort의 경우 유니코드 코드 포인트를 가지고 정렬함.
 * 즉 숫자든, 문자열이든, 영문자등 무조건 문자열로 일시적으로 형변환 후 정렬함.(유니코드 코드 포인트로 정렬하기 때문에.)
 * 즉 유니코드 코드 포인트로 정렬하는 문제로 인해 숫자 정렬시 문제가 있을 수 있음.
 */

const todos = [
    { id : 4, content : 'Javascript'},
    { id : 1, content : 'HTML'},
    { id : 2, content : 'CSS'},
]

// console.log(todos.sort(compare('id')));
console.log(todos.sort(compare('content')));
function compare(key) {
    // number타입일 경우 산술연산자(-)를 해서 정렬이 가능함.
    // number이외의 타입은 산술연산자 사용시 NaN이 발생하기 때문에, 비교 연산자(양수, 음수, 0)을 이용하여 처리해야 한다.
    return (a, b) => {
        return (typeof a[key] != 'number' ? a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0) : a[key] - b[key]);
    }
}