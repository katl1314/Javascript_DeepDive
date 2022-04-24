/**
 * for...in : 프로퍼티 열거
 * - 객체 프로퍼티를 순회하며 열거한다.
 * 프로퍼티 어트리뷰트 enumerable이 true인 프로퍼티만 열거한다.
 */

import { myObj } from "./object.js";

for (let key in myObj) {
    console.log(key, myObj[key], Object.getOwnPropertyDescriptor(myObj, key));
}

const mySymbol = Symbol("mySymbol");

const person = {
    name: "Lee",
    address: "Seoul",
    [mySymbol]: true,
    __proto__: {
        age: 20,
    },
};

for (const key in person) {
    console.log(key, person[key]);
}

console.log(person.__proto__);

console.log(person.hasOwnProperty("age"), person.hasOwnProperty("name"));
