/**
 * 패턴 : 문자열내 일정한 규칙을 표현하기 위해 사용함. (일정한 규칙을 표현)
 * 플래그는 : 검색 방식을 설정하는 옵션 역할(사용하지 않아도 됨.) (검색 방식)
 *
 * 패턴의 시작과 끝은 슬래시(/)를 이용하여 슬래시(/)내 패턴을 작성하고, 플래그는 닫는 플래그 밖에 작성한다.
 * target문자열 내 사용자가 지정한 패턴과 매칭되는지 검사하는 목적.
 */
const target = "Is this all there is?";

console.log(target.match(/.../g)); // 임의의 문자열 검색

// 반복 검색: 패턴이 최소 n번에서 최대 m번 반복하는 문자열을 검색
// {n} 최소 n번에서 최대 n번 반복하는 문자열을 검색
// {n,} 최소 n번부터 반복되는 문자열을 검색한다.

const target2 = "aa bb aA bB AAB bba bbB";

// 최소 1번에서 최대 2번까지 반복하는 문자열 전역 검색(대소문가 부분 함.)
console.log(target2.match(/a{1,2}/g));

// 대소문가 구분 없이, 최소 2번에서 최대 2번 반복하는 문자열 전역 검색
console.log(target2.match(/a{2}/gi));

// 대소문자 구분 없이, 최소 1번이상 반복하는 문자열 전역 검색
console.log(target2.match(/b{1,}/gi));

/**
 * +는 앞선 패턴이 1번이라도 반복되는 문자열을 의미함.
 * 즉 +는 반복 검색 {1,}와 동일함.
 */

const target3 = "A AA B BB Aa Bb AAA";
console.log(target3.match(/A+/g)); // 앞선 패턴 'A'가 문자열내 최소 1번부터 매칭되는 문자열을 배열로 반환.

/**
 * ?는 앞선 패턴이 최소 0번에서 최대 1번 반복하는 문자열을 검색함.
 * 즉 ?는 반복 검색 {0, 1}와 동일함.
 */

console.log(target3.match(/AAAA?/g)); // target3문자열 내 'AAAA?'패턴이 0번 또는 1번이라도 매칭되는 문자열 검색

/**
 * OR연산자 : |를 사용하여 두개의 패턴을 문자열내 검색하여 반환함. /A|B/ 문자열 내 패턴 A 또는 B에 매칭되는 문자열을 검색함.
 */

console.log(target3.match(/AAA?|BBB?/gi)); // target3문자열 내 AAA?패턴 또는 BBB?패턴에 매칭되는 문자열을 검색한다.

// /A+|B+/ === [AB]+
// 더더더더더더 간편하게 해보자.
console.log(target3.match(/[AB]+/g));

// 범위를 설정하려면 [](대괄호)내 -(하이픈)을 사용함.
const target4 = "A AA BB ZZ Aa Bb";
console.log(target4.match(/[A-Z]/g));
console.log(target4.match(/[A-Za-z]/g)); // 대소문자를 구분하지 않고!!!!!!!!!!!

// 문자열 내 숫자를 검색해보자.
const target5 = "AA      BB 12,345";
console.log(target5.match(/[0-9,]/g));
console.log(target5.match(/[\d,]+/g)); // 범위 검색 말고 \d를 이용하여 숫자만 검색할 수 있음. (\D는 숫자를 제외한 나머지를 검색함.)
console.log(target5.match(/[\D,]+/g)); // 범위 검색 말고 \d를 이용하여 숫자만 검색할 수 있음. (\D는 숫자를 제외한 나머지를 검색함.)
console.log(target5.match(/\s+/g)); // 공백 문자 추출 (\s)

// 정규표현식 : 일정 패턴으로 구성된 문자열의 집합을 나타내기 위함.

// \w : 영문자, 숫자, 언더스코어를 의미
// \W : 영문자, 숫자, 언더스코어를 제외한 나머지를 검색한다.
const target6 = "__ 테스트 123 Test &^$";
console.log(target6.match(/\w+/g)); // 영문자, 숫자, 언더스코어만 검색한다.
console.log(target6.match(/\W+/g)); // 영문자, 숫자, 언더스코어 제외한 나머지 문자열을 추출

// NOT검색 : 대괄호 안에 ^를 사용하여 NOT 검색 가능함.

console.log(target6.match(/[^\w]+/g)); // 영문자, 숫자, 언더스코어 제외한 나머지 문자열을 검색.
console.log(target6.match(/[^\s\d]+/g)); // 공백문자, 숫자를 제외한 나머지 문자열을 검색함.

// 시작 위치에서 검색
// 대괄호 바깥에서 ^를 설정한다.
console.log(target6.match(/^\w+/)); // target6 문자열의 시작부분이 언더스코어인지 검색 => 해당하지 않으면 null반환

// 마지막 위치에서 검색
// 대괄호 바깥에서 $를 설정한다.
console.log(target6.match(/[^\w]+$/));
