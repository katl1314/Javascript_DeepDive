/**
 * 명시적 타입 변환
 */

var x = 10;

var str = x.toString(); // 숫자형을 문자열로 형변환.
console.log(typeof str, str); // string, '10'

// 원본값은 형변환이 되지 않는다.
console.log(typeof x, x); // number, 10

/**
 * 암시적 타입 변환
 * 자바스크립트 엔진이 암묵적으로 타입 변환을 하기도 한다.
 */
console.log(x + ""); // 다음과 같이 +연산자를 이용하여 문자열로 변환할때는 자바스크립트 엔진이 암묵적으로 타입 변환한다.

// 자바스크립트 암시적 타입 변환의 경우
// Symbol값의 경우 암시적 문자열 형변환이 불가능하기 때문에, toString()메서드를 호출하여 명시적으로 문자열 형변환으로 해야함.

function isFalsy(v) {
  // 0(-0), null, undefined, null, '', NaN
  return !v;
}

console.log(isFalsy(0));
console.log(isFalsy(""));

console.log(+null, +undefined); // +null = 0, +undefined => NaN
console.log(+"", +[], +"1", +true, -false); // 0 0 1 1 -0

// 명시적 형변환 : 자바스크립트 빌드인 함수를 이용하여 형 변환이 가능하다. ex) String(123), Number('123'), Boolean(1)
// parseInt(value, 진법(2, 8, 16))

// ?? : null or undefined일 때 병합하는 연산자.
console.log(0 ?? true); // 앞 조건이 0이면 null or undefined가 아니기 때문에 0이 출력됨.
console.log(null ?? true);
console.log(undefined ?? true); // 앞의 조건이 null이거나, undefined이면 우항의 값이 출력
console.log(+"-1");
