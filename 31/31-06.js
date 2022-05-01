/**
 * 1. 검색 대상 문자열이 http:// 또는 https://으로 시작하는지 검색합니다.
 */

const url = "https://example.com";
// \/는 슬래시에 대한 처리인듯.(/는 정규식에서는 exscape문자이기 때문임.)
console.log(new RegExp(/^https?:\/\//).test(url));

const test = "//";
console.log(test.match(/\/+/));

/**
 * 정규표현식을 이용하여 문자열이 특정 문자열로 끝나는지 검사한다.
 * 검색 대상 문자열이 html으로 끝나는지 검사한다.
 *  $를 이용하여 마지막 위치 검사를 하면 간단하게 해결
 */
const fileName = "index.html";
console.log(/html$/.test(fileName));

/**
 * 숫자로만 이루어진 문자열인지 검사를 함.
 */

const target = "12345";
const target2 = "a12345";

console.log(/^\d+$/.test(target));
console.log(/^[0-9]+$/.test(target));
console.log(/^\d+$/.test(target2));

/**
 * 하나 이상의 공백으로 문자열을 시작하는지 검사함.
 * 시작 위치를 검사하는 ^(대괄호 밖에 설정)과 1개 이상의 공백을 검색하기 위해서는 \s+를 이용해보자.
 */

const target3 = "  abc";
console.log(/^\s+/.test(target3));

/**
 * 아이디로 사용 가능한지 검사한다.
 * 알파벳 대소문자 또는 숫자로 시작하고 끝나며, 4 ~ 10자리({4,10})인지 검사한다.
 */

const id = "abc123";
const id2 = "abc";
const id3 = "1234";
const id4 = "가나다라";
console.log(id, ": ", new RegExp(/^[a-zA-Z0-9]{4,10}$/g).test(id)); // 정상
console.log(id3, ": ", new RegExp(/^[a-zA-Z0-9]{4,10}$/g).test(id3)); // 정상
console.log(id2, ": ", new RegExp(/^[a-zA-Z0-9]{4,10}$/g).test(id2)); // 자릿수 부족
console.log(id4, ": ", new RegExp(/^[a-zA-Z0-9]{4,10}$/g).test(id4)); // 영문자(대소문자) 및 숫자가 아니기 때문에 false

/**
 * 메일 주소 형식에 맞는지 검사한다.
 */
const email = "ungmo2@google.com";
console.log(
    new RegExp(
        /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    ).test(email)
);

/**
 * 핸드폰 번호 유효성 검사
 */
const phone = "010-1234-5678";
console.log(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(phone));
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(phone)); // [0-9]말고 \d를 사용할 수 있음.

/**
 * 특수 문자 포함 검사
 */

const target4 = "123#456#";
console.log(/[^0-9a-zA-Z]/g.test(target4)); // NOT(^)을 이용하여 숫자, 영문자를 제외한 나머지 특수문자를 검색한다.
/**
 * 특수문자를 삭제하기 위해서는 String.prototype.replace를 이용한다.
 * 문자열 내 특수문자는 공백으로 변환한다.
 */

const target5 = target4.replace(/[^\da-zA-Z]/g, "");
console.log(target5, target4);
