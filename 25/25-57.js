// 동적 상속
// extends를 통해 상속받을 경우 클래스 뿐만 아니라 생성자 함수도 상속받을 수 있음.
// 다만 클래스 확장 대상은 반드시 클래스이어야만 한다.
// extends 키워드 다음에는 내부 메서드 [[Construct]]를 갖는 함수 객체로 평가될 수 있는 표현식을 사용가능하다.

// 생성자 함수
function Base(a) {
    this.a = a;
}

class Derived extends Base {}

// class Base extends Base {} // ===> 에러 발생 extends 키워드 이전에는 반드시 클래스만 올 수 있음.
// extends이후에는 내부 메서드 [[Construct]]를 갖는 함수 객체로 평가할 수 있는 식별자 모두 올 수 있음. (생성자 함수와 클래스 모두 가능)

// 생성자 함수와 클래스에 constructor를 정의하지 않으면 암묵적으로 빈 생성자가 생성됨.
