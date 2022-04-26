/**
 * Date : 자바스크립트 빌트인 객체로, 날짜와 관련된 프로퍼티와 메서드를 제공합니다.
 * Number와 같이 생성자 함수로 제공하기 때문에 정적 프로퍼티, 정적 메서드, 프로토타입이 제공됩니다.
 *
 * UTC는 국제 표준시로, GMT(그리니치 평균시)으로 불리나, 초의 소수점에서만 차이가 있기에 일상에서는 혼용해서 사용함.
 * KST(한국 표준시)는 UTC(GMT)로부터 +9시간이다.
 */
console.log(new Date()); // 현재 날짜 및 시간을 출력함
console.log(Date.now()); // 현재 날짜 및 시간을 밀리세컨드로 반환함.
console.log(new Date(Date.now())); // new Date()와 같은 결과가 반환됨.

console.log(Date()); // 현재 시간 및 날짜를 문자열로 반환함.

// new Date(dateString): 함수로 전달하는 인자는 Date.parse가 이해할 수 있어야 함. => Date객체를 반환
// yyyy/MM/dd hh:mm:ss
console.log(new Date("2022/04/20 21:10:10"), Date.parse("2022/04/20 21:10:10"));
