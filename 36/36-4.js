/**
 * 객체 디스트럭처링 할당
 * 기존에는 이터러블 객체에 한에서 디스트럭처링, 스프레드 문법를 사용할 수 있었으나,
 * 최근 버전에는 일반 객체도 디스트럭처링, 스프레드 문법을 사용할 수 있음.
 */

const name = {
    firstName: "Ungmo",
    lastName: "Lee",
};

// 객체의 프로퍼티 키와 다른 변수 이름으로 프로퍼티 값을 할당받기 위해서는 다음과 같이 선언한다.
const { firstName: f1, lastName: f2 } = name;
// console.log(firstName, lastName);
console.log(f1, f2);
