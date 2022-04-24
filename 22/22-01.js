/**
 * this
 * - 자신이 속한 객체를 가리키는 식별자를 참조함.
 */
const circle = {
    // 프로퍼티: 객체 고유 상태 데이터
    radius: 5,
    // 메서드 : 상태값을 조작하거나 참조
    getDiameter: function () {
        // this: 자신이 속한 객체를 가리키는 식별자를 참조함. => circle
        return this.radius * 2;
    },
};

console.log(circle.getDiameter()); // 10

// 생성자함수
function Circle(radius) {
    // 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자 알 수 없음.
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    // this는 생성자 함수로 만들어진 인스턴스를 가리킨다.
    return this.radius * 2;
};

// 인스턴스를 생성하기 위해서는 생성자 함수가 정의되어야...
const myCircle = new Circle(5);
// myCircle.__proto__ = Circle.prototype
// Circle생성자 함수로 생성한 인스턴스의 내부슬롯 [[Prototype]]은 Circle의 상속을 받는다.
console.log(myCircle.__proto__, Circle.prototype);
console.log(myCircle.getDiameter());

// this 바인딩은 함수의 호출 방식(생성자 함수(new) 또는 일반함수)에 따라 동적으로 결정된다.
// 생성자 함수로써 this -> 생성자 함수로부터 만들어진 인스턴스를 가리킨다.
// 일반 함수로써 this -> 전역 객체(window or global, globalThis)
// 객체 내 메서드 this -> 메서드를 포함하는 객체를 가리키는 식별자를 참조함.

// 바인딩 : 식별자와 값을 연결하는 과정
// 변수 선언은 변수에 값이 저장된 메모리 주소를 바인딩
// this Binding은 this가 가리킬 객체를 바인딩한다.
