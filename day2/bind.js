/**
 * 자바스크립트의 함수 호출에는 여러가지 방법이 있다.
 * 일반적으로 사용되는 방식에는 ()소괄호를 이용하는 방식
 * call, apply을 이용하여 호출하는 방식이 있다.
 *
 * 호출은 하지 않아, 다만 함수 너의 this를 내가 전달하는 this로 대체할게
 */

let person1 = {
  name: "James",
};

let person2 = {
  name: "Kim",
  sayName: function (a) {
    return `${this.name} ${a}`;
  },
};

console.log(person2.sayName());

// Function.prototype.bind를 이용하여 새롭게 바인딩한 함수를 생성함.
// 함수 n번째 인자를 이용하여 함수에 전달할 수 있음.(n > 1)
const fn = person2.sayName.bind(person1, 2);
console.log(fn()); // 새롭게 바인딩한 함수를 호출하였다.
