/**
 * 프로토타입(Prototype)
 * 자바스크립트 모든 것은 객체
 * 프로토타입 : 객체 상속 관계를 구현함.
 */

function Circle(radius) {
    this.radius = radius;
}

// 프로토타입 메서드
// Circle 인스턴스로 접근이 가능함.

Circle.prototype.getArea = function () {
    return this.radius * this.radius * Math.PI;
};

const c1 = new Circle(1); // Circle 인스턴스 생성
const c2 = new Circle(2);
/**
 * __proto__는 접근자 프로퍼티로
 * getter를 통해 프로토타입을 반환하고, setter를 통해 객체의 프로토타입을 변경할 수 있다.
 * __proto__는 상속을 통해 사용된다.
 *
 * __proto__는 자기 객체가 소유하지 않고, Object.prototype에 속해있음.
 *
 * 프로토타입은 반드시 단방향 링크드 리스트로 구현되어야 함.
 * 이유? 프로토타입 체인 종점이 존재하지 않으면 프로퍼티를 검색할 때 무한 루프에 빠지기 때문
 *
 * 프로퍼티 검색 방향이 한쪽 방향으로만 올라가야함.
 *
 * __proto__는 Object.prototype의 프로퍼티
 *
 * Object.setPrototypeOf(obj, changePrototype); 프로토타입을 교체하기 위한 메서드
 *
 * 함수 객체에는 prototype프로퍼티가 있으며, 이것이 있으면 생성자 함수로 호출이 가능하고,
 * 일반 객체와 화살표 함수, 클래스 메서드는 prototype프로퍼티가 없기 때문에 생성자 함수로 호출이 불가능.
 */
