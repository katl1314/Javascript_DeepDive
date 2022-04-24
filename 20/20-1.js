const myObj = {
    a: 1,
    b: 2,
    c: 3,
};

Object.setPrototypeOf(myObj, { pA: 1, pB: 2 }); // 객체 [[Prototype]]내부슬롯 변경함. __proto__대체

for (let i in myObj) {
    console.log(i);
}

console.log(Object.keys(myObj)); // 객체내 고유 프로퍼티의 키로 구성된 배열을 반환함.
console.log(Object.values(myObj)); // 객체내 고유 프로퍼티의 값으로 구성된 배열을 반환함.
console.log(Object.entries(myObj)); // 객체내 고유 프로퍼티의 키와 값 한 쌍으로 구성된 배열을 반환함.
