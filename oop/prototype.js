function Point(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point(1, 5);
const p2 = new Point(10, 50);
// 메서드와 프로퍼티는 객체가 생성된 이후에도 프로토타입 객체에 동적으로 추가할 수 있다.
Point.prototype.add = function () {
  return this.x + this.y;
};

console.log(p1.add()); // 6
console.log(p2.add()); // 60

/**
 * 프로토타입을 사용하게 되면, 프로토타입 객체로부터 상속을 받을 수 있기 때문에 메모리 양을 대폭 줄일
 * 수 있다.
 *
 * 객체지향적이고 상속을 사용할 수 있음.
 */

/**
 * 클래스 프로퍼티
 * 클래스의 인스턴스로 접근하지 않고, 클래스를 이용하여 접근가능한 프로퍼티
 */

function Circle(r) {
  this.r = r;
}

// 클래스 프로퍼티 생성
Circle.PI = 3.141592;

Circle.prototype.getArea = function () {
  return Circle.PI * this.r ** 2;
};

const c1 = new Circle(10);
console.log(c1.getArea());

// 클래스 메서드
// 클래스 메서드는 생성자 함수로 호출하기 때문에 this키워드는 인스턴스를 참조하지 않는다.
Point.getHigherPoint = function (a, b) {
  if (a.x > b.x) return a;
  return b;
};

//
console.log(Point.getHigherPoint(p1, p2));

function Circle2(r) {
  let radius = r; // 비공개 프로퍼티 (생성자 함수 내에서만 사용가능함.)

  let getArea = function () {
    return Circle.PI * radius ** 2;
  };

  this.area = function () {
    return getArea();
  };
}

let c3 = new Circle2(10);
console.log(c3.area());
