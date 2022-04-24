const person = {};

// 프로퍼티 정의
// Object.defineProperty(object: Object, keyName: string, options: Object)
Object.defineProperty(person, "name", {
    value: "choi",
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(person, "name"));

Object.defineProperty(person, "gender", {
    value: "m",
});

console.log(Object.getOwnPropertyDescriptor(person, "gender"));

for (const key in person) {
    console.log(key); // enumerable이 false인 gender는 반환되지 않는다.
}

// configurable false, writable fasle시 프로퍼티 삭제가 가능할까?
delete person["gender"]; // 삭제 X
delete person["name"]; // 삭제 O

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "gender"));
