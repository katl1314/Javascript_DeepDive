/**
 * String.prototype.substring(startIndex, endIndex):
 * 대상문자열에서 인자로 전달한 인덱스를 가지고 부분 문자열을 반환하는 메서드임.
 * startIndex ~ (endIndex - 1)
 *
 * String.prototype.slice(start, end)와 비슷한 기능이지만 substring의 함수 인자로는 음수가 오면 0으로 초기화됨.
 * 무조건 0이상의 정수가 와야 할것.
 */

const target = "Javascript";

console.log(target.substring()); // 인자로 아무것도 주어지지 않으면, 문자열 그대로 출력함
console.log(target.substring(target.indexOf("s"))); // 대상 문자열에서  4번째 문자열부터 부분 문자열을 반환한다.
console.log(target.substring(2, 5)); // 대상 문자열에서 2번째 문자부터 4번째(5 - 1)문자까지의 부분 문자열을 반환함.

/**
 * String.prototype.slice(start, end) : substring과 마찬가지로 인자로 전달받은 인덱스 사이의 부분 문자열을 반환하는 메서드임
 * 다만 substring과 다른 점은 함수의 인자로 음수값이 올 수 있음. 음수의 경우 문자열 뒤에서부터 검색함.
 */
console.log(target.slice()); // Javascript
console.log(target.slice(4)); // script
console.log(target.slice(4, target.length)); // script
console.log(target.slice(-6, -3)); // index를 음수로도 설정이 가능하다. (문자열 뒤에서부터 검색함)
console.log(target.toUpperCase()); // 대상 문자열 내 소문자를 대문자로 변환함.
console.log(target.toLowerCase()); // 대상 문자열 내 대문자를 소문자로 변환함.

const test = "     I am ungmo lee   ";
/**
 * String.prototype.trim() : 문자열 좌우측에 공백이 있을 경우 제거함
 */
console.log(test);
console.log(test.trim());

/**
 * String.prototype.trimStart() : 문자열 시작 위치에 공백이 있을 경우 제거
 * String.prototype.trimEnd() : 문자열 마지막 위치에 공백이 있을 경우 제거함.
 */
console.log(test.trimStart());

/**
 * String.prototype.repeat(count) : 대상 문자열을 인자로 전달한 개수만큼 반복한다.
 */

const repeat = "abc";
console.log(repeat.repeat(3)); // 대상 문자열 "abc"를 3번 반복하여 출력한다.

/**
 * String.prototype.replace(target, [src|callback]) : 대상문자열 내 인자로 전달받은 target을 검색하고, 있을 경우 두번째 인자로 전달받은 문자열로 변환함.
 * target의 경우 문자열이나 정규표현식으로 특정 패턴을 검색하여 매칭되는 문자열을 바꿀 수 있다.
 * 반대로 두번째 인자로 문자열 말고 함수로도 설정 가능함 -> 검색 결과에 대한 결과값을 반환함.
 */
const str = "Hello World";

// 대상 문자열에서 인수로 전달한 문자열 ("Hello")을 검색하고 검색 결과가 있으면 "Bye"로 변경후 새로운 문자열로 반환함.
console.log(str.replace("Hello", "Bye")); // Bye World
console.log(str); // 대상 문자열은 변경되지 않음

// 정규 표현식을 이용하여 문자열 내 공백문자 모두 삭제한다. /\s+/g ===> '';
const str2 = "      I am Good Man     .     OK Look Up  ";
console.log(str2.replace(/\s+/g, "")); // 공백문자가 한번이라도 반복되는 경우 모두 검색한다. (IamGoodMan.OKLookUp)

// Camel Case(두번째 문자열의 첫글자를 대문자로) 를 Snake Case(문자열 사이에 _(언더바를...))으로 변경해보자

const snakeCase = "hello_world_print";

function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_[a-z]/g, (match) => {
        return `${match[1].toUpperCase()}`;
    });
}

// snake -> camel
const camelCase = snakeToCamel(snakeCase);

console.log(camelCase);

// camel -> snake

function camelToSnake(camelCase) {
    return camelCase.replace(/[A-Z]/g, (str) => {
        return `_${str.toLowerCase()}`;
    });
}
const snakeTest = camelToSnake(camelCase);
console.log(snakeTest, snakeCase, snakeTest === snakeCase);

/**
 * String.prototype.split(sep, limit?) : 대상 문자열에서 인수로 전달한 문자열 또는 정규식을 받아 검색한 다음 매칭되는 문자열을 기준으로 분리된 문자열으로 구성된 배열로 반환함.
 * 두번째 인수의 경우 배열의 개수를 제한한다.
 */
console.log(snakeCase.split("_", 2));
