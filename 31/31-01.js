/**
 * RegExp : 정규 표현식 : 일정 패턴을 가진 문자열의 집합을 표현하기 위해 사용되는 형식임.
 * 일정 패턴을 가진 문자열들의 집합을 표현하기 위해 사용됨
 * 정규 표현식 생성은 리터럴 방식과 생성자 함수 방식으로 구성되어있다.
 *
 * 리터럴 방식 var regExp = /ab+c/ig
 * 생성자 함수 방식 new RegExp(/ab+c/ig)
 *
 * /(정규표현식 시작)ab+c(패턴)/(정규표현식 종료)gi(플래그)
 */

const target = "Life is too short, You need python Too";

// target문자열 내 대소문자 구별하여 한 번만 검색한다.
// String.prototype.match(RegExp)를 이용해보자. => 결과는 배열로 반환함.
console.log(target.match(/too/));

// target문자열 내 대소문자를 구별하지 않고 전체 검색해보자.
// flag를 i(대소문자 무시), g(전역 검색)를 이용한다.
console.log(target.match(/too/gi));

// target문자열 내 알파벳 소문자o가 몇개가 들어있는지 검사해보자.
// 대소문자를 구별하고, 전역 검색(g)를 해야함.
console.log(target.match(/o/g).length);
console.log(target.match(/123/g)); // 문자열 내 패턴이 일치하지 않으면 null을 반환함.
