/**
 * 객체 디스트럭처링시 할당은 프로퍼티 키임.
 * 예를들어 디스트럭처링 대상 객체에 정의된 프로퍼티 키와 변수로 할당받은 변수명이 동일해야 받을 수 있음.
 * 다만 변수명 앞에 :(콜론) 다른변수명을 사용하여 새로 정의한 변수명으로 받을 수 있음.
 *
 * 객체 디스트럭처링도 기본값을 설정할 수 있으며, 대상 객체에 프로퍼티가 없을때 기본값으로 사용됨.
 * 배열 디스트럭처링과 마찬가지로 좌변과 우변이 모두 객체이어야만 에러가 발생하지 않음.
 */
const { 
    firstName: fn = "Ungmo", 
    lastName: ln 
} = { lastName: "Lee" }; // This is a really really really really really really really really long comment

console.log(fn, ln);

const names = "James";
// 객체 디스트럭처링시 Rest인자를 사용하여 이외의 프로퍼티 값을 하나의 객체로 뭉친다.
const { length, ...other } = names;
// 자바스크립트 빌트인 객체인 String은 프로퍼티 length가 존재하기 때문.
console.log(length, other); // 5

const user = {
    name: "Lee Ungmo",
    address: {
        zipCode: "03068",
        city: "seoul",
    },
};

const {
    address: { city, zipCode },
    name,
} = user;

console.log(name, city, zipCode);
