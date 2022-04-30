/**
 * String래퍼 객체의 프로퍼티
 * 1. length : 문자열의 개수(길이)를 알 수 있음.
 *
 * 래퍼 객체(Wrapper Object) : 원시값을 감싸는 객체 -> 프로퍼티를 참조할때 감싼 후 프로퍼티 참조가 끝나면 래퍼 객체는 사라짐.
 */
console.log(new String("happy").length);
console.log("javascript".length); // String래퍼 객체를 감싼 후 프로퍼티를 참조한다. 프로퍼티 참조가 끝나면 래퍼 객체는 사라짐.
